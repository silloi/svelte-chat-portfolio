<script>
	export let id = '';
	export let title = '';
	export let image = '';
	export let updatedAt = '';
	export let content = '';
	export let selected = '';

	$: date = new Date(updatedAt);
	$: timestamp = `${date.getHours()}:${date.getMinutes()}`;

	$: message = content.split(': ').length ? content.split(': ')[1] : '';

	$: isSelected = id === selected;
</script>

<li id={id} class:bg-blue-200={isSelected}>
	<a href="/talks/{id}" class="flex items-center h-20 border-b-2">
		<div class="px-2">
			<img class="w-16 w-16 rounded-full" src="{image}" alt="" />
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
	</a>
</li>
