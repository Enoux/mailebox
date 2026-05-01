<script>
	import add from '$lib/assets/icons/add.svg';
	import filter from '$lib/assets/icons/filter.svg';
	import locker from '$lib/assets/icons/locker_light.svg';
	import sort from '$lib/assets/icons/sort.svg';
	import search from '$lib/assets/icons/search.svg';
    import logo from '$lib/assets/mlb_logo.png';

	import Modal from '$lib/components/modal.svelte';
    import TableRow from '$lib/components/table_row_courier.svelte';

    let searchValue = $state('');
</script>

<div class="from-mlb-blue/20 to-mlb-orange/20 relative flex h-screen w-screen flex-row bg-linear-to-t">
	<div class="z-0 flex flex-col pl-6 pr-2 md:pl-16 md:pr-12 py-6 w-full overflow-x-auto">
        <!-- <img src={logo} alt="MaiLeBox logo" class="max-w-40 pt-5" /> -->

        <div class="text-mlb-black flex flex-row h-1/10 min-w-[700px] mb-2 pr-4">
            <div class="text-3xl font-bold place-content-center">
                Parcels
            </div>

            <div class="flex ml-auto">
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
            </div>
        </div>

		<div class="mb-4 flex w-full min-w-[700px] flex-row pr-4">
			<div class="w-1/8 content-center text-center text-lg font-bold">Parcel Number</div>

			<div class="w-1/4 content-center text-center text-lg font-bold">Recipient</div>

			<div class="w-1/4 content-center text-center text-lg font-bold">Delivered By</div>

			<div class="w-1/4 content-center text-center text-lg font-bold">Claim By</div>

			<div class="w-1/8 content-center text-center text-lg font-bold">Status</div>
		</div>

        <div class="flex h-8/10 w-full min-w-[700px] flex-col overflow-auto pr-4">
			<TableRow />
            <TableRow />
            <TableRow />
            <TableRow />
		</div>
    </div>
</div>
