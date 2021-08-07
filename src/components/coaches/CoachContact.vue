<template>
  <div>
    <page-title back title="Contact Coach"></page-title>
    <div class="container">
      <div class="contact-box">
        <div class="contact-title">Send Message to {{ coachName }}</div>
        <form @submit.prevent="sendMessage">
          <div class="custom-input">
            <label for="name">Your Name</label>
            <input type="text" id="name" v-model="name" />
          </div>
          <div class="custom-input">
            <label for="email">Your Email</label>
            <input type="email" id="email" v-model="email" />
          </div>
          <div class="custom-input">
            <label for="msg">Your Message</label>
            <textarea
              rows="5"
              id="msg"
              maxlength="250"
              placeholder="Max-Chracter Length is 250"
              v-model="msg"
            ></textarea>
          </div>
          <div class="errors" v-if="!formIsValid">
            please enter a Valid Email and Non-empty Message.
          </div>
          <div class="sent" v-if="msgDoneSent">
            Your Message Successfully Sent to The Coach, Thank you.
          </div>
          <div class="actions">
            <button-base type="submit" to="/">Send Message</button-base>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      email: "",
      name: "",
      msg: "",
      formIsValid: true,
      msgDoneSent: false,
    };
  },
  computed: {
    coachName() {
      const coaches = this.$store.getters["coaches/coaches"];
      const actCoach = coaches.find((coach) => coach.id === this.id);
      return actCoach.name;
    },
  },
  methods: {
    sendMessage() {
      this.formIsValid = true;
      if (this.email === "" || !this.email.includes("@") || this.msg === "") {
        this.formIsValid = false;
        return;
      }
      const newRquest = {
        name: this.name,
        coachId: this.id,
        email: this.email,
        msg: this.msg,
      };
      this.$store.dispatch("requests/requstData", newRquest);
      this.name = "";
      this.email = "";
      this.msg = "";
      this.msgDoneSent = true;
      setTimeout(() => {
        this.msgDoneSent = false;
      }, 3000);
    },
  },
};
</script>
<style scoped>
.contact-box {
  background-color: var(--b-color);
  border-radius: 10px;
  overflow: hidden;
  width: 95%;
  max-width: 1000px;
  padding: 5px;
  margin: 20px auto;
}
.contact-title {
  text-align: center;
  color: #fff;
  font-size: var(--h3-font-size);
  padding: 3px;
}
.contact-box form .custom-input {
  width: 100%;
  position: relative;
  padding: 5px;
}
.contact-box form .custom-input input,
.contact-box form .custom-input textarea {
  padding: 25px 12px 12px 12px;
  width: 100%;
  display: block;
  background-color: #70707093;
  border: 2px solid gray;
  font-size: 16px;
  border-radius: 3px;
  outline: none;
  color: var(--y-color);
  font-family: "Georama", sans-serif;
  resize: none;
}
.contact-box form .custom-input label {
  position: absolute;
  user-select: none;
  transform: translateY(-50%);
  color: var(--y-color);
  position: absolute;
  top: 17.5px;
  left: 10px;
  color: #fff;
  font-size: 13px;
  font-size: 16px;
  transition: 0.1s linear;
}
.contact-box form .actions {
  text-align: center;
  padding: 7px;
}
.errors {
  text-align: center;
  padding: 5px;
  color: red;
}
.sent {
  text-align: center;
  padding: 5px;
  color: green;
}
</style>