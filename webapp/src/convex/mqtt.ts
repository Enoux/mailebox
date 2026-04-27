import { mutation } from './_generated/server.js';
import { v } from 'convex/values';

export const publishCommand = mutation({
	args: {
		mailboxId: v.id('mailboxes'),
		command: v.union(v.literal('open'), v.literal('close'))
	},
	handler: async (ctx, args) => {
		if (args.command === 'open') {
			await ctx.db.patch(args.mailboxId, { isOpen: true });
		} else if (args.command === 'close') {
			await ctx.db.patch(args.mailboxId, { isOpen: false });
		}

		return { success: true };
	}
});
