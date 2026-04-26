// convex/scanner.ts
import { action } from "./_generated/server.js";

export const processQrCode = action({
  handler: async (ctx) => {
    console.log("Processing")
    const pythonUrl = "http://127.0.0.1:8000/authenticate";
    
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