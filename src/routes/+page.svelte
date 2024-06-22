<script>
      import { onMount } from "svelte";
      import { getSpotifyAuth } from "$lib";

      onMount(() => {
            let response = getSpotifyAuth();

            console.log(response)
      })
</script>

<h1>Album Room</h1>
<p>Albums</p>