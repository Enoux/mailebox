<script>
	import logo from '$lib/assets/mlb_logo.png';
	// import { resolve } from '$app/paths';

	import { authClient } from '$lib/auth-client';
	import { api } from '$convex/_generated/api';
	import { useQuery } from '@mmailaender/convex-svelte';
	import { useAuth } from '@mmailaender/convex-better-auth-svelte/svelte';

	let { data } = $props();

	// Auth state store
	const auth = useAuth();
	const isLoading = $derived(auth.isLoading);
	const isAuthenticated = $derived(auth.isAuthenticated);
	
	const currentUserResponse = useQuery(api.auth.getCurrentUser, () => (isAuthenticated ? {} : 'skip'));
	let user = $derived(currentUserResponse.data);
</script>

<div
	class="from-mlb-blue/20 to-mlb-orange/20 flex h-screen flex-col items-center justify-center bg-linear-to-t"
>
	<div
		class="bg-mlb-white m-6 flex w-1/3 flex-col items-center justify-center rounded-xl p-5 drop-shadow-md"
	>
		<img src={logo} alt="MaiLeBox logo" class="max-w-60 pt-5" />
		<p class="pt-8 text-lg font-extrabold">Welcome!</p>

		<form class="flex w-full flex-col p-5">
			<label for="email" class="mb-1 text-left"> Email </label>
			<input
				type="email"
				id="email"
				class="bg-mlb-gray/50 text-mlb-black hover:border-mlb-orange/60 mb-4 rounded-3xl border-1 border-white px-4 py-1.5"
				placeholder="johndoe@company.com"
			/>
			<label for="password" class="mb-1 text-left"> Password </label>
			<input
				type="password"
				id="password"
				class="bg-mlb-gray/50 text-mlb-black hover:border-mlb-orange/60 mb-4 rounded-3xl border-1 border-white px-4 py-1.5"
			/>

			<input
				type="submit"
				value="Log in"
				class="bg-mlb-orange text-mlb-white m-3 rounded-2xl px-4 py-1.5 text-sm font-medium drop-shadow-sm hover:brightness-90"
			/>

			<button class="bg-mlb-white border border-mlb-orange text-mlb-orange mx-3 my-1 rounded-2xl px-4 py-1.5 text-sm font-medium drop-shadow-sm hover:brightness-95">
				Sign in with Google
			</button>
		</form>

		<a href="/" class="text-mlb-black pt-3 text-sm font-medium underline hover:font-bold">
			Back to claim
		</a>
	</div>
</div>
