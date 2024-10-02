import { json } from '@sveltejs/kit'
import prisma from '$lib/prisma'
import type { RequestHandler } from './$types';
import { createBlink } from '@$lib/olana';


export const GET: RequestHandler = async ({ request }) => {
 // const userId = url.searchParams.get('userId');
  const userId = request.headers.get('X-User-Id') //  if user ID in headers

  // if (!userId) {
  //   return json({ error: 'Unauthorized' }, { status: 401 })
  // }

  try {
    const blinks = await prisma.blink.findMany({
      where: { userId },
      include: { user: true, template: true, category: true }
    })

    return json(blinks)
  } catch (error) {
    console.error('Error fetching blinks:', error)
    return json({ error: 'Failed to fetch blinks' }, { status: 500 })
  }
}

export const POST: RequestHandler = async ({ request }) => {
  const userId = request.headers.get('X-User-Id') // Assuming you're passing user ID in headers

  // if (!userId) {
  //   return json({ error: 'Unauthorized' }, { status: 401 })
  // }

    const { blink, fromWallet, toAddress, amount } = await request.json();

  try {
    const newBlink = await prisma.blink.create({
      data: {
        ...blink,
        user: { connect: { id: userId } },
        template: { connect: { id: blink.templateId } },
        category: { connect: { id: blink.categoryId } }
      }
    })



    const signature = await createBlink(blink.solanaWallet, toAddress, amount);

    // Update Blink with Solana transaction signature
    await prisma.blink.update({
      where: { id: newBlink.id },
      data: { solanaSignature: signature }
    });

    return json(newBlink, signature)
  } catch (error) {
    console.error('Error creating blink:', error)
    return json({ error: 'Failed to create blink' }, { status: 500 })
  }
}
