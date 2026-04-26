<script>
	import logo from '$lib/assets/mlb_logo.png';
	import StatusBar from '$lib/components/status_bar.svelte';
	import StatusDetails from '$lib/components/status_details.svelte';

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
</script>

<div
	class="from-mlb-blue/20 to-mlb-orange/20 flex h-screen flex-col items-center justify-center bg-linear-to-t"
>	
	<div
		class="bg-mlb-white relative m-6 flex w-1/3 h-3/5 flex-col items-center justify-center rounded-xl p-5 drop-shadow-md"
	>
		<img src={logo} alt="MaiLeBox logo" class="max-w-50 mt-4" />
		<div class="flex w-full flex-col p-3 mt-4">
			<p class="py-1 text-left text-sm font-extrabold">Tracking Number</p>
			<p class="bg-mlb-gray/50 text-mlb-black rounded-3xl px-2 py-1.5 mt-2 text-center font-bold">
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

		<div class="py-2 w-4/5">
			<!-- <p class="italic"> status tba </p> -->
			<StatusBar stat={status}/>
		</div>
		<button onclick={() => (detailsOpen = true)} class="w-1/3 bg-mlb-orange/80 p-1 my-2 rounded-full hover:bg-mlb-orange" aria-label="status dropdown">
		</button>
		
		{#if detailsOpen}
			<StatusDetails stat={status} onClose={handleClose}/>
		{/if}

		<button
			class="bg-mlb-orange text-mlb-white m-3 rounded-2xl px-4 py-1.5 text-sm font-medium drop-shadow-sm hover:brightness-90"
		>
			Unlock
		</button>
	</div>
</div>
