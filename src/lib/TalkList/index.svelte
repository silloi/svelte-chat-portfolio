<script>
	import SearchBar from '$lib/Bar/SearchBar.svelte';
	import TalkListItem from './TalkListItem.svelte';
	import MenuBar from '$lib/Bar/MenuBar.svelte';
	
	export let search = '';
	export let talkList = [];
	
	let talkIndex = '';
</script>

<div class="flex flex-col h-screen">
	<SearchBar bind:search={search} />
	
	<div class="flex-1 overflow-auto bg-blue-100">
		<ul>
			{#each talkList as talk}
				<TalkListItem {...talk} selected={talkIndex === talk.id} on:click={() => talkIndex = talk.id} />
			{/each}
		</ul>
	</div>
		
	<MenuBar />
</div>
