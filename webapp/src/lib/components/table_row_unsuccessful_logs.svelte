<script lang="ts">

	let {
		locker_num = '12',
        attempt_date = 1234567,
        scanner_uin = '1234-4567-8901-2345',
	} = $props();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
	// svelte-ignore state_referenced_locally
	let dateOfAttempt = new Date(attempt_date);
    console.log(dateOfAttempt);
    dateOfAttempt.toLocaleDateString(undefined, options);
    let dateString = $derived(new Date(dateOfAttempt).toUTCString());
    let dateArray = dateString.split(" ");
    let finalDate = dateArray.slice(0, 4).join(" ");
</script>

<div
	class="bg-mlb-white border-mlb-white hover:border-mlb-orange mb-2 flex h-1/12 w-full shrink-0 flex-row rounded-2xl border-2 hover:shadow-sm"
>
	<div class="w-1/3 content-center text-center">
		{finalDate}
	</div>

	<div class="w-1/3 content-center text-center">
		{locker_num}
	</div>

    <div class="w-1/3 content-center text-center">
		{scanner_uin}
	</div>
</div>
