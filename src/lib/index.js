// place files you want to import through the `$lib` alias in this folder.
import axios from "axios";
import qs from "qs";

export async function getSpotifyAuth() {
      const client_id = import.meta.env.VITE_CLIENT_ID;
      const client_secret = import.meta.env.VITE_CLIENT_SECRET;
      const authString = btoa(`${client_id}:${client_secret}`);

      try {
            const token_url = 'https://accounts.spotify.com/api/token';
            const data = qs.stringify({ "grant_type": "client_credentials" });

            const response = await axios.post(token_url, data, {
                  headers: {
                        "Authorization": `Basic ${authString}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                  }
            }
            );

            return response.data.access_token;
      } catch (error) {
            console.error('Error getting Spotify access token:', error);
            throw error;
      }
};


// Example usage:
// getSpotifyAuth().then(token => {
//       console.log('Access Token:', token);
// }).catch(error => {
//       console.error('Error:', error);
// });