'use server';

type RateLimitConfig = {
	windowMs: number;
	maxRequests: number;
	namespace?: string;
};

type TokenBucket = {
	count: number;
	expiresAt: number;
};

export class MemoryRateLimiter {
	private hits = new Map<string, TokenBucket>();
	private readonly windowMs: number;
	private readonly maxRequests: number;
	private readonly namespace?: string;

	constructor({ windowMs, maxRequests, namespace }: RateLimitConfig) {
		this.windowMs = windowMs;
		this.maxRequests = maxRequests;
		this.namespace = namespace;
	}

	check(identifier: string): { limited: boolean; remaining: number } {
		const key = this.namespace ? `${this.namespace}:${identifier}` : identifier;
		const now = Date.now();
		const bucket = this.hits.get(key);

		if (!bucket || bucket.expiresAt <= now) {
			this.hits.set(key, { count: 1, expiresAt: now + this.windowMs });
			return { limited: false, remaining: this.maxRequests - 1 };
		}

		if (bucket.count >= this.maxRequests) {
			return { limited: true, remaining: 0 };
		}

		bucket.count += 1;
		return { limited: false, remaining: this.maxRequests - bucket.count };
	}
}

const defaultLimiter = new MemoryRateLimiter({
	windowMs: 60_000,
	maxRequests: 60,
	namespace: import.meta.env.PRIVATE_RATE_LIMIT_NAMESPACE
});

export function enforceRateLimit(
	identifier: string,
	limiter: MemoryRateLimiter = defaultLimiter
): { limited: boolean; remaining: number } {
	return limiter.check(identifier);
}
