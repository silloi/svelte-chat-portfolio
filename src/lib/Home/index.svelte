<script>
	import MenuBar from '$lib/Bar/MenuBar.svelte';
	
	const itemList = [
		{
			name: 'residence',
			emoji: '📌',
			textList: ['東京'],
		},
		{
			name: 'workplace',
			emoji: '🧑‍💻',
			textList: ['チームラボ株式会社', 'パッケージチーム', 'エンジニア'],
		},
		{
			name: 'master',
			emoji: '🎓',
			textList: ['京都大学大学院', '人間・環境学研究科', '修士'],
		},
		{
			name: 'undergraduate',
			emoji: '🎓',
			textList: ['京都大学工学部', '工業化学科', '学士'],
		},
	];
</script>

<div class="flex flex-col h-screen">
	<main class="flex-1 overflow-auto bg-blue-100">
		<div class="flex flex-col items-center mt-20 mb-10">
			<img class="w-20 h-20 rounded-full m-2" src="symbol.png" alt="" />

			<h1 class="text-xl">
				Sillos Silloi
			</h1>
		</div>
		<div class="flex flex-col items-center mb-20">
			<ul class="text-xs">
				{#each itemList as item}
					<li class="flex">
						<icon class="pr-2">{item.emoji}</icon>
						<div>
							{#each item.textList as text}
								<p>
									{text}
								</p>
							{/each}
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</main>
	
	<MenuBar />
</div>
