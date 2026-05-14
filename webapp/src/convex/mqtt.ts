import { action } from './_generated/server.js';
import { v } from 'convex/values';

function toBase64(str: string): string {
	if (typeof globalThis.btoa !== 'undefined') {
		return globalThis.btoa(str);
	}
	return Buffer.from(str).toString('base64');
}

export async function publishToEmqx(topic: string, payload: string) {
	const emqxApiUrl = process.env.EMQX_API_URL;
	const emqxAppId = process.env.EMQX_APP_ID;
	const emqxAppSecret = process.env.EMQX_APP_SECRET;

	if (!emqxApiUrl || !emqxAppId || !emqxAppSecret) {
		throw new Error('EMQX Serverless API environment variables are not configured');
	}

	const response = await fetch(`${emqxApiUrl}/publish`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Basic ${toBase64(`${emqxAppId}:${emqxAppSecret}`)}`
		},
		body: JSON.stringify({ topic, payload, qos: 1 })
	});

	if (!response.ok) {
		const errorBody = await response.text();
		throw new Error(`EMQX API error: ${response.status} ${response.statusText} - ${errorBody}`);
	}
}

export const publishOpen = action({
	args: {
		ID: v.union(v.string(), v.number()),
		command: v.union(v.literal('open'), v.literal('close'))
	},
	handler: async (_ctx, args) => {
		const id = typeof args.ID === 'string' ? parseInt(args.ID, 10) : args.ID;
		await publishToEmqx('esp32/commands', JSON.stringify({ ID: id, command: args.command }));
		return { success: true };
	}
});

export const publishLed = action({
	args: {
		status: v.union(v.literal('success'), v.literal('failure'))
	},
	handler: async (_ctx, args) => {
		await publishToEmqx('esp32/commands', JSON.stringify({ command: args.status }));
		return { success: true };
	}
});
