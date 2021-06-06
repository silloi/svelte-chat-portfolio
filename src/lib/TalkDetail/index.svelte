<script>	
	import TitleBar from '$lib/Bar/TitleBar.svelte';
	import TalkDetailItem from './TalkDetailItem.svelte';
	import EditBar from '$lib/Bar/EditBar.svelte';

	export let title = '';
	export let avatar = 'https://placehold.jp/150x150';
	
	export let message = '';
	
	export let messageList = [];
</script>

<div class="flex flex-col h-screen shadow">
	<TitleBar title={title} />
	
	<div class="flex-1 overflow-auto bg-blue-100">
		<main class="p-4">
			{#each messageList as message}
				<TalkDetailItem  {...message} avatar={avatar} />
			{/each}
		</main>
	</div>
	
	<EditBar bind:message={message} />
</div>
