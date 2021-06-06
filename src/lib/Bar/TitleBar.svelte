<script>
	import ArrowLeft32 from "carbon-icons-svelte/lib/ArrowLeft32";
	import OverflowMenuVertical32 from "carbon-icons-svelte/lib/OverflowMenuVertical32";
	
	export let title = '';
</script>

<nav class="flex justify-between items-center h-16 px-4 border-b-2">
	<button type="button">
		<ArrowLeft32 />
	</button>
	
	<h1 class="text-xl">
		{title}
	</h1>
	
	<button type="button">
		<OverflowMenuVertical32 />
	</button>
</nav>
