<script>
	import truck from '$lib/assets/icons/truck.svg';
	import storage from '$lib/assets/icons/storage.svg';
	import locker from '$lib/assets/icons/locker.svg';
	import star from '$lib/assets/icons/star.svg';

	import { slide } from 'svelte/transition';

	let { stat, onClose } = $props();
	let states = ['In Transit', 'Sorting', 'In Locker', 'Claimed'];
	let status = $derived(states.indexOf(stat) + 1);
</script>

<div
	in:slide={{ duration: 300, axis: 'y' }}
	out:slide={{ duration: 300, axis: 'y' }}
	class="bg-mlb-white absolute m-6 flex h-full w-full flex-col rounded-xl p-5 drop-shadow-md"
>
	<div class="grid grid-cols-4 py-3">
		<div
			class="border-mlb-orange flex aspect-square w-1/2 items-center justify-center justify-self-center rounded-full border-3 border-solid {status >=
			1
				? 'opacity-100'
				: 'opacity-50'}"
		>
			<img src={truck} alt="Truck Icon" class="size-3/4" />
		</div>
		<div class="col-span-3 {status >= 1 ? 'opacity-100' : 'opacity-50'}">
			<p class="font-medium">In Transit</p>
			{#if status >= 1}
				<p class="text-sm">timestamp</p>
			{/if}
		</div>

		<div
			class="bg-mlb-blue flex h-5 w-1 items-center justify-self-center {status >= 2
				? 'opacity-100'
				: 'opacity-50'}"
		></div>
		<div class="col-span-3"></div>

		<div
			class="border-mlb-orange flex aspect-square w-1/2 items-center justify-center justify-self-center rounded-full border-3 border-solid {status >=
			2
				? 'opacity-100'
				: 'opacity-50'}"
		>
			<img src={storage} alt="Storage Icon" class="size-3/4" />
		</div>
		<div class="col-span-3 {status >= 2 ? 'opacity-100' : 'opacity-50'}">
			<p class="font-medium">Sorting</p>
			{#if status >= 2}
				<p class="text-sm">timestamp</p>
			{/if}
		</div>

		<div
			class="bg-mlb-blue flex h-5 w-1 items-center justify-self-center {status >= 2
				? 'opacity-100'
				: 'opacity-50'}"
		></div>
		<div class="col-span-3"></div>

		<div
			class="border-mlb-orange flex aspect-square w-1/2 items-center justify-center justify-self-center rounded-full border-3 border-solid {status >=
			3
				? 'opacity-100'
				: 'opacity-50'}"
		>
			<img src={locker} alt="Locker Icon" class="size-3/4" />
		</div>
		<div class="col-span-3 {status >= 3 ? 'opacity-100' : 'opacity-50'}">
			<p class="font-medium">In Locker</p>
			{#if status >= 3}
				<p class="text-sm">timestamp</p>
			{/if}
		</div>

		<div
			class="bg-mlb-blue flex h-5 w-1 items-center justify-self-center {status >= 2
				? 'opacity-100'
				: 'opacity-50'}"
		></div>
		<div class="col-span-3"></div>

		<div
			class="border-mlb-orange flex aspect-square w-1/2 items-center justify-center justify-self-center rounded-full border-3 border-solid {status >=
			4
				? 'opacity-100'
				: 'opacity-50'}"
		>
			<img src={star} alt="Star Icon" class="size-3/4" />
		</div>
		<div class="col-span-3 {status >= 4 ? 'opacity-100' : 'opacity-50'}">
			<p class="font-medium">Claimed</p>
			{#if status >= 4}
				<p class="text-sm">timestamp</p>
			{/if}
		</div>
	</div>

	<button onclick={onClose} class="hover:text-mlb-orange pt-5 underline"> Close </button>
</div>
