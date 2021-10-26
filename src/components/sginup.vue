<template>
  <div class="sginup-container">
    <div class="sginup-box">
      <div class="login-title">Join To our Amazing Engine to find a Coach</div>

      <form @submit.prevent="addNewUser">
        <div class="custom-input">
          <input
            @change="validator"
            type="text"
            id="fullname"
            v-model.trim="fullname"
          />
          <label for="fullname">fullname</label>
        </div>
        <div class="custom-input">
          <input
            @change="validator"
            type="email"
            id="email"
            v-model.trim="email"
          />
          <label for="email">email</label>
        </div>
        <div class="custom-input">
          <input
            @change="validator"
            type="password"
            id="password"
            v-model.trim="password"
          />
          <label for="password">password</label>
        </div>
        <div class="custom-input">
          <input
            @change="validator"
            type="password"
            id="rePassword"
            v-model.trim="rePassword"
          />
          <label for="rePassword">Retype Password</label>
        </div>
        <div class="errors" v-if="error">
          {{ errorMsg }}
        </div>
        <div class="actions">
          <button-base type="submit" to="/">Sgin Up</button-base>
          <button-base type="button" link to="/">Sgin In</button-base>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      rePassword: "",
      errorMsg: "",
      error: false,
      userValid: false,
    };
  },
  methods: {
    validator() {
      if (
        this.fullname === "" ||
        this.fullname.length > 20 ||
        this.fullname.length < 5
      ) {
        this.error = true;
        const msg =
          "Please Insert Your Full name with Max Chracters 20 and not less 5";

        this.errorMsg = msg;
      } else if (this.email === "" || !this.email.includes("@")) {
        this.error = true;
        const msg = "Please Insert a Valid Email";
        this.errorMsg = msg;
      } else if (
        this.password === "" ||
        this.password.length > 18 ||
        this.password.length < 6
      ) {
        this.error = true;
        const msg =
          "Please Insert a Password with max Chracters 18 and not less than 6";
        this.errorMsg = msg;
      } else if (this.rePassword !== this.password) {
        this.error = true;
        const msg = "passwords Not Matched Please Fix it";
        this.errorMsg = msg;
      } else {
        this.errorMsg === "";
        this.userValid = true;
      }
    },
    addNewUser() {
      this.validator();
      if (this.errorMsg === "") {
        this.userValid = true;
      }
      if (!this.userValid) {
        return;
      }
      const userData = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        rePassword: this.rePassword,
        id: this.$store.getters["account/usersCount"],
      };
      this.$store.dispatch("account/theNewUser", userData);
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.sginup-container {
  height: 100vh;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  background-color: #0D1118;
}
.login-title,
.errors {
  margin: 10px 0;
  padding-left: 3px;
  border-left: 2px solid var(--y-color);
  color: #fff;
}
.errors {
  border-color: red;
}
.sginup-box {
  background-color: var(--b-color);
  border-radius: 10px;
  overflow: hidden;
  width: 95%;
  max-width: 500px;
  margin: 0 auto;
  padding: 5px;
}
.sginup-box form .custom-input {
  width: 100%;
  position: relative;
  padding: 5px;
}
.sginup-box form input {
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
}
.sginup-box form label {
  position: absolute;
  user-select: none;
  color: var(--y-color);
  position: absolute;
  top: 10.5px;
  left: 10px;
  color: #fff;
  font-size: 13px;
  font-size: 16px;
  transition: 0.1s linear;
}
.sginup-box .actions {
  text-align: center;
  margin: 10px auto;
}
.sginup-box form input[type="file"] {
  display: none;
}
.sginup-box form input[type="file"] + label {
  padding: 20px 12px 17px 3px;
  width: 100%;
  display: block;
  background-color: #70707093;
  border: 2px solid gray;
  font-size: 16px;
  border-radius: 3px;
  outline: none;
  color: #fff;
  font-family: "Georama", sans-serif;
  position: relative !important;
  word-break: break-all;
  left: 0;
  top: 0;
}
.sginup-box form input[type="file"] + label:after {
  content: "Upload Image";
  position: absolute;
  right: 2px;
  top: calc(50% + 0.4px);
  transform: translateY(-50%);
  background-color: var(--y-color);
  color: var(--b-color);
  padding: 10px 5px;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
}
</style>