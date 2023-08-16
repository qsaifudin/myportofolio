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
          class="text-center mx-4 mb-3 pa-6 d-flex flex-column justify-end align-center"
          light
          height="200px"
          rounded="lg"
          style="color: #1d3341"
          elevation="4"
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
        {
          text: "SQL (MySQL, PostgreSQL)",
          icon: "logos:postgresql",
          level: "Advance",
        },
        {
          text: "NoSQL (MongoDB)",
          icon: "devicon:mongodb-wordmark",
          level: "basic",
        },
        { text: "Vue/NuxtJS", icon: "devicon:nuxtjs", level: "Advance" },
        { text: "Git", icon: "logos:git", level: "Advance" },
        { text: "Docker", icon: "skill-icons:docker", level: "basic" },
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
