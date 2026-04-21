<script>
	let status = $state(2);
	let states = ['In Transit', 'Sorting', 'In Locker', 'Claimed'];
</script>

<div class="flex items-center">
	<div
		class="border-mlb-orange ml-2 flex size-12 rounded-full border-3 border-solid {status >= 1
			? 'opacity-100'
			: 'opacity-50'}"
	>
		truck
	</div>

	<div class="bg-mlb-blue h-1 w-4 {status >= 2 ? 'opacity-100' : 'opacity-50'}"></div>

	<div
		class="border-mlb-orange flex size-12 rounded-full border-3 border-solid {status >= 2
			? 'opacity-100'
			: 'opacity-50'}"
	>
		truck
	</div>

	<div class="bg-mlb-blue h-1 w-4 {status >= 3 ? 'opacity-100' : 'opacity-50'}"></div>

	<div
		class="border-mlb-orange flex size-12 rounded-full border-3 border-solid {status >= 3
			? 'opacity-100'
			: 'opacity-50'}"
	>
		truck
	</div>

	<div class="bg-mlb-blue h-1 w-4 {status >= 4 ? 'opacity-100' : 'opacity-50'}"></div>

	<div
		class="border-mlb-orange mr-2 flex size-12 rounded-full border-3 border-solid {status >= 4
			? 'opacity-100'
			: 'opacity-50'}"
	>
		truck
	</div>
</div>

<div class="flex items-center">
	{#each states as state, i}
		<div class="mx-2 w-1/5 text-center text-xs font-semibold {status > i ? 'opacity-100' : 'opacity-50'}">
			{state}
		</div>
	{/each}
</div>
