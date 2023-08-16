<template>
  <div>
    <h1>Currently Playing on Spotify</h1>
    <div class="d-flex align-center">
      <iconify-icon
        class="icon-container mr-1 mb-1"
        width="19"
        icon="logos:spotify-icon"
      />
      <span v-if="!currentlyPlaying">
        <!-- {{ currentlyPlaying.item.name }} -->
        ini Lagu
        <!-- <iconify-icon class="icon-container" width="25" icon="octicon:dot-24" />  -->
        ●
        <!-- {{ getArtistsNames(currentlyPlaying.item.artists) }} -->

        ini Artis
      </span>
      <span v-else> Not Playing </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const token =
  "BQB-EVSdYtsc0oI5WGXpHQ_yQR-hFqOfNsYDI3QtzRUmMGDiQKx2qKdn5W9LIQozsgxQIpePsuLAhLluGWkIrhWx7yVGP1AO3Mm4jmliE5FIFRp2e7_KaVcOUD4eD1FuzqeX3BXrBr2tVgmAIcOMhFohruKfehWzbehBQfii5Eus6CkbHdV9eeg27MUBqwJXs9tc9cfgXiVfYDA5k0Xo";

export default {
  data() {
    return {
      currentlyPlaying: null,
    };
  },
  async created() {
    // Fetch data initially
    await this.fetchCurrentlyPlaying();

    // Schedule regular API calls every 30 seconds
    this.fetchInterval = setInterval(this.fetchCurrentlyPlaying, 60000);
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.fetchInterval);
  },
  methods: {
    async fetchCurrentlyPlaying() {
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/player",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        this.currentlyPlaying = response.data;
      } catch (error) {
        console.error("Error fetching currently playing track:", error);
        this.currentlyPlaying = null;
      }
    },
    getArtistsNames(artists) {
      return artists.map((artist) => artist.name).join(", ");
    },
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
