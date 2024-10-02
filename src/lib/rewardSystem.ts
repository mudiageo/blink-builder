import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import prisma from '$lib/prisma'

const VIEWS_PER_POINT = 100;
const USES_PER_POINT = 10;
const REWARD_TOKEN_MINT = new PublicKey('YOUR_REWARD_TOKEN_MINT_ADDRESS');
const connection = new Connection('https://api.devnet.solana.com');

export async function distributeRewards(wallet, userAddress, amount) {
  try {
    const userPublicKey = new PublicKey(userAddress);
    const rewardToken = new Token(connection, REWARD_TOKEN_MINT, TOKEN_PROGRAM_ID, wallet);

    // Check if the user has an associated token account
    const userTokenAccount = await Token.getAssociatedTokenAddress(
      REWARD_TOKEN_MINT,
      userPublicKey
    );

    const transaction = new Transaction();

    // If the user doesn't have an associated token account, create one
    if (!(await connection.getAccountInfo(userTokenAccount))) {
      transaction.add(
        Token.createAssociatedTokenAccountInstruction(
          REWARD_TOKEN_MINT,
          userTokenAccount,
          userPublicKey,
          wallet.publicKey
        )
      );
    }

    // Transfer tokens to the user's account
    transaction.add(
      Token.createTransferInstruction(
        TOKEN_PROGRAM_ID,
        wallet.publicKey,
        userTokenAccount,
        wallet.publicKey,
        [],
        amount
      )
    );

    const signature = await wallet.sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature);

    return { signature };
  } catch (error) {
    console.error('Error distributing rewards:', error);
    throw error;
  }
}
export const calculateRewards = async(userId) => {
  try {
    const blinks = await prisma.blink.findMany({
      where: { userId },
      select: { views: true, uses: true }
    });

    const totalPoints = blinks.reduce((acc, blink) => {
      const viewPoints = Math.floor(blink.views / VIEWS_PER_POINT);
      const usePoints = Math.floor(blink.uses / USES_PER_POINT);
      return acc + viewPoints + usePoints;
    }, 0);

    return totalPoints;
  } catch (error) {
    console.error('Error calculating rewards:', error);
    return 0;
  }
}

export const redeemRewards = async (userId, points) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { rewardPoints: true }
    });

    if (!user || user.rewardPoints < points) {
      console.error('Insufficient points');
      return false;
    }

    await prisma.user.update({
      where: { id: userId },
      data: { rewardPoints: { decrement: points } }
    });

    // TODO implement the logic to give the user their reward
    // This could involve creating a new NFT, transferring tokens, etc.

    return true;
  } catch (error) {
    console.error('Error redeeming rewards:', error);
    return false;
  }
}