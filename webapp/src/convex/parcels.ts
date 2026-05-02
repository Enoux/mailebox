import { query } from "./_generated/server.js";
import { v } from "convex/values";

export const getParcels = query({
    args: {},
    handler: async (ctx) => {
        const parcels = await ctx.db.query("parcels").collect();
        console.log(parcels)
        return parcels;
    },
});