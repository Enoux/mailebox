<script>
	let {
		locker_num = '12',
        attempt_date = 1234567,
        scanner_uin = '1234-4567-8901-2345',
        is_successful = false
	} = $props();

	let dateOfAttempt = $derived(new Date(attempt_date).toUTCString())
</script>

<div
	class="bg-mlb-white border-mlb-white hover:border-mlb-orange mb-2 flex h-1/12 w-full shrink-0 flex-row rounded-2xl border-2 hover:shadow-sm"
>
	<div class="w-1/4 content-center text-center font-bold">
		{locker_num}
	</div>

	<div class="w-1/4 content-center text-center">
		{dateOfAttempt}
	</div>

    <div class="w-1/4 content-center text-center">
		{scanner_uin}
	</div>

    <div class="w-1/4 content-center text-center {is_successful ? 'text-mlb-green' : 'text-mlb-red'}">
		{is_successful ? 'Yes' : 'No'}
	</div>
</div>
