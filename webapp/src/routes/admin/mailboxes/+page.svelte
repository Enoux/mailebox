<script>
    import filter from '$lib/assets/icons/filter.svg';
    import sort from '$lib/assets/icons/sort.svg';
    import search from '$lib/assets/icons/search.svg';

	import Navbar from '$lib/components/navbar.svelte';

    let searchValue = $state("");

    let isNavbarActive = $state(true);
</script>

<div class="h-screen w-screen bg-mlb-gray/30 flex flex-row relative">
	<Navbar bind:active={isNavbarActive} />

    <div class="flex flex-row flex-wrap py-12 px-16 z-0 {isNavbarActive ? 'w-4/5' : 'w-full'}">
        <!-- Title & Utilities -->
        <div class="flex w-3/5 text-3xl text-mlb-black font-bold h-1/10">
            Mailboxes
        </div>
        
        <div class="flex w-2/5 h-1/10">
            <button class="flex place-content-center w-1/10">
                <img src={filter} class="max-w-8" alt="Filter">
            </button>

            <button class="flex w-1/10 place-content-center">
                <img src={sort} class="max-w-8" alt="Sort">
            </button>

            <button class="flex flex-row m-4 w-3/4 bg-mlb-gray/50 rounded-full px-4 py-2">
                <img src={search} class="flex s-1/5 mr-2" alt="Search">
                <input type="text" placeholder="Search..." class="flex w-7/8 text-sm" bind:value={searchValue}>
            </button>
        </div>

        <!-- Header for the Logs -->
        <div class="flex flex-row w-full mb-4">
            <div class="w-1/8 font-bold text-lg text-center content-center">
                Locker Number
            </div>

            <div class="w-1/4 font-bold text-lg text-center content-center">
                Recipient
            </div>

            <div class="w-1/4 font-bold text-lg text-center content-center">
                Delivered By
            </div>

            <div class="w-1/4 font-bold text-lg text-center content-center">
                Claim By
            </div>

            <div class="w-1/8 font-bold text-lg text-center content-center">
                
            </div>
        </div>

        <!-- Content (Actual Logs) -->
        <div class="flex flex-row flex-wrap w-full h-8/10 overflow-auto">
            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>

            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>

            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>

            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>

            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>

            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>

            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>

            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>

            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>

            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>

            <div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-4">
                <div class="w-1/8 text-center content-center">
                    24
                </div>

                <div class="w-1/4 text-center content-center">
                    DELA CRUZ, Juan A.
                </div>

                <div class="w-1/4 text-center content-center">
                    April 28, 2026
                </div>

                <div class="w-1/4 text-center content-center">
                    May 5, 2026
                </div>

                <div class="w-1/8 text-sm text-center content-center">
                    <button class="bg-mlb-red px-5 py-2 rounded-lg text-mlb-white mr-4">
                        Unlock
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
