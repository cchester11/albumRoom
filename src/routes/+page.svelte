<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { getSpotifyAuth, getAudioFeatures_Album } from '$lib';

	onMount(() => {
		let response = getSpotifyAuth();
		let album = getAudioFeatures_Album('1JKWZDVpxDiDW2ITmcDJbs');

		console.log(response, album);
	});

	// Manage modal visibility
	const showModal = writable(false);

	function toggleModal() {
		showModal.update(value => !value)
	};
</script>

<div class="h-full flex flex-col bg-lounge bg-cover bg-center">
	<!-- categories container
      add new category button in top left
      category cards container

      modal that is activated if new category button clicked
      save button to save new category or cancel button to delete modal state and close modal -->
	<div class="m-7">
		<button
			class="bg-transparent hover:bg-slate-900 text-slate-900 font-semibold hover:text-slate-100 py-2 px-4 border border-slate-900 hover:border-transparent rounded"
			style="font-family: Playwrite US Trad, cursive; font-weight: 400; font-style: normal;"
			id="add_category"
			type="button"
			on:click={toggleModal}
		>
			Add Room
		</button>
	</div>
	<div class="h-full flex items-center justify-center">Categories</div>

	<!-- Category Modal -->
	{#if $showModal}
	<div tabindex="-1" aria-hidden="true" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
		<div class="bg-white p-6 rounded-lg shadow-lg w-1/3 h-1/3">
			<div class="mb-4">
				<label for="category" class="block text-gray-700 mb-2">Room</label>
				<input type="text" name="category" id="category" placeholder="Jazz" required class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"/>
			</div>
			<div class="flex justify-end">
				<button
					class="bg-slate-900 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded mr-2"
					on:click={toggleModal}
				>
					Cancel
				</button>
				<button
					class="bg-lime-700 hover:bg-lime-900 text-white font-semibold py-2 px-4 rounded"
					on:click={toggleModal}
				>
					Save
				</button>
			</div>
		</div>
	</div>
	{/if}
</div>
