<script>
      import '../app.css';
</script>

<div class="w-full h-full flex flex-col justify-between">
      <header class="h-1/6 bg-slate-900 font-extralight text-4xl text-slate-100">
            <nav class="h-full flex items-center justify-center">
                  <h1 style="font-family: Playwrite US Trad, cursive; font-weight: 400; font-style: normal;">
				<span>
					<a href="/" target="_blank">
						Album Room
					</a>
				</span>
			</h1>
            </nav>
      </header>

      <slot>
      
      </slot>

      <footer class="font-thin text-slate-100 bg-slate-900">
		<div class="flex flex-row justify-between px-10 items-center h-36">
			<div class="flex flex-row items-center mr-3">
				<div class="mx-3">
					<img
						class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
						src="/github_neon_icon.png"
						alt="github"
					/>
				</div>
				<div class="mx-3">
					<img
						class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
						src="/photo_icon.png"
						alt="instagram"
					/>
				</div>
				<div class="mx-3">
					<img
						class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
						src="/substack.png"
						alt="substack"
					/>
				</div>
			</div>

			<div class="text-sm ml-3">
				<p>
					Powered by:
					<span>
						<a href="https://github.com/cchester11" target="_blank">github.com/cchester11</a>
					</span>
				</p>
			</div>
		</div>
	</footer>
</div>