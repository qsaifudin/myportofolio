<template>
  <v-container grid-list-xs class="pa-5 pt-4 myPrimary--text">
    <h1 class="text-center helvetica-bold font-extrabold mb-4">Projects</h1>
    <v-row class="font-normal mb-3 align-start mt-3">
      <v-col cols="12" md="6" v-for="(item, index) in items" :key="index">
        <v-card class="pa-0 card-wrap" light rounded="lg">
          <!-- <div class="label pa-2"></div> -->
          <v-chip class="label px-2" size="small" style="height: 26px">
            {{ item.tag }}
          </v-chip>
          <!-- Your card content goes here -->
          <v-carousel
            cycle
            :height="isMobile ? '150px' : '250px'"
            hide-delimiter-background
            style="
              border-bottom: 1px solid rgb(216, 216, 216);
              background: rgba(225, 225, 225, 0.55);
              border-radius: 7px 7px 0 0;
            "
          >
            <v-carousel-item
              v-for="(image, imageIndex) in item.images"
              :key="imageIndex"
            >
              <v-img :src="image" cover></v-img>
            </v-carousel-item>
          </v-carousel>
          <div class="pa-sm-5 pa-3">
            <v-row class="font-normal mb-3 mt-1 align-center">
              <v-col class="py-1" cols="12" md="9">
                <b>
                  {{ item.title }}
                </b>
              </v-col>
              <v-col class="py-1 text-md-right" cols="12" md="3">{{
                item.date
              }}</v-col>
            </v-row>
            <div class="font-normal mt-3">
              {{ item.description }}
              <ul class="custom-icon-list my-6">
                <li v-for="(desc, descIndex) in item.list" :key="descIndex">
                  <div v-if="typeof desc === 'string'">
                    <iconify-icon
                      icon="simple-line-icons:check"
                      width="20"
                      height="20"
                      class="bullet-icon"
                    />
                    {{ desc }}
                  </div>

                  <div v-else-if="typeof desc === 'object' && desc.tech_stack">
                    <div class="mt-1 mb-1">
                      <iconify-icon
                        icon="simple-line-icons:check"
                        width="20"
                        height="20"
                        class="bullet-icon"
                      />
                      Tech Stack:
                    </div>
                    <div class="ml-4">
                      <v-chip
                        v-for="(tech, index) in desc.tech_stack"
                        :key="index"
                        color="primary"
                        class="ml-2 mt-2"
                      >
                        {{ tech }}
                      </v-chip>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <v-footer class="d-flex justify-end footer">
            <div class="d-flex">
              <v-btn
                text
                rounded
                :href="item.github"
                target="_blank"
                :disabled="!item.github"
                ><iconify-icon
                  icon="mdi:github"
                  width="20"
                  height="20"
                  class="mr-1"
                />{{ item.github ? "Github" : "None" }}</v-btn
              >
              <v-btn
                v-if="item.link !== undefined"
                text
                rounded
                :href="item.link"
                target="_blank"
                :disabled="!item.link"
                ><iconify-icon
                  icon="mdi:web"
                  width="20"
                  height="20"
                  class="mr-1"
                />{{ item.link ? "Link" : "None" }}</v-btn
              >
              <DialogProject  v-if="item.link_video" :link_video="item.link_video" :title="item.title"/>
            </div>
          </v-footer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import itemsData from "./project.json"
export default {
  head: {
    title: "Projects", // Set the title specific to this route
  },

  data() {
    return {
      isMobile: false,
      items:itemsData
    };
  },
  mounted() {
    this.checkMobile();
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 960; // Adjust the breakpoint as needed
    },
  },
};
</script>
<style scoped>
.custom-icon-list {
  list-style: none;
  padding-left: 0 !important;
}

.custom-icon-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px; /* Adjust as needed */
}

.bullet-icon {
  flex-shrink: 0;
  width: 15px;
  height: 15px;
  margin-top: 4px;
  margin-right: 10px; /* Adjust as needed */
}

.card-wrap {
  border: 1px solid rgba(187, 187, 187, 0.461);
  color: #1d3341;
  box-shadow: none !important;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1) !important; */
  background: rgb(255, 255, 255);
  background: linear-gradient(
    6deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(225, 225, 225, 0.55) 67%,
    rgba(26, 183, 146, 0.368) 100%
  );
}
.card-wrap:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
  border: 2px solid #6bdab8;
}
.footer {
  background: linear-gradient(45deg, rgb(255, 255, 255), rgb(235, 235, 235));
}
.label {
  position: absolute;
  /* font-weight: lighter; */
  top: 10px;
  left: 10px;
  background-color: #10a08a !important; /* Set your desired background color */
  color: white; /* Set your desired text color */
  border: 1px solid white;
  z-index: 2;
}
</style>
