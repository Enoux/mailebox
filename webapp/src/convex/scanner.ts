// convex/scanner.ts
import { action } from "./_generated/server.js";

const pythonUrl = "http://0.0.0.0:8000/scan";

export const processQrCode = action({
  handler: async (ctx) => {
    console.log("Processing QR Scan")
    
    const response = await fetch(pythonUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: ''
    });

    if (!response.ok) {
      throw new Error("Python service is down or returned an error");
    }

    const data = await response.json();

    return data
  }
});

export const processOTP = action({
  handler: async (ctx, args) => {
    console.log("Processing OTP")
    
    const response = await fetch(pythonUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          response: args.response,
          otp: args.otp
        })
    });

    if (!response.ok) {
      throw new Error("Python service is down or returned an error");
    }

    const data = await response.json();
    return data
  }
});