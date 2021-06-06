<script>
	import Search32 from "carbon-icons-svelte/lib/Search32";
	
	export let search = '';
</script>

<nav class="flex justify-between items-center h-16 border-b-2">
	<div class="px-4">
		<Search32 />
	</div>
	
	<input type="text" value={search} class="w-full" />
</nav>
