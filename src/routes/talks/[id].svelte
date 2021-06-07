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

		const res = await fetch(`${url}/${page.params.id}`, {
			headers: {
				'X-API-KEY': import.meta.env['VITE_X-API-KEY'],
			},
		});

		if (res.ok && resList.ok) {
			return {
				props: {
					dataList: await resList.json(),
					data: await res.json()
				},
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	};
</script>

<script>	
	import TalkList from '$lib/TalkList/index.svelte';
	import TalkDetail from '$lib/TalkDetail/index.svelte';

	let title = 'Title';
	
	let message = '';
	let search = '';

	export let data = {};
	export let dataList = {};

	$: talkList = dataList.contents.map((talk) => {
		const object = {
			id: talk.id,
			title: talk.title,
			avatar: talk.image || '',
			timestamp: talk.image || '',
			message: 'messageeee',
		}

		return object;
	})

	$: messageArray = data.content.split('\n\n');

	$: messageList = messageArray.map((talk, index) => {
		const object = {};
		object.id = index.toString();

		const array = talk.split(': ');

		if (array.length > 1) {
		
			if (array[0].indexOf('/') === 0) {
				object.send = true;
				object.person = array[0].replace('/', '');
			} else if (array[0].indexOf('\\') === 0) {
				// object.type = 'object';
				object.person = array[0].replace('\\', '');
			} else if (talk.indexOf('?') === 0) {
				object.alert = true;
				object.person = array[0].replace('?', '');
			} else if (talk.indexOf('!') === 0) {
				object.alert = true;
				object.person = array[0].replace('!', '');
			} else {
				object.erson = array[0];
			}

			object.text = array[1]; 
		} else {
			object.text = talk;
		}

		return object;
	})

  // let talkList = [
	// 	{
	// 		id: '1',
	// 		title: "title",
	// 		timestamp: "2021/5/31",
	// 		message: "message",
	// 	},
	// 	{
	// 		id: '2',
	// 		title: "title2",
	// 		timestamp: "2021/5/31",
	// 		message: "message2",
	// 	},
	// 	{
	// 		id: '3',
	// 		title: "title3",
	// 		timestamp: "2021/5/31",
	// 		message: "message3",
	// 	},
	// ];

// 	let messageList = [
// 		{
// 			id: '1',
// 			text: `text
// `,
// 			timestamp: '21:54',
// 		},
// 		{
// 			id: '2',
// 			text: 'text',
// 			timestamp: '21:54',
// 			send: true,
// 		},
// 		{
// 			id: '3',
// 			text: 'fin',
// 			timestamp: '21:54',
// 			alert: true,
// 		},
// 	];
</script>

<div class="flex flex-wrap">
	<div class="w-full md:w-6/12">
		<TalkList talkList={talkList} bind:search={search}  />
	</div>
	
	<div class="w-full md:w-6/12">
		<TalkDetail title={title} messageList={messageList} bind:message={message} />
	</div>

	<p>{JSON.stringify(messageList)}</p>
</div>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>

