import { query } from "./_generated/server.js";
// import { v } from "convex/values";

export const getMailboxes = query({
    args: {},
    handler: async (ctx) => {
        const mailboxes = await ctx.db.query("mailboxes").collect();

        const parcels = await ctx.db.query("parcels").collect();

        const merge = mailboxes.map((mailbox) => ({
            ...mailbox,
            parcel_info: parcels.find((p) => p._id === mailbox.parcel_id)
        }));

        console.log(merge);
        return merge;
    },
});