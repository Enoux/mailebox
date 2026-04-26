<script lang="ts">
  import { useConvexClient } from "convex-svelte";
  import { api } from "$convex/api";

  // Initialize the action hook
  const client = useConvexClient();

  let status = "Waiting for scan...";
  let isLoading = false;

  async function handleButtonClick() {
    isLoading = true;
    status = "Authenticating via Python...";

    try {
      // Manually sending a dummy QR string for testing the button
      const result = await client.action(api.scanner.processQrCode, {});;
      console.log(result)
      const authStatus = result.response.authStatus

      if (authStatus) {
        status = "User authenticated"
      } else {
        status = "User is invalid"
      }

    } catch (err) {
      console.error(err);
      status = "Error: Could not reach the backend.";
    } finally {
      isLoading = false;
    }
  }
</script>

<div class="p-8 flex flex-col gap-4">
  <h1 class="text-xl font-bold">QR Authentication Tester</h1>
  
  <p class="p-4 bg-gray-100 rounded">
    Status: <strong>{status}</strong>
  </p>

  <button 
    onclick={handleButtonClick}
    disabled={isLoading}
    class="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
  >
    {isLoading ? "Processing..." : "Simulate QR Scan"}
  </button>
</div>