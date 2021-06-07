<script>
	import User32 from "carbon-icons-svelte/lib/User32";
	import AlignBoxTopLeft32 from "carbon-icons-svelte/lib/AlignBoxTopLeft32";
	import Link32 from "carbon-icons-svelte/lib/Link32";
</script>

<nav class="flex justify-around items-center h-16 px-4 border-t-2">
	<a href="/">
		<User32 />
	</a>

	<a href="/talks">
		<AlignBoxTopLeft32 />
	</a>

	<button type="button">
		<Link32 />
	</button>
</nav>
