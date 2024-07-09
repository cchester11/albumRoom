// Global variables; no export needed. Can be referred to directly.

// SpotifyPlayer object definition
// Contains connect, togglePlay, and addListener properties.
// connect: a method that returns a promise which resolves to a boolean value.
// togglePlay: a method that returns nothing; toggles play and pause functionality of the SDK.
// addListener: a method that accepts a function with two parameters: 
//   - event: a string representing the event type.
//   - cb: a callback function which accepts a parameter (data: any) and returns nothing. 
// The addListener method itself also returns nothing.

/**
 * @typedef {Object} SpotifyPlayer
 * @property {(event: string, cb: (data: any) => void) => void} addListener
 * @property {() => Promise<boolean>} connect
 * @property {() => void} togglePlay
 */

// Player is a class that initializes a new instance which accepts an options object containing multiple properties:
// - name: a string representing the player’s name.
// - getOAuthToken: a method which accepts a callback function. The callback function takes a token (a string) as a parameter and returns nothing.
// - volume: an optional number representing the volume.
// The Player instance returns a SpotifyPlayer object, which can be configured according to the properties defined in the SpotifyPlayer typedef above.

/**
 * @typedef {Object} SpotifyPlayerOptions
 * @property {string} name
 * @property {(cb: (token: string) => void) => void} getOAuthToken
 * @property {number} [volume]
 */

// Spotify object definition
// Contains the Player property, which is a class constructor function that takes SpotifyPlayerOptions as an argument and returns a SpotifyPlayer instance.

/**
 * @typedef {Object} Spotify
 * @property {new (options: SpotifyPlayerOptions) => SpotifyPlayer} Player
 */

// Initialize the Spotify object with the Player class constructor
// This ensures that the Spotify object matches the typedef definition
// Player is a class that implements the SpotifyPlayer interface
// It contains methods addListener, connect, and togglePlay

/**
 * @type {Spotify}
 */
const Spotify = {
      Player: class {
            /**
             * @param {SpotifyPlayerOptions} options
             */
            constructor(options) {
                  this.options = options;
                  // Define the methods of SpotifyPlayer
                  /**
                   * @param {string} event
                   * @param {(data: any) => void} cb
                   */
                  this.addListener = (event, cb) => { };
                  this.connect = () => Promise.resolve(true);
                  this.togglePlay = () => { };
            }
      }
};

/**
 * Extend the Window interface to include the onSpotifyWebPlaybackSDKReady property
 * This ensures that the window object has the correct type definition for the Spotify SDK initialization
 * @typedef {Window & typeof globalThis & { onSpotifyWebPlaybackSDKReady: () => void }} SpotifyWindow
 */

/**
 * @type {SpotifyWindow}
 */
window;
