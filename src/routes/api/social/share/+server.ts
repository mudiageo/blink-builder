import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { shareBlink } from '$lib/social';

export const GET: RequestHandler = async ({ url }) => {
  const blinkId = url.searchParams.get('blinkId');
  const platform = url.searchParams.get('platform');

  if (!blinkId || !platform) {
    return json({ error: 'Missing required parameters' }, { status: 400 });
  }

  const shareUrl = shareBlink(blinkId, platform);
  return json({ shareUrl });
};
