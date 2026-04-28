<script>
    let {
        locker_num = '24',
        consignee_name = 'DELA CRUZ, Juan A.',
        delivered_date = 'April 28, 2026',
        claim_by = 'May 5, 2026',

    } = $props();
</script>

<div class="flex flex-row w-full rounded-2xl h-1/12 bg-mlb-white mb-2">
    <div class="w-1/8 text-center content-center">
        {locker_num}
    </div>

    <div class="w-1/4 text-center content-center">
        {consignee_name}
    </div>

    <div class="w-1/4 text-center content-center">
        {delivered_date}
    </div>

    <div class="w-1/4 text-center content-center">
        {claim_by}
    </div>

    <div class="w-1/8 text-sm text-center content-center">
        <button class="bg-mlb-red px-5 py-1 rounded-lg text-mlb-white mr-4">
            Unlock
        </button>
    </div>
</div>