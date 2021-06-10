<script>	
	import Home from '$lib/Home/index.svelte';
	import TalkList from '$lib/TalkList/index.svelte';
	import TalkDetail from '$lib/TalkDetail/index.svelte';

	let title = 'Portfolio Chat';
	
	let message = '';
</script>

<div class="flex flex-wrap">
	<div class="w-full md:w-6/12">
		<Home />
	</div>

	<div class="w-full md:w-6/12">
		<TalkDetail title={title} bind:message={message} />
	</div>
</div>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>

<style>
	:global(html) {
		font-size: 20px;
	}
	
	:global(body) {
		padding: 0;
	}
	
	:global(button) {
		border-style: none;
	}
	
	:global(input[type=text]) {
		border-style: none;
		padding: 0.5rem;
	}
</style>
