<template>
  <v-container grid-list-xs class="pa-5 pt-4 myPrimary--text">
    <h1 class="text-center helvetica-bold font-extrabold mb-4">Projects</h1>
    <v-row class="font-normal mb-3 align-start mt-3">
      <v-col cols="12" md="6" v-for="(item, index) in items" :key="index">
        <v-card class="pa-0 card-wrap" light rounded="lg">
          <v-carousel
            cycle
            :height="isMobile ? '150px' : '250px'"
            hide-delimiter-background
            style="
              border-bottom: 1px solid rgb(216, 216, 216);
              background: rgba(225, 225, 225, 0.55);
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
              <ul class="custom-icon-list mt-2">
                <li v-for="(desc, descIndex) in item.list" :key="descIndex">
                  <iconify-icon
                    icon="simple-line-icons:check"
                    width="20"
                    height="20"
                    class="bullet-icon"
                  />
                  {{ desc }}
                </li>
              </ul>
            </div>
          </div>
          <v-footer class="d-flex justify-end footer">
            <div class="">
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
            </div>
          </v-footer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  head: {
    title: "Projects", // Set the title specific to this route
  },

  data() {
    return {
      isMobile: false,
      items: [
        {
          title: "(Bangkit 2023) Product Based Project - Expressify",
          date: "Juni 2023",
          images: [
            "/projects/bangkit/1.png",
            "/projects/bangkit/2.png",

            "/projects/bangkit/4.png",
          ],
          description: "aa",
          list: ["Raaa", "aaa"],
          github: "https://github.com/orgs/Expressify/repositories",
          link: "https://www.youtube.com/watch?v=Gpw-arXhlz4",
        },
        {
          title: "LIS",
          date: "aaa",
          images: [
            "/projects/lis/1.png",
            "/projects/lis/2.png",

            "/projects/lis/4.png",
          ],
          description: "aa",
          list: ["Raaa", "aaa"],
          github: "",
          link: "",
        },
        {
          title: "LIMS",
          date: "aaa",
          images: [
            "/projects/lims/1.png",
            "/projects/lims/2.png",

            "/projects/lims/4.png",
          ],
          description: "aa",
          list: ["Raaa", "aaa"],
          github: "https://github.com/qsaifudin/sim_lab",
          link: "",
        },

        {
          title: "tooth Detection",
          date: "aaa",
          images: [
            "/projects/gigi/1.png",
            "/projects/gigi/2.png",
            "/projects/gigi/3.png",
          ],
          description: "aa",
          list: ["Raaa", "aaa"],
          github: "https://github.com/qsaifudin/tooth-detection-yolo",
          link: "",
        },
        {
          title: "Lomba",
          date: "aaa",
          images: [
            "/projects/juara/1.png",
            "/projects/juara/2.png",

            "/projects/juara/4.png",
          ],
          description: "aa",
          list: ["Raaa", "aaa"],
          github: "",
          link: "https://www.youtube.com/watch?v=yF9PDKlP2pk&list=LL&index=106&t=22s",
        },
        {
          title: "microlance",
          date: "aaa",
          images: ["/projects/microlance/1.png", "/projects/microlance/2.png"],
          description: "aa",
          list: ["Raaa", "aaa"],
          github: "",
          link: "https://www.instagram.com/microlance.id/",
        },

        {
          title: "DTIK fest",
          date: "aaa",
          images: [
            "/projects/dtik/1.png",
            "/projects/dtik/2.png",

            "/projects/dtik/4.png",
          ],
          description: "aa",
          list: ["Raaa", "aaa"],
          github: "",
          link: "http://dtikfest.pusproset.com/",
        },
        {
          title: "Soo your company",
          date: "aaa",
          images: [
            "/projects/aaa/1.png",
            "/projects/aaa/2.png",

            "/projects/aaa/4.png",
          ],
          description: "aa",
          list: ["Raaa", "aaa"],
          github: "",
          link: "",
        },
      ],
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
</style>
