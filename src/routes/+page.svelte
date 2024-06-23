<script>
      import { onMount } from "svelte";
      import { getSpotifyAuth } from "$lib";

      onMount(() => {
            let response = getSpotifyAuth();

            console.log(response)
      })
</script>

<p>Albums</p>