<template>
  <v-container grid-list-xs class="pa-5 pt-4 myPrimary--text mb-10">
    <h1 class="text-center helvetica-bold font-extrabold mb-4">Contact</h1>
    <v-row class="align-center justify-space-around mt-6">
      <v-col cols="12" md="5" class="text-justify font-space-mono">
        Interested in working with me? Need help on your project? Or just wanna
        say hi? I'd love to hear you about that.️
        <div class="d-flex justify-space-between mt-8">
          <v-btn
            fab
            color="transparent"
            large
            :href="emailLink"
            target="_blank"
            rel="noopener noreferrer"
            class="myPrimary--text"
          >
            <iconify-icon width="50" icon="ic:baseline-email" />
          </v-btn>
          <v-btn
            fab
            color="transparent"
            large
            href="https://www.linkedin.com/in/qsaifudin/"
            target="_blank"
            class="myPrimary--text"
          >
            <iconify-icon width="50" icon="mdi:linkedin"
          /></v-btn>
          <v-btn
            fab
            color="transparent"
            large
            href="https://www.instagram.com/qsaifudin/"
            class="myPrimary--text"
            target="_blank"
          >
            <iconify-icon width="50" icon="ri:instagram-fill"
          /></v-btn>
          <v-btn
            fab
            color="transparent"
            large
            href="https://github.com/qsaifudin"
            class="myPrimary--text"
            target="_blank"
          >
            <iconify-icon width="50" icon="mdi:github"
          /></v-btn>
        </div>
      </v-col>
      <!-- <v-col cols="12" md="1"></v-col> -->
      <v-col cols="12" md="5">
        <v-form v-model="valid" @submit.prevent="sendEmail" ref="emailForm">
          <v-text-field
            color="myPrimary"
            v-model="name"
            label="First name"
            outlined
            clearable
            required
            :rules="rules"
          ></v-text-field>
          <v-text-field
            color="myPrimary"
            v-model="email"
            label="Email"
            outlined
            clearable
            required
            :rules="emailRules"
          ></v-text-field>
          <v-textarea
            color="myPrimary"
            label="Message"
            v-model="message"
            placeholder="Send your message here"
            outlined
            clearable
            required
            :rules="rules"
          ></v-textarea>
          <v-btn
            color="#0A66C2"
            class="white--text pa-6"
            type="submit"
            block
            :disabled="isFormEmpty || loading"
          >
            <iconify-icon icon="mdi:email-fast" width="20px" class="mr-1" />
            <span v-if="loading">Sending...</span>
            <span v-else>Send Message</span>
          </v-btn>
        </v-form>
        <!-- Hidden HTML form -->
        <form ref="form" style="display: none">
          <input type="text" name="name" :value="name" />
          <input type="email" name="email" :value="email" />
          <textarea name="message">{{ message }}</textarea>
        </form>
      </v-col>
    </v-row>
    <div class="d-flex align-end justify-center" style="min-height: 250px">
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
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      valid: true,
      valid: true,
      rules: [(v) => !!v || "Please fill in this field"],
      emailRules: [
        (v) => !!v || "Please fill in this field",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      loading: false,
    };
  },
  methods: {
    async sendEmail() {
      console.log(
        "🚀 ~ file: contact.vue:118 ~ sendEmail ~ templateParams:",
        this.$refs.form
      );
      try {
        // Set loading state to true
        this.loading = true;

        await emailjs.sendForm(
          "service_s7fx81w",
          "template_ee776uh",
          this.$refs.form,
          "gdHHooHEmWnzmPxrr"
        );

        // Show success toast
        this.$toast("Email sent successfully.");
      } catch (error) {
        console.error("Error sending email:", error);

        // Show error toast
        this.$toast.error("An error occurred while sending the email.");
      } finally {
        // Reset loading state to false
        this.loading = false;
      }
    },
  },
  computed: {
    emailLink() {
      const recipientEmail = "saifudinsatu@gmail.com";
      const subject = ""; // Optional subject
      const body = "Hi Saifudin,\n\nI'm reaching out through your website.";

      return `mailto:${recipientEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    },
    isFormEmpty() {
      return !this.name || !this.email || !this.message;
    },
    isFormEmpty() {
      return !this.name || !this.email || !this.message;
    },
  },
};
</script>

<style scoped></style>
