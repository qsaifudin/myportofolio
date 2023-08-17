<template>
  <div class="d-flex align-center font-space-mono" style="font-size: 14px">
    <iconify-icon
      class="icon-container mr-1"
      width="15"
      icon="logos:spotify-icon"
    />
    <iconify-icon
      :key="iconKey"
      v-if="currentlyPlaying"
      class="icon-container mr-1"
      width="15"
      icon="svg-spinners:bars-scale-middle"
    />
    <span
      v-if="currentlyPlaying"
      style="letter-spacing: -0.5px; word-spacing: -2px"
    >
      {{ currentlyPlaying.item.name }}
      <!-- ini Lagu  -->
      •
      <span style="font-size: 12px">
        {{ getArtistsNames(currentlyPlaying.item.artists) }}
        <!-- ini Arti s -->
      </span>
    </span>
    <span v-else> Not Playing </span>
  </div>
</template>

<script>
import axios from "axios";
import querystring from "querystring";

export default {
  data() {
    return {
      currentlyPlaying: null,
      iconKey: 0,
      token: "",
    };
  },
  async created() {
    await this.getToken();
    setInterval(this.getToken, 60000);
    await this.fetchCurrentlyPlaying();
    this.fetchInterval = setInterval(this.fetchCurrentlyPlaying, 60000);
  },
  mounted() {
    setInterval(() => {
      this.iconKey += 1; // Update the key to trigger re-render
    }, 5000); // Trigger every minute (60,000 milliseconds)
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed
    clearInterval(this.fetchInterval);
  },
  methods: {
    async getToken() {
      let client_id = "51ce5a5172a742dc90e78d8fc65ccd5c";
      let client_secret = "b469c2cab38846e68b75d5bc3208af6d";
      // let refresh_token =
      //   "AQDhParlwUB6AANa705DtzF7A_mD9jcLg2u5hMgYj8oXWFtqJ0S_CKOe9Y1NgXYeGTBWeZYrCC3JWoQP0JsGqFmUXgAiJe5u_tenpO3LGA1haZppfMGthXoOLr7I3VTbnkk";
      let refresh_token =
        "AQBB_D_wsSL74ZoyGfuelqyAqZG2mneYqj20SCCLqooi0AhD02BPM6y_ExXFsMGo1spnrqIIpKuTNpbmV1VBG1N0JKCPMkmqAi6-U-sMCjKVzruhIyj0T4BSjY_O1Pu3cRw";
      let basic = Buffer.from(`${client_id}:${client_secret}`).toString(
        "base64"
      );
      const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${basic}`,
        },
        body: querystring.stringify({
          grant_type: "refresh_token",
          refresh_token,
        }),
      });
      // body: "grant_type=client_credentials",
      console.log(
        "🚀 ~ file: spotify.vue:78 ~ getToken ~ querystring.stringif",
        querystring.stringify({ grant_type: "refresh_token", refresh_token })
      );

      const data = await result.json();
      console.log("🚀 ~ file: spotify.vue:74 ~ getToken ~ data: 222", data);
      this.token = data.access_token;
    },

    async fetchCurrentlyPlaying() {
      // this.token =
      //   "BQCxogov3uA5AOFMyY7B2NG8VV23GZzLWq4uiBy4sot0XrAOrMPT7Quq7GACVI5tqAeLU2PqweGOPhGI5ZqwpmFQkOPRGGs46RVwhhDmEspvOdrEFfbl15j1MvVygQfEFKF7rqmRRHBoV5dKTOlaW4KrXwpd4xkT8D9T422yKYTrvSxBA5TED1E7rqdJLjEQGvrzGOMZKC8w2cKWGn_G";
      let url = "https://api.spotify.com/v1/me/player";
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
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
