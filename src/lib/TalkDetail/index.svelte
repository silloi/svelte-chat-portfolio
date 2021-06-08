<script lang="ts" context="module">
	export interface IMessage {
		id: number;
		person: string;
		text: string;
		send: boolean;
		alert: boolean;
	}

	export const parseContent = (content: string): IMessage[] => {
		const array = content.split('\n\n');

		const messageList = array.map((talk, index) => {
			const object = {
				id: 0,
				person: '',
				text: '',
				send: false,
				alert: false,
			};
			object.id = index + 1;

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
					object.person = array[0];
				}

				object.text = array[1]; 
			} else {
				object.text = talk;
			}

			return object;
		});

		return messageList;
	};
</script>

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
