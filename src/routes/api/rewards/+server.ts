import { json } from '@sveltejs/kit';
import { calculateRewards, redeemRewards } from '$lib/rewardSystem';

export const GET = async ({ request }) => {
  const userId = request.headers.get('X-User-Id') // Assuming you're passing user ID in headers

  if (!userId) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const points = await calculateRewards(userId);
  return json({ points });
}

export const POST = async ({ request }) => {
  const userId = request.headers.get('X-User-Id') // Assuming you're passing user ID in headers

  if (!userId) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { points } = await request.json();
  const success = await redeemRewards(userId, points);

  if (success) {
    return json({ message: 'Rewards redeemed successfully' });
  } else {
    return json({ error: 'Failed to redeem rewards' }, { status: 400 });
  }