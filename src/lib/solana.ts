import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';

const SOLANA_NETWORK = 'devnet'
const connection = new Connection(SOLANA_NETWORK)

const solanaConnection = new Connection('https://api.mainnet-beta.solana.com');
//token swap
export const createBlink = async (fromWallet, toAddress, amount) => {
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromWallet.publicKey,
      toPubkey: new PublicKey(toAddress),
      lamports: amount * 1000000000 // Convert SOL to lamports
    })
  )

  const signature = await connection.sendTransaction(transaction, [fromWallet])
  await connection.confirmTransaction(signature)

  return signature
}
export const mintNft = async (nft) => {
  const { name, symbol, uri, wallet } = nft;

      const mintAccount = await Token.createMint(
        connection,
        wallet,
        wallet.publicKey,
        null,
        0,
        TOKEN_PROGRAM_ID
      );

      const tokenAccount = await mintAccount.createAccount(wallet.publicKey);

      await mintAccount.mintTo(tokenAccount, wallet, [], 1);

      // Set metadata
      // This would require additional steps to set the name, symbol, and URI

      return { mintAccount: mintAccount.publicKey.toString(), tokenAccount: tokenAccount.toString() };
    
}



export async function creatNeweBlink(wallet, metadata) {
  try {
    const blink = new PublicKey(metadata.id);
    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: blink,
        lamports: await connection.getMinimumBalanceForRentExemption(0),
        space: 0,
        programId: new PublicKey('BlinkProgramId'), // Replace with actual program ID
      })
    );

    // Add instruction to initialize Blink with metadata
    transaction.add(
      // Custom instruction to initialize Blink
      // This would depend on your specific Solana program
    );

    const signature = await wallet.sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature);

    return { signature, blink: blink.toString() };
  } catch (error) {
    console.error('Error creating Blink:', error);
    throw error;
  }
}

export async function updateBlink(wallet, blinkAddress, newMetadata) {
  try {
    const blink = new PublicKey(blinkAddress);
    const transaction = new Transaction().add(
      // Custom instruction to update Blink
      // This would depend on your specific Solana program
    );

    const signature = await wallet.sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature);

    return { signature };
  } catch (error) {
    console.error('Error updating Blink:', error);
    throw error;
  }
}

export async function deleteBlink(wallet, blinkAddress) {
  try {
    const blink = new PublicKey(blinkAddress);
    const transaction = new Transaction().add(
      // Custom instruction to delete Blink
      // This would depend on your specific Solana program
    );

    const signature = await wallet.sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature);

    return { signature };
  } catch (error) {
    console.error('Error deleting Blink:', error);
    throw error;
  }
}

export async function getBlinkData(blinkAddress) {
  try {
    const blink = new PublicKey(blinkAddress);
    const accountInfo = await connection.getAccountInfo(blink);
    
    // Parse account data based on your Blink structure
    // This is a placeholder and should be replaced with actual parsing logic
    const data = accountInfo.data;
    
    return data;
  } catch (error) {
    console.error('Error fetching Blink data:', error);
    throw error;
  }
}