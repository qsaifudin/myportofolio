<template>
  <v-container grid-list-xs class="pa-0 pt-4 myPrimary--text">
    <h1 class="text-center helvetica-bold font-extrabold mb-4">About</h1>
    <div class="">
      <v-row class="d-flex align-start">
        <v-col cols="12" md="5" class="wrap-img pa-0 mt-6">
          <img :src="imageSrc" alt="" class="image" />
        </v-col>
        <v-col
          cols="12"
          md="7"
          class="font-space-mono text-justify"
          :class="paddingClass"
        >
          <v-row class="mb-4 align-baseline">
            <v-col style="font-size: 32px" cols="12" md="6">
              <b> Hi! I'm Saif </b>
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="d-flex justify-sm-start justify-md-end"
            >
              <div class="mr-1">Based in Indonesia</div>
              <div class="">
                <iconify-icon
                  class="icon-container"
                  width="25"
                  icon="emojione:flag-for-indonesia"
                />
              </div>
            </v-col>
          </v-row>
          <div>
            I am currently in my last year of studying Informatics Engineering
            and have around 2 years of work experience. My main interest and
            focus right now is backend development because I enjoy logical
            problem-solving. <br /><br />
            I have a strong desire to learn new things, work well in teams, and
            have an easy-going attitude. If you believe there's a way I can
            contribute, I am open and excited about the possibilities you might
            have to offer!
          </div>
          <div class="mt-6">
            <div class="secondary--text"><b>My Experience</b></div>
            <div class="mt-2">
              <ul class="custom-icon-list">
                <li>
                  <iconify-icon
                    icon="simple-line-icons:check"
                    width="20"
                    height="20"
                    class="bullet-icon"
                  />
                  I completed an internship as a developer, which was later
                  extended to a full-time position for nearly 2 years.
                </li>
                <li>
                  <iconify-icon
                    icon="simple-line-icons:check"
                    width="20"
                    height="20"
                    class="bullet-icon"
                  />
                  I earned a certificate of completion in cloud computing
                  through a program led by Google, Tokopedia, Gojek, and
                  Traveloka.
                </li>
                <li>
                  <iconify-icon
                    icon="simple-line-icons:check"
                    width="20"
                    height="20"
                    class="bullet-icon"
                  />
                  I achieved the second place in a national-level web design
                  competition.
                </li>
                <li>
                  <iconify-icon
                    icon="simple-line-icons:check"
                    width="20"
                    height="20"
                    class="bullet-icon"
                  />
                  And much more.
                </li>
              </ul>
            </div>
          </div>

          <v-row class="mb-4 my-9">
            <v-col cols="12" md="6">
              <v-btn
                color="#0A66C2"
                class="pa-6 custom-rounded-btn font-normal white--text"
                block
                href="https://www.linkedin.com/in/qsaifudin/"
                target="_blank"
                ><iconify-icon width="20" icon="mdi:linkedin" class="mr-1" />
                <span style="font-size: 15px"> SEE MY RESUME ON LINKEDI </span>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                color="currentColor"
                outlined
                block
                class="pa-6 px-11 custom-rounded-btn font-normal"
                href="Saifudin - Resume.pdf"
                target="_blank"
              >
                <span style="font-size: 15px"> SEE MY CV </span></v-btn
              >
            </v-col>
          </v-row>

          <div
            class="mt-16 font-light mb-7 text-center"
            style="font-size: 13px"
          >
            ~ This place is a dream. Only a sleeper considers it real ~
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  // ... other component options ...

  computed: {
    imageSrc() {
      return this.$vuetify.theme.dark
        ? "myfoto/me2-dark.png"
        : "myfoto/me2.png";
    },
    paddingClass() {
      return this.$vuetify.breakpoint.smAndDown ? "pa-6" : "pl-2 pr-6";
    },
    isSmallScreen() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style scoped>
.image {
  width: 90%; /* Set the image width to 100% of its container */
  max-width: 470px; /* Set a maximum width for the image */
}

@media (max-width: 960px) {
  .image {
    max-width: 90%; /* Change the max-width to 100% on smaller screens */
  }
  .wrap-img {
    text-align: center !important;
  }
}

.icon-container {
  display: inline-block;
  padding: 1px; /* Adjust as needed */
  border: 1px solid currentColor; /* Border color follows text color */
  border-radius: 50%; /* Make it circular */
}

.custom-rounded-btn {
  border-radius: 10px; /* Adjust the value as needed */
}

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
  margin-top: 5px;
  margin-right: 10px; /* Adjust as needed */
}

.list-text {
  flex-grow: 1;
}
</style>
