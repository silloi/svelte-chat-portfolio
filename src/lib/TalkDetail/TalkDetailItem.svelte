<script>
	export let id = '';
	export let avatar = '';
	export let text = '';
	export let timestamp = '';

	export let send = false;
	export let alert = false;
	
	$: received = !send && !alert;
</script>

<section id={id} class="flex my-2" class:send class:alert>
	<div>
		{#if received}
			<img class="w-8 h-8 rounded-full" src={avatar} alt="" />
		{/if}
	</div>
	<div class="flex items-end" class:send>
		<p class="whitespace-pre-wrap leading-4 bg-white rounded-xl mx-1 py-2 px-3" style={alert ? 'background-color: rgba(0,0,0,0.05);' : ''}>
			{text}
		</p>
		{#if !alert}
			<span class="text-xs text-gray-500">
				{timestamp}
			</span>
		{/if}
	</div>
</section>

<style>
	.send {
		flex-direction: row-reverse;
	}
	
	.alert {
		flex-direction: column;
		align-items: center;
	}
</style>
