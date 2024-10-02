import { json } from '@sveltejs/kit'
import { createBlink } from '$lib/solana'
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
  const { fromWallet, toAddress, amount } = await request.json()
  try {
    const signature = await createBlink(fromWallet, toAddress, amount)
    return json({ signature })
  } catch (error) {
    return json({ error: error.message }, { status: 500 })
  }
}
