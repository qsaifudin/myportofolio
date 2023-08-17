<template>
  <v-app :style="backgroundStyle">
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <CursorCircle />
    <Navbar />

    <v-main class="px-3" style="padding-bottom: 5px" :style="backgroundStyle">
      <!-- <transition name="page-popup"> -->
      <!-- <router-view class="main" /> -->
      <Nuxt class="main" />
      <!-- </transition> -->
    </v-main>
  </v-app>
</template>

<script>
import DarkModeSwitcher from "~/components/DarkModeSwitcher.vue";

export default {
  transition: {
    name: "page-popup",
  },
  beforeRouteUpdate(to, from, next) {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    next();
  },
  computed: {
    backgroundStyle() {
      const gradientStartColor = !this.$vuetify.theme.dark
        ? "#E4FFEF"
        : "#1A212D";
      const gradientEndColor = !this.$vuetify.theme.dark
        ? "#FFFFFF"
        : "#265059";

      return {
        background: `linear-gradient(to right, ${gradientStartColor}, ${gradientEndColor})`,
      };
    },
  },
  components: { DarkModeSwitcher },
};
</script>
<style scoped>
.main {
  max-width: 1100px;
}
</style>
