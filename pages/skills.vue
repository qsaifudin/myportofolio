<template>
  <v-container grid-list-xs class="pa-5 pt-4 myPrimary--text">
    <h1 class="text-center helvetica-bold font-extrabold mb-4">Skills</h1>
    <v-row class="d-flex align-start">
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        md="6"
        lg="3"
        class="wrap-img pa-0 mt-6"
      >
        <v-card
          class="text-center mx-4 mb-3 pa-6 d-flex flex-column justify-end align-center card-hover-effect"
          light
          height="200px"
          rounded="lg"
          style="color: #1d3341"
          elevation="0"
        >
          <iconify-icon class="icon-container" width="50%" :icon="item.icon" />
          <div class="font-normal mt-4">
            <b>
              {{ item.text }}
            </b>
          </div>
          <div class="" style="color: #626b71; font-weight: 300">
            {{ item.level }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head: {
    title: "Skills", // Set the title specific to this route
  },

  data() {
    return {
      items: [
        {
          text: "Typescript",
          icon: "skill-icons:typescript",
          level: "Intermediate",
        },
        {
          text: "Javascript (NodeJS, ExpressJS)",
          icon: "logos:nodejs",
          level: "Advance",
        },
        { text: "Vue/NuxtJS", icon: "devicon:nuxtjs", level: "Advance" },
        {
          text: "NoSQL (MongoDB)",
          icon: "devicon:mongodb-wordmark",
          level: "basic",
        },
        {
          text: "SQL (MySQL, PostgreSQL)",
          icon: "logos:postgresql",
          level: "Advance",
        },
        { text: "Docker", icon: "skill-icons:docker", level: "basic" },
        { text: "Git", icon: "logos:git", level: "Advance" },
        { text: "Unit Test(Jest)", icon: "skill-icons:jest", level: "basic" },
        { text: "REST APIs", icon: "carbon:api-1", level: "Advance" },
        { text: "OOP", icon: "ic:baseline-loop", level: "Intermediate" },
        { text: "Agile", icon: "iconoir:agile", level: "Intermediate" },
        // Add more items as needed
      ],
    };
  },
};
</script>
<style scoped>
.card-hover-effect {
  transition: box-shadow 0.3s ease;

  background: linear-gradient(
    10deg,
    rgb(255, 255, 255),
    rgba(225, 225, 225, 0.55)
  );
  border-radius: 10px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important; */

  border: 1px solid rgba(187, 187, 187, 0.461);
}
.card-hover-effect:hover {
  transform: scale(1.04);
  transition: transform 0.3s ease;
  box-shadow: 0px 10px 15px -3px #05c491a4, 0px 4px 6px -2px #b10d0d74;
  border: 2px solid #6bdab8;
}
</style>
