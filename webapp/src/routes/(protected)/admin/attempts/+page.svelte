<script>
	import filter from '$lib/assets/icons/filter.svg';
	import sort from '$lib/assets/icons/sort.svg';
	import search from '$lib/assets/icons/search.svg';

	import Navbar from '$lib/components/navbar.svelte';
	import TableRow from '$lib/components/table_row_attempt.svelte';

	import { useQuery } from 'convex-svelte';
	import { api } from '$convex/_generated/api.js';
	const attempts = useQuery(api.attempts.getAttempts, {});

	let searchValue = $state('');

	let isNavbarActive = $state(true);
</script>

<div class="bg-mlb-gray/30 relative flex h-screen w-screen flex-row">
	<Navbar bind:active={isNavbarActive} />

	<div class="z-0 flex flex-col py-12 pr-12 pl-16 {isNavbarActive ? 'w-4/5' : 'w-full'}">
		<!-- Title & Utilities -->
		<div class="text-mlb-black mb-2 flex h-1/10 flex-row pr-4">
			<div class="w-3/5 place-content-center text-3xl font-bold">Locker Attempts</div>

			<div class="flex w-2/5">
				<button class="flex w-1/10 place-content-center">
					<img src={filter} class="max-w-8" alt="Filter" />
				</button>

				<button class="flex w-1/10 place-content-center">
					<img src={sort} class="max-w-8" alt="Sort" />
				</button>

				<button class="bg-mlb-gray/50 m-4 flex w-4/5 flex-row rounded-full px-4 py-2">
					<img src={search} class="s-1/5 mr-2 flex" alt="Search" />
					<input
						type="text"
						placeholder="Search..."
						class="flex w-7/8 text-sm"
						bind:value={searchValue}
					/>
				</button>
			</div>
		</div>

		<!-- Header for the Logs -->
		<div class="mb-4 flex w-full flex-row pr-4">
			<div class="w-1/4 content-center text-center text-lg font-bold">Locker Number</div>

			<div class="w-1/4 content-center text-center text-lg font-bold">Date of Attempt</div>

			<div class="w-1/4 content-center text-center text-lg font-bold">Scanned UIN</div>

			<div class="w-1/4 content-center text-center text-lg font-bold">Is Successful?</div>
		</div>

		<!-- Content (Actual Logs) -->
		<div class="flex h-8/10 w-full flex-col overflow-auto pr-4">
			{#if attempts.isLoading}
				<p>Loading...</p>
			{:else if attempts.error}
				<p>failed to load: {attempts.error.toString()}</p>
			{:else}
				{#each attempts.data as attempt (attempt._id)}
					<TableRow
						locker_num={attempt.locker_number}
						attempt_date={attempt.attempt_date}
						scanner_uin={attempt.uin}
						is_successful={attempt.is_successful}
					/>
				{/each}
			{/if}
		</div>
	</div>
</div>
