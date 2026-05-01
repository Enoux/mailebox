<script>

    import Modal from "./modal.svelte";

    let {
        locker_num = '24',
        recipient_uid = 'DELA CRUZ, Juan A.',
        delivered_date = 'April 28, 2026',
        claim_by = 'May 5, 2026',
        status = 'In Locker',
    } = $props();

    let isOverrideActive = $state(false);
</script>

<button 
    class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-2 shrink-0 border-2 border-mlb-white hover:shadow-sm hover:border-mlb-orange"
    onclick={() => {isOverrideActive = true}}
>
    <div class="w-1/8 text-center content-center font-bold">
        {locker_num}
    </div>

    <div class="w-1/4 text-center content-center">
        {recipient_uid}
    </div>

    <div class="w-1/4 text-center content-center">
        {delivered_date}
    </div>

    <div class="w-1/4 text-center content-center">
        {claim_by}
    </div>

    <div class="w-1/8 text-sm text-center content-center">
        {status}
    </div>
</button>

<!-- Locker Override Modal -->
{#snippet modal_content()}
    <div class="text-center">
		<h1 class="text-mlb-black mb-4 md:mb-8 text-2xl md:text-4xl font-bold">Deliver Parcel</h1>

		<h1 class="text-mlb-orange mb-3 md:mb-6 text-xl md:text-3xl font-bold">Deliver to Locker {locker_num}?</h1>

        <p class="text-mlb-black mb-4 md:mb-8"> 
            Please place the parcel inside the locker before pressing Deliver.
        </p>

		<button
			class="bg-mlb-orange text-mlb-white text-l m-3 rounded-2xl px-7 py-3 font-bold drop-shadow-sm hover:brightness-90"
		>
			Deliver
		</button>
	</div>
{/snippet}

{#if isOverrideActive}
    <Modal {modal_content} bind:active={isOverrideActive}/>
{/if}