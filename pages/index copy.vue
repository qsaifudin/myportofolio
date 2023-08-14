<template>
  <v-container
    grid-list-xs
    class="pa-0 content d-flex align-center justify-space-between"
  >
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
      <v-btn color="secondary " class="pa-6" rounded="lg" to="/projects">
        <span class="secondaryBtn--text font-normal" style="font-size: 16px"
          >CHECK OUT MY PROJECT</span
        >
      </v-btn>
      <v-btn
        outlined
        color="secondary "
        class="pa-6 ml-3"
        rounded="lg"
        to="/about"
      >
        <span class="font-normal" style="font-size: 16px"
          >Want to know me more?</span
        >
      </v-btn>
    </div>
    <img :src="imageSrc" alt="" width="470" />
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
  height: 90%;
  /* background-color: #a4a4a444; */
}
</style>
