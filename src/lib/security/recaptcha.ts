'use server';

import { env } from '$env/dynamic/private';

type RecaptchaResponse = {
	success: boolean;
	score?: number;
	action?: string;
	challenge_ts?: string;
	hostname?: string;
	'error-codes'?: string[];
};

const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

export async function verifyRecaptchaToken(
	token: string,
	secret: string = env.PRIVATE_RECAPTCHA_SECRET ?? ''
): Promise<RecaptchaResponse> {
	if (!token || !secret) {
		return { success: false, 'error-codes': ['missing-input'] };
	}

	const params = new URLSearchParams();
	params.append('secret', secret);
	params.append('response', token);

	const response = await fetch(VERIFY_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: params
	});

	if (!response.ok) {
		return { success: false, 'error-codes': ['recaptcha-network-error'] };
	}

	return (await response.json()) as RecaptchaResponse;
}
