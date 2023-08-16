<template>
  <v-container grid-list-xs class="pa-5 pt-4 myPrimary--text">
    <h1 class="text-center helvetica-bold font-extrabold mb-4">Projects</h1>
    <v-row class="font-normal mb-3 align-end mt-3">
      <v-col cols="12" md="6" v-for="(item, index) in items" :key="index">
        <v-card
          class="pa-0"
          light
          rounded="lg"
          elevation="0"
          style="border: 3px solid rgb(236, 236, 236); color: #1d3341"
        >
          <v-carousel height="300">
            <v-carousel-item
              v-for="(image, imageIndex) in item.images"
              :key="imageIndex"
            >
              <v-img :src="image" aspect-ratio="1"></v-img>
            </v-carousel-item>
          </v-carousel>
          <div class="pa-sm-5 pa-3">
            <v-row class="font-normal mb-3 align-center">
              <v-col
                class="py-1"
                cols="12"
                md="9"
                style="font-size: 25px; font-weight: 300px"
              >
                {{ item.title }}
              </v-col>
              <v-col class="py-1 text-md-right" cols="12" md="3">{{
                item.date
              }}</v-col>
            </v-row>
            <div class="font-normal">
              <ul class="custom-icon-list mt-3">
                <li
                  v-for="(desc, descIndex) in item.description"
                  :key="descIndex"
                >
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
          <v-footer class="d-flex justify-end">
            <div class="">
              <v-btn text rounded :href="item.github" target="_blank"
                ><iconify-icon
                  icon="mdi:github"
                  width="20"
                  height="20"
                  class="mr-1"
                />{{ item.github ? "Github" : "None" }}</v-btn
              >
              <v-btn text rounded :href="item.link" target="_blank"
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
  data() {
    return {
      items: [
        {
          title: "Adamlabs - Wahana Gunilang Group",
          images: [
            "/projects/gigi/1.png",
            "/projects/gigi/2.png",
            "/projects/gigi/3.png",
          ],
          description: [
            "Rebuilt the frontend of a laboratory information system ",
            "Maintenance of existing applications.",
          ],
          github: "https://www.google.com",
          link: "https://www.fb.com",
          date: "2020",
        },
        {
          title: "Adamlabs - Wahana Gunilang Group",
          images: [
            "/projects/gigi/2.png",
            "/projects/gigi/1.png",
            "/projects/gigi/3.png",
          ],
          description: [
            "Rebuilt the frontend of a laboratory information system ",
            "Maintenance of existing applications.",
          ],
          date: "2021",
        },
        {
          title: "Adamlabs - Wahana Gunilang Group",
          images: [
            "/projects/gigi/2.png",
            "/projects/gigi/1.png",
            "/projects/gigi/3.png",
          ],
          description: [
            "Rebuilt the frontend of a laboratory information system ",
            "Maintenance of existing applications.",
          ],
          date: "2021",
        },
      ],
    };
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
</style>
