import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { trackBlinkView } from '$lib/analytics';

export const GET: RequestHandler = async ({ params }) => {
  const blinkId = params.id;
  await trackBlinkView(blinkId);
  return json({ success: true });
};