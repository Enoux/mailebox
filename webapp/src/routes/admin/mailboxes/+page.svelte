<script>
	import add from '$lib/assets/icons/add.svg';
	import filter from '$lib/assets/icons/filter.svg';
	import locker from '$lib/assets/icons/locker_light.svg';
	import sort from '$lib/assets/icons/sort.svg';
	import search from '$lib/assets/icons/search.svg';

	import Modal from '$lib/components/modal.svelte';
	import Navbar from '$lib/components/navbar.svelte';
    import TableRow from '$lib/components/table_row.svelte';

	let searchValue = $state('');

	let isNavbarActive = $state(true);
	let isAddLockerActive = $state(false);
</script>

<!-- Add Locker Modal -->
{#snippet modal_content()}
	<div class="text-center">
		<h1 class="text-mlb-orange mb-4 text-4xl font-bold">Add Parcel to Locker</h1>

		<div class="my-10">
			<p class="mb-8 text-2xl font-bold">Insert Free Locker Number Here</p>
			<form class="flex w-full flex-col items-center justify-center p-3">
				<label for="tracking_num" class="w-full text-lg font-bold"
					>Input Parcel Tracking Number Here:</label
				>
				<input
					type="text"
					id="tracking_num"
					class="bg-mlb-gray/50 text-mlb-black hover:border-mlb-orange/60 mt-4 w-3/4 w-100 rounded-3xl border-1 border-white px-2 py-1.5 text-center"
					placeholder="RR123456785PH"
				/>
			</form>
		</div>

		<button
			class="bg-mlb-orange text-mlb-white text-l m-3 rounded-2xl px-7 py-3 font-medium drop-shadow-sm hover:brightness-90"
		>
			Add
		</button>
	</div>
{/snippet}

{#if isAddLockerActive}
	<Modal {modal_content} bind:active={isAddLockerActive} />
{/if}

<div class="bg-mlb-gray/30 relative flex h-screen w-screen flex-row">
	<Navbar bind:active={isNavbarActive} />

	<div class="z-0 flex flex-row flex-wrap px-16 py-12 {isNavbarActive ? 'w-4/5' : 'w-full'}">
		<!-- Title & Utilities -->
		<div class="text-mlb-black flex h-1/10 w-3/5 text-3xl font-bold">Mailboxes</div>

		<div class="flex h-1/10 w-2/5">
			<button class="flex w-1/10 place-content-center">
				<img src={filter} class="max-w-8" alt="Filter" />
			</button>

			<button class="flex w-1/10 place-content-center">
				<img src={sort} class="max-w-8" alt="Sort" />
			</button>

			<button class="bg-mlb-gray/50 m-4 flex w-3/5 flex-row rounded-full px-4 py-2">
				<img src={search} class="s-1/5 mr-2 flex" alt="Search" />
				<input
					type="text"
					placeholder="Search..."
					class="flex w-7/8 text-sm"
					bind:value={searchValue}
				/>
			</button>

			<div class="flex w-1/4 place-content-center items-center">
				<button
					class="bg-mlb-orange/90 text-mlb-white flex place-content-center items-center rounded-3xl px-4 py-2 font-bold hover:brightness-90"
					onclick={() => {
						isAddLockerActive = true;
					}}
				>
					<img src={add} class="max-w-8" alt="Add" />
					<img src={locker} class="max-w-8" alt="Mailbox" />
				</button>
			</div>
		</div>

		<!-- Header for the Logs -->
		<div class="mb-4 flex w-full flex-row">
			<div class="w-1/8 content-center text-center text-lg font-bold">Locker Number</div>

			<div class="w-1/4 content-center text-center text-lg font-bold">Recipient</div>

			<div class="w-1/4 content-center text-center text-lg font-bold">Delivered By</div>

			<div class="w-1/4 content-center text-center text-lg font-bold">Claim By</div>

			<div class="w-1/8 content-center text-center text-lg font-bold"></div>
		</div>

		<!-- Content (Actual Logs) -->
		<div class="flex h-8/10 w-full flex-row flex-wrap overflow-auto">
			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>

			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>

			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>

			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>

			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>

			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>

			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>

			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>

			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>

			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>

			<div class="bg-mlb-white mb-4 flex h-1/12 w-full flex-row rounded-2xl">
				<div class="w-1/8 content-center text-center">24</div>

				<div class="w-1/4 content-center text-center">DELA CRUZ, Juan A.</div>

				<div class="w-1/4 content-center text-center">April 28, 2026</div>

				<div class="w-1/4 content-center text-center">May 5, 2026</div>

				<div class="w-1/8 content-center text-center text-sm">
					<button class="bg-mlb-red text-mlb-white mr-4 rounded-lg px-5 py-2"> Unlock </button>
				</div>
			</div>
		</div>
	</div>
</div>
