<script>	
	import TalkList from '$lib/TalkList/index.svelte';
	import TalkDetail from '$lib/TalkDetail/index.svelte';

	let title = 'Not Selected';
	
	let message = '';
	let search = '';

  let talkList = [
		{
			id: '1',
			title: "title",
			timestamp: "2021/5/31",
			message: "message",
		},
		{
			id: '2',
			title: "title2",
			timestamp: "2021/5/31",
			message: "message2",
		},
		{
			id: '3',
			title: "title3",
			timestamp: "2021/5/31",
			message: "message3",
		},
	];
</script>

<div class="flex flex-wrap">
	<div class="w-full md:w-6/12">
		<TalkList talkList={talkList} bind:search={search}  />
	</div>
	
	<div class="w-full md:w-6/12">
		<TalkDetail title={title} bind:message={message} />
	</div>
</div>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>
