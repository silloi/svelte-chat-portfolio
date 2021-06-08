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

		const resData = await fetch(`${url}/${page.params.id}`, {
			headers: {
				'X-API-KEY': import.meta.env['VITE_X-API-KEY'],
			},
		});

		if (resData.ok && resList.ok) {
			return {
				props: {
					dataList: await resList.json(),
					data: await resData.json(),
				},
			};
		}

		return {
			status: resData.status,
			error: new Error(`Could not load ${url}`)
		};
	};
</script>

<script>	
	import TalkList from '$lib/TalkList/index.svelte';
	import TalkDetail, { parseContent } from '$lib/TalkDetail/index.svelte';
import { page } from '$app/stores';

	let message = '';
	let search = '';

	export let data = {
    id: '',
    title: '',
    content: '',
	};
	export let dataList = {
		contents: [],
	};

	let selected = $page.params.id;

	$: messageList = parseContent(data.content);
</script>

<div class="flex flex-wrap">
	<div class="w-full md:w-6/12">
		<TalkList talkList={dataList.contents} selected={selected} bind:search={search}  />
	</div>
	
	<div class="w-full md:w-6/12">
		<TalkDetail title={data.title} messageList={messageList} bind:message={message} />
	</div>
</div>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
</svelte:head>

