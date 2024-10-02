import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { followCreator, unfollowCreator } from '$lib/social';
import prisma from '$lib/prisma';


export const POST: RequestHandler = async ({ request }) => {
const session = await prisma.session.findFirst({ where: { /*TODO Add  session validation logic here */ } });
if (!session?.userId) {
  return json({ error: 'Unauthorized' }, { status: 401 });
}

const { creatorId, action } = await request.json();
let success: boolean;

if (action === 'follow') {
  success = await followCreator(session.userId, creatorId);
} else if (action === 'unfollow') {
  success = await unfollowCreator(session.userId, creatorId);
} else {
  return json({ error: 'Invalid action' }, { status: 400 });
}

if (success) {
  return json({ message: `Successfully ${action}ed creator` });
} else {
  return json({ error: `Failed to ${action} creator` }, { status: 500 });
}
};
