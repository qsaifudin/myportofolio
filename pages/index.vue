<template>
  <v-container
    grid-list-xs
    class="pa-0 content d-flex align-center justify-space-between"
  >
    <v-row class="d-flex align-center ma-0 mb-9">
      <v-col cols="12" md="7">
        <div class="">
          <!-- <h1 class="myPrimary--text font-extrabold">Hello, I'm Saifudin!</h1> -->
          <h1 class="animate-text myPrimary--text font-extrabold">
            Hello, I'm Saifudin!
          </h1>
          <h2 class="secondary--text mb-5 font-normal" style="font-size: 32px">
            <!-- Back-End Developer -->
            Software Engineer
          </h2>
          <div class="font-space-mono mt-2 mb-9">
            <div class="">Stay curious, keep learning and keep growing.</div>
            <div class="">
              That is me
              <v-btn color="secondary" text rounded class="pa-0" to="/about">
                <i class="font-space-mono capitalize"> Saif </i></v-btn
              >👈
            </div>
          </div>
          <v-row>
            <v-col cols="12" md="6">
              <v-btn
                color="secondary "
                class="pa-6"
                rounded
                block
                to="/projects"
              >
                <span
                  class="secondaryBtn--text font-normal"
                  style="font-size: 16px"
                  >CHECK OUT MY PROJECT</span
                >
              </v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                outlined
                color="secondary "
                class="pa-6"
                rounded
                block
                to="/about"
              >
                <span class="font-normal" style="font-size: 16px"
                  >Want to know me more ?</span
                >
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="5"
        class="wrap-img pa-0 d-flex align-center flex-column"
      >
        <img :src="imageSrc" alt="" max-width="470" class="image" />
        <Spotify />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head: {
    title: "Home", // Set the title specific to this route
  },

  computed: {
    imageSrc() {
      return this.$vuetify.theme.dark ? "myfoto/me-dark.png" : "myfoto/me.png";
    },
  },
};
</script>

<style scoped>
.content {
  margin-top: 6%;
  /* height: 90%; */
  /* background-color: #a4a4a444; */
}

.image {
  width: 100%; /* Set the image width to 100% of its container */
  max-width: 470px; /* Set a maximum width for the image */
}

@media (max-width: 960px) {
  .image {
    max-width: 90%; /* Change the max-width to 100% on smaller screens */
  }
  .wrap-img {
    text-align: center !important;
  }
}

.animate-text {
  font-family: "Open Sans";
  font-weight: 800;
  font-size: 60px;
  background: linear-gradient(
    to right,
    currentColor 0,
    #a2ebd58f 10%,
    currentColor 20%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: borderAnimate 10s infinite alternate;
}

@keyframes borderAnimate {
  0%,
  100% {
    background-position: -100px;
  }
  50% {
    background-position: 510px;
  }
}
</style>
