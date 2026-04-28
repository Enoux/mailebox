<script lang="ts">
	import '../app.css';
	import './layout.css';
	import { createSvelteAuthClient } from '@mmailaender/convex-better-auth-svelte/svelte'; 
	import { authClient } from '$lib/auth-client.js';
	
	// This already includes the setupConvex() function
	createSvelteAuthClient({ authClient }); 

	let { children } = $props();
</script>

{@render children()}
