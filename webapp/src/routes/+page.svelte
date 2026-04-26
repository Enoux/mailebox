<script>
	import logo from '$lib/assets/mlb_logo.png';
	import { resolve } from '$app/paths';
</script>

<div
	class="from-mlb-blue/20 to-mlb-orange/20 flex h-screen flex-col items-center justify-center bg-linear-to-t"
>
	<div
		class="bg-mlb-white m-6 flex w-1/3 flex-col items-center justify-center rounded-xl p-5 drop-shadow-md"
	>
		<img src={logo} alt="MaiLeBox logo" class="max-w-60 pt-5" />
		<p class="pt-14 text-lg font-extrabold">Input Tracking Number</p>
		<form class="flex flex-col items-center justify-center p-3 w-full">
			<input
				type="text"
				id="tracking_num"
				class="bg-mlb-gray/50 text-mlb-black rounded-3xl px-2 py-1.5 text-center w-3/4 border-1 border-white hover:border-mlb-orange/60"
				placeholder="RR123456785PH"
			/>
			<input
				type="submit"
				value="Submit"
				class="bg-mlb-orange text-mlb-white m-3 rounded-2xl px-4 py-2 my-6 text-sm font-medium drop-shadow-sm w-1/3 hover:brightness-90"
			/>
		</form>
		<p class="text-mlb-black pt-8 text-sm font-medium underline hover:font-bold">Log in as staff</p>
	</div>
</div>
