import { query } from './_generated/server.js';
import { v } from 'convex/values';

export const getParcelsForCourier = query({
	args: { courier_id: v.string() },
	handler: async (ctx, args) => {
		const mailboxes = await ctx.db.query('mailboxes').collect();

		const parcels = await ctx.db
			.query('parcels')
			.filter((q) => q.eq(q.field('courier_id'), args.courier_id))
			.collect();

		const merge = parcels.map((parcel) => ({
			...parcel,
			mailbox_info: mailboxes.find((m) => m.parcel_id === parcel._id)
		}));

		console.log(merge);
		return merge;
	}
});
