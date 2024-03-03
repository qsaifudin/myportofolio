<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent light width="1000" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text rounded
          ><iconify-icon
            icon="mdi:play"
            width="20"
            height="20"
            class="mr-1"
          />Demo</v-btn
        >
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ title }}
          <v-spacer></v-spacer>
          <v-btn icon color="red" text @click="closeDialog" outlined>
            <v-icon>mdi-close</v-icon></v-btn
          >
        </v-card-title>

        <v-card-text>
          <!-- Embed YouTube Video -->
          <iframe

          :id="link_video"
            ref="youtubeVideo"
            width="100%"
            height="400"
            :src="`${link_video}?enablejsapi=1`"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>

export default {
  props: {
    link_video: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      player: null,
    };
  },
  methods: {
    closeDialog() {
      const youtubeIframe = document.getElementById(this.link_video);
      // Post message to the YouTube iframe to pause the video
      youtubeIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      this.dialog = false;
    },
  },

};
</script>
