<script>
    import logo from '$lib/assets/mlb_logo.png';
    import { resolve } from '$app/paths';
</script>

<div class="from-mlb-blue/20 to-mlb-orange/20 flex h-screen flex-col items-center justify-center bg-linear-to-t">
    <div class="bg-mlb-white m-6 w-80 rounded-xl p-5 flex flex-col items-center justify-center drop-shadow-md">
        <img src={logo} alt="MaiLeBox logo" class="max-w-60 pt-5">
        <p class="text-lg pt-8 font-extrabold"> Welcome! </p>

        <form class="flex flex-col p-5 w-full">
            <label for="email" class="text-left"> Email </label>
            <input type="email" id="email" class="bg-mlb-gray/50 rounded-3xl py-1.5 px-2 text-mlb-black">
            <label for="password" class="text-left"> Password </label>
            <input type="password" id="password" class="bg-mlb-gray/50 rounded-3xl py-1.5 px-2 text-mlb-black">

            <input type="submit" value="Log in" class="m-3 px-4 py-1.5 bg-mlb-orange rounded-2xl text-sm font-medium text-mlb-white hover:brightness-90 drop-shadow-sm">
        </form>

        <p class="text-sm text-mlb-black font-medium underline pt-10"> Sign in with Google </p>
	</div>
</div>
