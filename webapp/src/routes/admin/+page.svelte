<script>
	import Dashboard from '$lib/components/dashboard.svelte';
</script>

{#snippet page()}
	test
{/snippet}

<div class="h-screen w-screen">
	<Dashboard {page} />
</div>
