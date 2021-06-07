<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ page, fetch }) {
		const url = `https://silloi.microcms.io/api/v1/talks`;
		const resList = await fetch(url, {
			headers: {
				'X-API-KEY': import.meta.env['VITE_X-API-KEY'],
			},
		});

		if (resList.ok) {
			return {
				props: {
					data: await resList.json()
				},
			};
		}

		return {
			status: resList.status,
			error: new Error(`Could not load ${url}`)
		};
	};
</script>

<script>	
	import TalkList from '$lib/TalkList/index.svelte';
	import TalkDetail from '$lib/TalkDetail/index.svelte';

	let title = 'Not Selected';
	
	let message = '';
	let search = '';

	export let data = {};

	$: talkList = data.contents.map((talk) => {
		const object = {
			id: talk.id,
			title: talk.title,
			avatar: talk.image || '',
			timestamp: talk.image || '',
			message: 'messageeee',
		}

		return object;
	})

  // let talkList = [
	// 	{
	// 		id: '1',
	// 		title: '経歴',
  //     avatar: 'https://placehold.jp/150x150',
	// 		timestamp: "2021/5/31",
	// 		message: "学歴、職歴について",
	// 	},
	// 	{
	// 		id: '2',
	// 		title: 'タイトル',
  //     avatar: 'https://placehold.jp/150x150',
	// 		timestamp: "2021/5/31",
	// 		message: "message2",
	// 	},
	// 	{
	// 		id: '3',
	// 		title: 'タイトル',
  //     avatar: 'https://placehold.jp/150x150',
	// 		timestamp: "2021/5/31",
	// 		message: "message3",
	// 	},
	// ];
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
