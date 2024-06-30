<script>
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
	<header class="bg-slate-900 text-slate-100 h-24 flex items-center justify-center">
		<nav class="h-full flex items-center justify-center">
			<h1
				class="font-extralight text-4xl"
				style="font-family: 'Playwrite US Trad', cursive; font-weight: 400;"
			>
				<span>
					<a href="/">Album Room</a>
				</span>
			</h1>
		</nav>
	</header>

	<main class="flex-grow">
		<slot></slot>
	</main>

	<footer class="bg-slate-900 text-slate-100 h-36 flex items-center justify-between px-10">
		<div class="flex items-center">
			<img
				class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-3"
				src="/github_neon_icon.png"
				alt="github"
			/>
			<img
				class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-3"
				src="/photo_icon.png"
				alt="instagram"
			/>
			<img
				class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-3"
				src="/substack.png"
				alt="substack"
			/>
		</div>

		<div class="text-sm ml-3">
			<p>
				Powered by:
				<span>
					<a href="https://github.com/cchester11" target="_blank">github.com/cchester11</a>
				</span>
			</p>
		</div>
	</footer>
</div>
