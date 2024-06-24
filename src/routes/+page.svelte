<script>
      import { onMount } from "svelte";
      import { getSpotifyAuth, getAudioFeatures_Album } from "$lib";

      onMount(() => {
            let response = getSpotifyAuth();
            let album = getAudioFeatures_Album('1JKWZDVpxDiDW2ITmcDJbs');

            console.log(response, album)
      })
</script>

<div>
      <!-- categories container
      add new category button in top left
      category cards container

      modal that is activated if new category button clicked
      save button to save new category or cancel button to delete modal state and close modal -->
</div>