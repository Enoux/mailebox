import { action } from './_generated/server.js';
import { v } from 'convex/values';

function toBase64(str: string): string {
	if (typeof globalThis.btoa !== 'undefined') {
		return globalThis.btoa(str);
	}
	return Buffer.from(str).toString('base64');
}

export const publishCommand = action({
	args: {
		ID: v.union(v.string(), v.number()),
		command: v.union(v.literal('open'), v.literal('close'))
	},
	handler: async (ctx, args) => {
		const emqxApiUrl = process.env.EMQX_API_URL;
		const emqxAppId = process.env.EMQX_APP_ID;
		const emqxAppSecret = process.env.EMQX_APP_SECRET;

		if (!emqxApiUrl || !emqxAppId || !emqxAppSecret) {
			throw new Error('EMQX Serverless API environment variables are not configured');
		}

		const id = typeof args.ID === 'string' ? parseInt(args.ID, 10) : args.ID;
		const response = await fetch(`${emqxApiUrl}/publish`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Basic ${toBase64(`${emqxAppId}:${emqxAppSecret}`)}`
			},
			body: JSON.stringify({
				topic: 'esp32/commands',
				payload: JSON.stringify({ ID: id, command: args.command }),
				qos: 1
			})
		});

		if (!response.ok) {
			const errorBody = await response.text();
			throw new Error(`EMQX API error: ${response.status} ${response.statusText} - ${errorBody}`);
		}

		return { success: true };
	}
});
