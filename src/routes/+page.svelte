<script>
      import { onMount } from "svelte";
      import { getSpotifyAuth, getAudioFeatures_Album } from "$lib";

      onMount(() => {
            let response = getSpotifyAuth();
            let album = getAudioFeatures_Album('1JKWZDVpxDiDW2ITmcDJbs');

            console.log(response, album)
      })
</script>

<p>Albums</p>