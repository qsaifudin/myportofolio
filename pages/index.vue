<template>
  <v-container
    grid-list-xs
    class="pa-0 content d-flex align-center justify-space-between"
  >
    <div class="">
      <h1
        class="myPrimary--text font-weight-extra-bold"
        style="font-size: 55px; font-weight: 100px"
      >
        Hello, I’m Saifudin!
      </h1>
      <h2 class="secondary--text">Back-End Developer</h2>
      <div class="">
        Stay curious, keep learning and keep growing. That is me
        <span color="red"> <v-btn color="success" text>Udin</v-btn> </span>
      </div>
      <v-btn text color="secondary info--text" block>text</v-btn>
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
