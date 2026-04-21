<script>
	import logo from '$lib/assets/mlb_logo.png';
	import { resolve } from '$app/paths';
</script>

<div
	class="from-mlb-blue/20 to-mlb-orange/20 flex h-screen flex-col items-center justify-center bg-linear-to-t"
>
	<div
		class="bg-mlb-white m-6 flex w-80 flex-col items-center justify-center rounded-xl p-5 drop-shadow-md"
	>
		<img src={logo} alt="MaiLeBox logo" class="max-w-60 pt-5" />
		<p class="pt-8 text-lg font-extrabold">Input Tracking Number</p>
		<form class="flex flex-col items-center justify-center p-3">
			<input
				type="text"
				id="tracking_num"
				class="bg-mlb-gray/50 text-mlb-black rounded-3xl px-2 py-1.5 text-center"
			/>
			<input
				type="submit"
				value="Submit"
				class="bg-mlb-orange text-mlb-white m-3 rounded-2xl px-4 py-1.5 text-sm font-medium drop-shadow-sm hover:brightness-90"
			/>
		</form>
		<p class="text-mlb-black pt-10 text-sm font-medium underline">Log in as staff</p>
	</div>
</div>
