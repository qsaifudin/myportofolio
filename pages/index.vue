<template>
  <v-container
    grid-list-xs
    class="pa-0 content d-flex align-center justify-space-between"
  >
    <v-row class="d-flex align-center">
      <v-col cols="12" md="7">
        <div class="">
          <h1 class="myPrimary--text font-weight-extra-bold font-extrabold">
            Hello, I'm Saifudin!
          </h1>
          <h2 class="secondary--text font-bold mb-5" style="font-size: 32px">
            Back-End Developer
          </h2>
          <div class="font-space-mono mt-2 mb-15">
            <div class="">Stay curious, keep learning and keep growing.</div>
            <div class="">
              That is me
              <v-btn color="secondary" text rounded="lg" class="pa-0">
                <i class="font-space-mono capitalize"> Udin </i></v-btn
              >👈
            </div>
          </div>
          <v-row>
            <v-col cols="12" md="6">
              <v-btn
                color="secondary "
                class="pa-6"
                rounded="lg"
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
                rounded="lg"
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
      <v-col cols="12" md="5" class="wrap-img pa-0">
        <img :src="imageSrc" alt="" max-width="470" class="image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // ... other component options ...

  computed: {
    imageSrc() {
      return this.$vuetify.theme.dark ? "myfoto/me-dark.png" : "myfoto/me.png";
    },
  },
};
</script>

<style>
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
    padding-bottom: 40px;
  }
  .wrap-img {
    text-align: center !important;
  }
}
</style>
