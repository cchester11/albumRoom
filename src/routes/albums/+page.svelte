<script>
      // imports
      import { onMount } from "svelte";
      import { writable } from "svelte/store";
      import { getAudioFeatures_Album } from '$lib';

      // globals
      /**
       *  @type { string|null }
       */
      let room = null;
      const showModal = writable(false);
      const albums = writable([]);

      // Manage modal visibility
	function toggleModal() {
		showModal.update((value) => !value);
	};

      // fetch album URIs for room
      async function getAlbums () {
            try {
                  const param = room ? room.toLowerCase() : '';
                  const apiURL = 'http://localhost:8000/api/albums/' + encodeURIComponent(param)
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
      };

      // fetch album data per album
      /**
       * 
       * @param {string} albumURI 
       */
      async function fetchAlbumData (albumURI) {
            // use getAudioFeatures_Album 

            // extract necessary data

            // append necessary data variable and/or append directly to dom

            // catch error
      };

      // logic to run on page load
      onMount(() => {
            // Check if localStorage is available
            if(typeof localStorage !== 'undefined') {
                  room = localStorage.getItem('room')
            } else {
                  console.error('localStorage not available')
            };

            getAlbums();
      });
</script>

<div class="h-full flex flex-col bg-lounge bg-cover bg-center">
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
</div>

<style>
      
</style>