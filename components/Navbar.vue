<template>
  <div>
    <v-app-bar
      :style="backgroundStyle"
      app
      :fixed="fixed"
      height="80px"
      :class="[!isMobile ? 'd-flex justify-center px-0' : '', '']"
      width="100%"
    >
      <div
        class="d-flex align-center justify-space-around"
        :style="{ width: !isMobile ? '1100px' : '100%' }"
      >
        <v-toolbar-title style="font-weight: bolder" class="myPrimary--text">
          SAiFUD!N
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <DarkModeSwitcher v-if="isMobile" />
        <v-btn icon @click.stop="drawer = !drawer" v-if="isMobile">
          <v-icon>{{ drawer ? "mdi-close" : "mdi-menu" }}</v-icon>
        </v-btn>
        <div class="menu-items py-5" v-if="!isMobile">
          <v-btn
            text
            rounded
            v-for="item in menuItems"
            :key="item.label"
            :to="item.target"
            class="capitalize font-weight-light"
          >
            {{ item.label }}
          </v-btn>
          <DarkModeSwitcher />
        </div>
      </div>

      <!-- small screen -->
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      bottom
      style="max-height: 100% !important"
    >
      <v-list style="height: 100%">
        <v-app-bar class="" elevation="0" color="transparent">
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="drawer = !drawer" v-if="isMobile">
            <v-icon>{{ drawer ? "mdi-close" : "mdi-menu" }}</v-icon>
          </v-btn>
        </v-app-bar>
        <div class="text-center ma-5" v-for="item in menuItems">
          <v-btn
            text
            block
            rounded
            :key="item.label"
            :to="item.target"
            class="capitalize font-weight-light pa-5 py-10 myPrimary--text"
            style="font-size: 30px"
          >
            {{ item.label }}
          </v-btn>
        </div>
        <v-footer app color="transparent" class="text-center justify-center">
          <div class="text-center my-5 font-light myPrimary--text">
            SAIFUDIN
          </div>
        </v-footer>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DarkModeSwitcher from "./DarkModeSwitcher.vue";

export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        { label: "Home", target: "/" },
        { label: "About Me", target: "/about" },
        { label: "Skills", target: "/skills" },
        { label: "Projects", target: "/projects" },
        { label: "Contact", target: "/contact" },
      ],
      isMobile: false,
      navbarDark: false,
      fixed: false, // Set to true if you want a fixed navbar
    };
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
        "box-shadow": "0px 6px 60px rgba(0, 0, 0, 0.06)",
        width: "100%",
      };
    },
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 960; // Adjust the breakpoint as needed
      if (!this.isMobile) {
        this.drawer = false; // Close the drawer on larger screens
      }
    },
    scrollToSection(target) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        if (this.isMobile) {
          this.drawer = false; // Close the drawer on mobile after clicking a menu item
        }
      }
    },
  },
  components: { DarkModeSwitcher },
};
</script>

<style scoped>
.logo {
  max-height: 40px;
}

.menu-items {
  display: flex;
  align-items: center;
}
.menu-items a {
  margin: 0 10px;
}
.v-toolbar__content {
  max-width: 100px !important;
}
</style>
