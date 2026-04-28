<script lang="ts">
	import logo from '$lib/assets/mlb_logo.png';
	import Modal from '$lib/components/modal.svelte';
	import StatusBar from '$lib/components/status_bar.svelte';
	import StatusDetails from '$lib/components/status_details.svelte';
	import { useConvexClient } from "convex-svelte";
	import { api } from "$convex/api";

	let {
		tracking_num = 'RR123456785PH',
		status = 'Sorting',
		locker_num = '24',
		deadline = '1'
	} = $props();

	let detailsOpen = $state(false);

	function handleClose() {
		detailsOpen = false;
	}

	let otpCode = $state(['', '', '', '', '']);
	let isActive = $state(false);

	function autoFocus(event) {
		let val = event.target.value;
		let new_id = `otp_${Number(event.target.id[4]) + 1}`;

		// If not delete, move on to next field
		if (val != '') {
			document.getElementById(new_id)?.focus();
		}
	}

	// Initialize the action hook
	const client = useConvexClient();

	let otpStatus = "";
	let isLoading = $state(false);

	async function handleButtonClick() {
		isLoading = true;
		status = "Authenticating via Python...";

		try {
			// Manually sending a dummy QR string for testing the button
			const result = await client.action(api.scanner.processQrCode, {});;
			console.log(result)
			const authStatus = result.response.authStatus

			if (authStatus) {
				otpStatus = "Unlocked"
			} else {
				otpStatus = "OTP Invalid"
			}

		} catch (err) {
			console.error(err);
			status = "Error: Could not reach the backend.";
		} finally {
			isLoading = false;
		}
	}
</script>

<!-- Main Tracking Panel -->
<div
	class="from-mlb-blue/20 to-mlb-orange/20 flex h-screen flex-col items-center justify-center bg-linear-to-t"
>
	<div
		class="bg-mlb-white relative m-6 flex w-1/3 flex-col items-center justify-center rounded-xl p-5 drop-shadow-md"
	>
		<img src={logo} alt="MaiLeBox logo" class="mt-4 max-w-50" />
		<div class="mt-4 flex w-full flex-col p-3">
			<p class="py-1 text-left text-sm font-extrabold">Tracking Number</p>
			<p class="bg-mlb-gray/50 text-mlb-black mt-2 rounded-3xl px-2 py-1.5 text-center font-bold">
				{tracking_num}
			</p>
		</div>

		<div class="grid w-full grid-cols-3 gap-2 gap-x-2 p-3">
			<div class="text-sm font-bold">Status:</div>
			<div class="col-span-2 text-sm">{status}</div>

			<div class="text-sm font-bold">Parcel at:</div>
			<div class="col-span-2 text-sm underline">#{locker_num}</div>

			<div class="text-sm font-bold">Claim in:</div>
			<div class="col-span-2 text-sm">{deadline} days</div>
		</div>

		<div class="w-4/5 py-2">
			<!-- <p class="italic"> status tba </p> -->
			<StatusBar stat={status} />
		</div>
		<button
			onclick={() => (detailsOpen = true)}
			class="bg-mlb-orange/80 hover:bg-mlb-orange my-2 w-1/3 rounded-full p-1"
			aria-label="status dropdown"
		>
		</button>

		{#if detailsOpen}
			<StatusDetails stat={status} onClose={handleClose} />
		{/if}

		<button
			class="bg-mlb-orange text-mlb-white m-3 rounded-2xl px-4 py-1.5 text-sm font-medium drop-shadow-sm hover:brightness-90"
			onclick={() => {
				isActive = true;
			}}
		>
			Unlock
		</button>
	</div>
</div>

<!-- OTP Modal -->
{#snippet modal_content()}
	<div class="text-center">
		<h1 class="text-mlb-orange mb-4 text-4xl font-bold">Unlock Locker X</h1>

		<div id="otp_code" class="my-10">
			<h2 class="text-mlb-black my-4 text-xl font-bold">Enter OTP Code below:</h2>
			{#each otpCode, i (i)}
				<input
					id="otp_{i}"
					type="text"
					inputmode="numeric"
					maxlength="1"
					class="bg-mlb-gray mr-4 w-12 rounded-xl p-4 text-center font-bold"
					bind:value={otpCode[i]}
					oninput={autoFocus}
				/>
			{/each}
			</div>

			<button
				class="bg-mlb-orange text-mlb-white m-3 rounded-2xl px-7 py-3 text-l font-medium drop-shadow-sm hover:brightness-90"
				onclick={handleButtonClick}
				disabled={isLoading}
			>
				{isLoading ? "Processing..." : "Unlock"}
			</button>
			<p>{otpStatus}</p>
		</div>

		<button
			class="bg-mlb-orange text-mlb-white text-l m-3 rounded-2xl px-7 py-3 font-medium drop-shadow-sm hover:brightness-90"
		>
			Unlock
		</button>
	</div>
{/snippet}

{#if isActive}
	<Modal {modal_content} bind:active={isActive} />
{/if}
