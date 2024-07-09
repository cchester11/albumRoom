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

/**
 * Get album data from Spotify.
 * 
 * @param {string} album_id - The album ID.
 */
export async function getAudioFeatures_Album (album_id) {
      const access_token = await getSpotifyAuth();

      const getAlbumURL = 'https://api.spotify.com/v1/albums/' + album_id;

      try {
            const response = await axios.get(getAlbumURL, {
                  headers: {
                        'Authorization': 'Bearer ' + access_token
                  }
            });

            return response.data;
      } catch (error) {
            console.error('Error getting album: ', error);
            throw error;
      }
};

// Export function that dynamically loads the Spotify SDK
/**
 * @returns {Promise<void>} The promise resolves without a value and only signifies a completed load of the SDK, so we use a void type on return.
 */
export function loadSDK() {
      // Return a promise
      return new Promise((resolve, reject) => {
            // Dynamically create a script element
            const script = document.createElement("script");
            // Set necessary script properties
            script.src = "https://sdk.scdn.co/spotify-player.js";
            script.async = true;
            // Resolve or reject the promise
            // The onload event handler resolves the promise when the script is loaded
            script.onload = () => resolve();
            // The onerror event handler rejects the promise if the script fails to load
            script.onerror = () => reject(new Error('Spotify SDK failed to load'));
            // Append the script to the body
            // The onload and onerror event handlers will be triggered when the script is added to the document
            document.body.appendChild(script);
      });
};