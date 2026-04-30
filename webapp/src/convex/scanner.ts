// convex/scanner.ts
import { action } from "./_generated/server.js";

const PYTHON_URL = "http://0.0.0.0:8000";

export const syncScan = action({
  handler: async (ctx) => {
    const response = await fetch(`${PYTHON_URL}/api/scan-data`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Python service is down or returned an error");
    }

    const data = await response.json();
    const scan = data.scan;

    if (!scan) {
      return { scan: null };
    }

    // Upsert into Convex by UIN
    // const existing = await ctx.db
    //   .query("scans")
    //   .withIndex("by_uin", (q) => q.eq("uin", scan.uin))
    //   .first();

    // if (existing) {
    //   await ctx.db.patch(existing._id, {
    //     transaction_id: scan.transaction_id,
    //     status: "pending",
    //     scanned_at: scan.scanned_at,
    //   });
    // } else {
    //   await ctx.db.insert("scans", {
    //     uin: scan.uin,
    //     transaction_id: scan.transaction_id,
    //     status: "pending",
    //     scanned_at: scan.scanned_at,
    //   });
    // }

    return { scan };
  },
});

export const verifyOtp = action({
  handler: async (ctx, args) => {
    const response = await fetch(`${PYTHON_URL}/api/otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uin: args.uin,
        otp: args.otp,
        transaction_id: args.transaction_id,
      }),
    });

    if (!response.ok) {
      throw new Error("Python service is down or returned an error");
    }

    const data = await response.json();
    return data;
  },
});