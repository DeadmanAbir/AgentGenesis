import { Duration, Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

export const ratelimit = new Ratelimit({
  redis: kv,
  // 2 requests from the same IP in 24 h
  limiter: Ratelimit.slidingWindow(
    Number(process.env.AGENT_REQUEST),
    process.env.AGENT_RESET_TIME as Duration,
  ),
});
