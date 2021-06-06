<script>
	import Add32 from "carbon-icons-svelte/lib/Add32";
	import SendAlt32 from "carbon-icons-svelte/lib/SendAlt32";
	
	export let message = '';
</script>

<footer class="flex justify-between items-center h-16 px-4 border-t-2">
	<button type="button">
		<Add32 />
	</button>
	
	<input type="text" value={message} class="w-full m-4 rounded" />
	
	<button type="button">
		<SendAlt32 />
	</button>
</footer>
