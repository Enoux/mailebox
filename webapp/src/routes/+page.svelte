<script>
    import logo from '$lib/assets/mlb_logo.png';
</script>

<div class="from-mlb-blue/20 to-mlb-orange/20 flex h-screen flex-col items-center justify-center bg-linear-to-t">
    <div class="bg-mlb-white m-6 w-80 rounded-xl p-5 flex flex-col items-center justify-center drop-shadow-md">
        <img src={logo} alt="MaiLeBox logo" class="max-w-60 pt-5">
        <p class="text-lg pt-8 font-extrabold"> Input Tracking Number </p>
        <form class="flex flex-col p-3 items-center justify-center">
            <input type="text" id="tracking_num" class="bg-mlb-gray/50 rounded-3xl py-1.5 px-2 text-center text-mlb-black">
            <input type="submit" value="Submit" class="m-3 px-4 py-1.5 bg-mlb-orange rounded-2xl text-sm font-medium text-mlb-white hover:brightness-90 drop-shadow-sm">
        </form>
        <p class="text-sm text-mlb-black font-medium underline pt-10"> Log in as staff </p>
	</div>
</div>
