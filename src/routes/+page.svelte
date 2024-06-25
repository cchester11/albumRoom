<script>
      import { onMount } from "svelte";
      import { getSpotifyAuth, getAudioFeatures_Album } from "$lib";

      onMount(() => {
            let response = getSpotifyAuth();
            let album = getAudioFeatures_Album('1JKWZDVpxDiDW2ITmcDJbs');

            console.log(response, album)
      })
</script>

<div class="h-full flex flex-col">
      <!-- categories container
      add new category button in top left
      category cards container

      modal that is activated if new category button clicked
      save button to save new category or cancel button to delete modal state and close modal -->
      <div class="m-7">
            <button class="bg-transparent hover:bg-slate-900 text-slate-900 font-semibold hover:text-slate-100 py-2 px-4 border border-slate-900 hover:border-transparent rounded" style="font-family: Playwrite US Trad, cursive; font-weight: 400; font-style: normal;"
            >
                  Add Category
            </button>
      </div>
      <div class="h-full flex items-center justify-center">
            Categories
      </div>
</div>