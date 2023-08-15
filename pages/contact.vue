<template>
  <v-container grid-list-xs class="pa-5 pt-4 myPrimary--text mb-10">
    <h1 class="text-center helvetica-bold font-extrabold mb-4">Contact</h1>
    <v-row class="align-center justify-space-around mt-6">
      <v-col cols="12" md="5" class="text-justify font-space-mono">
        Interested in working with me? Need help on your project? Or just wanna
        say hi? I'd love to hear you about that.️
        <div class="d-flex justify-space-between mt-8">
          <a
            :href="emailLink"
            target="_blank"
            rel="noopener noreferrer"
            class="myPrimary--text"
          >
            <iconify-icon width="58" icon="ic:baseline-email" />
          </a>
          <a
            href="https://www.linkedin.com/in/qsaifudin/"
            target="_blank"
            class="myPrimary--text"
          >
            <iconify-icon width="58" icon="mdi:linkedin"
          /></a>
          <a
            href="https://www.instagram.com/qsaifudin/"
            class="myPrimary--text"
            target="_blank"
          >
            <iconify-icon width="58" icon="ri:instagram-fill"
          /></a>
          <a
            href="https://github.com/qsaifudin"
            class="myPrimary--text"
            target="_blank"
          >
            <iconify-icon width="58" icon="mdi:github"
          /></a>
        </div>
      </v-col>
      <!-- <v-col cols="12" md="1"></v-col> -->
      <v-col cols="12" md="5">
        <v-form v-model="valid">
          <v-text-field
            color="myPrimary"
            v-model="name"
            label="First name"
            outlined
            clearable
          ></v-text-field>
          <v-text-field
            color="myPrimary"
            v-model="email"
            label="Email"
            outlined
            clearable
          ></v-text-field>
          <v-textarea
            name="input-7-1"
            label="Message"
            v-model="message"
            hint="Send your message here"
            outlined
            clearable
          ></v-textarea>
          <v-btn color="#0A66C2" class="white--text pa-6"
            ><iconify-icon
              icon="mdi:email-fast"
              width="20px"
              class="mr-1"
            />Send Message</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
    <div class="d-flex align-end justify-center" style="min-height: 300px">
      <v-footer
        color="transparent"
        class="text-center justify-center"
        style="font-weight: lighter; font-size: 14px; letter-spacing: 2px"
      >
        Created by Saif © 2023
      </v-footer>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    emailLink() {
      const recipientEmail = "saifudinsatu@gmail.com";
      const subject = ""; // Optional subject
      const body = "Hi Saifudin,\n\nI'm reaching out through your website.";

      return `mailto:${recipientEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    },
  },
};
</script>

<style scoped></style>
