<script>
	// imports
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { getAudioFeatures_Album } from '$lib';

	// globals
	/**
	 *  @type { string|null }
	 */
	let room = null;
	const showModal = writable(false);
	const albums = writable([]);
	let albumURI = '';

	// Manage modal visibility
	function toggleModal() {
		showModal.update((value) => !value);
	}

	// fetch album URIs for room
	async function getAlbums() {
		try {
			const param = room ? room.toLowerCase() : '';
			const apiURL = 'http://localhost:8000/api/albums/' + encodeURIComponent(param);
			const response = await fetch(apiURL);

			if (response.ok) {
				// parse
				const data = await response.json();
				// collect in global array variable
				albums.set(data);
			} else {
				console.error('Failed to fetch albums');
			}
		} catch (err) {
			console.error('Error fetching albums: ', err);
		}
	}

	// fetch album data per album
	/**
	 *
	 * @param {string} albumURI
	 */
	async function fetchAlbumData(albumURI) {
		try {
			// use getAudioFeatures_Album
			const response = await getAudioFeatures_Album(albumURI);

			// extract necessary data
			const albumPicture = response.images[0]?.url;

			// append necessary data variable and/or append directly to dom
			return albumPicture;

			// catch error
		} catch (err) {
			console.error(`Error fetching album data: ${err}`);
		}
	}

	// post album
	async function postAlbum() {
		try {
                  // grab room
                  const roomBody = room ? room.toLowerCase() : '';
                  const uriBody = albumURI;
                  const apiURL = 'http://localhost:8000/api/albums';
			// send post request with album uri
                  const response = await fetch(apiURL, {
                        method: "POST", 
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                              room: roomBody,
                              uri: uriBody
                        })
                  });
			// check that response is okay
                  if(response.ok) {
                        // reset albumURI
                        albumURI = '';
                        // get albums
                        getAlbums();
                        // toggle modal
                        toggleModal();
                  } else {
                        console.log(response)
                        console.error('Failed to add album')
                  };
		} catch (err) {
                  console.error('Error posting album: ' + err)
            }
	}

	// logic to run on page load
	onMount(() => {
		// Check if localStorage is available
		if (typeof localStorage !== 'undefined') {
			room = localStorage.getItem('room');
		} else {
			console.error('localStorage not available');
		}

		getAlbums();
	});
</script>

<div class="h-full flex flex-col">
	<!-- New Room Button -->
	<div class="m-7">
		<button
			class="bg-transparent hover:bg-slate-900 text-slate-900 font-semibold hover:text-slate-100 py-2 px-4 border border-slate-900 hover:border-transparent rounded"
			style="font-family: Playwrite US Trad, cursive; font-weight: 400; font-style: normal;"
			id="add_album"
			type="button"
			on:click={toggleModal}
		>
			Add Album
		</button>
	</div>

	<!-- Albums List -->
	<div class="h-full w-full grid grid-cols-2 items-center gap-4 p-10 justify-between">
		{#each $albums as album}
			<div class="h-full w-full rounded flex items-center justify-center">
				{#await fetchAlbumData(album) then albumPicture}
					{#if albumPicture}
						<img src={albumPicture} alt="album" />
					{:else}
						<button
							class="text-4xl text-slate-100"
							style="font-family: Playwrite US Trad, cursive; font-weight: 400; font-style: normal;"
							type="button"
						>
							album image here
						</button>
					{/if}
				{/await}
			</div>
		{/each}
	</div>

	<!-- New Album Modal -->
	{#if $showModal}
		<div
			tabindex="-1"
			aria-hidden="true"
			class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
		>
			<div class="bg-white p-6 rounded-lg shadow-lg w-1/3 h-1/3">
				<div class="mb-4">
					<label for="album" class="block text-gray-700 mb-2">Album</label>
					<input
						type="text"
						name="album"
						id="album"
						placeholder="Album URI"
						required
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
						bind:value={albumURI}
					/>
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
                                    on:click={postAlbum}
                              >
						Save
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
</style>
