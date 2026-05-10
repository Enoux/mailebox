import { v } from 'convex/values';
import { query } from './_generated/server.js';

export const getParcels = query({
	args: {},
	handler: async (ctx) => {
		const parcels = await ctx.db.query('parcels').collect();
		console.log(parcels);
		return parcels;
	}
});

export const getParcel = query({
	args: { tracking_num: v.string() },
	handler: async (ctx, args) => {
		const parcels = await ctx.db.query('parcels').collect();
		const mailboxes = await ctx.db.query('mailboxes').collect();

		const userParcel = parcels.find((p) => p.tracking_id === args.tracking_num);

		if (userParcel == undefined) return userParcel;

		const mailbox = mailboxes.find((m) => m.parcel_id === userParcel._id);

		return {
			parcel_info: userParcel,
			locker_num: mailbox ? mailbox.locker_number : 'N/A'
		};
	}
});
