<script>
	export let id = '';
	export let title = '';
	export let timestamp = '';
	export let message = '';
	export let selected = false;
</script>

<li id={id} class="flex items-center h-20 border-b-2" class:bg-blue-200={selected} on:click>
	<div class="px-2">
		<img class="w-16 w-16 rounded-full" src="https://placehold.jp/200x200" alt="" />
	</div>
	<div class="flex flex-col w-full px-2">
		<div class="flex justify-between align-bottom">
			<p class="font-bold">
				{title}
			</p>
			<p class="text-xs text-gray-500">
				{timestamp}
			</p>
		</div>
		<p class="text-sm">
			{message}
		</p>
	</div>
</li>
