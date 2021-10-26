<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-title">
        Log in to our Amazing Engine to find a Coach
      </div>

      <form @submit.prevent="login">
        <div class="custom-input">
          <input type="text" id="username" v-model="username" />
          <label for="username">Email</label>
        </div>
        <div class="custom-input">
          <input type="password" id="password" v-model="password" />
          <label for="password">Password</label>
        </div>
        <div class="errors">
          {{ errorMsg }}
        </div>
        <div class="actions">
          <button-base type="submit" to="/coaches">Log in</button-base>
          <button-base type="button" link to="/signup">Sign up</button-base>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      adminLoginInfo: [],
      accounts: [],
      errorMsg: "",
      username: "admin",
      password: "admin",
    };
  },
  created() {
    this.adminLoginInfo = this.$store.getters["account/admin"];
    this.accounts = this.$store.getters["account/accounts"];
    console.log(this.accounts);
  },
  methods: {
    login() {
      if (
        this.username == this.adminLoginInfo[0].username &&
        this.password == this.adminLoginInfo[0].password
      ) {
        this.$router.push("/coaches");
        const loged = true;
        this.$store.dispatch("showHeaderandFooter", loged);
        console.log(this.$store.getters.logedIn);
      } else {
        this.errorMsg = "Sorry, username or Password is incorrect";
      }
      this.accounts.forEach((account) => {
        if (
          account.email === this.username &&
          account.password === this.password
        ) {
          this.$router.push("/coaches");
          const loged = true;
          this.$store.dispatch("showHeaderandFooter", loged);
        } else {
          this.errorMsg = "Sorry, username or Password is incorrect";
        }
      });
    },
  },
};
</script>
<style scoped>
.login-container {
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
.login-box {
  background-color: var(--b-color);
  border-radius: 10px;
  overflow: hidden;
  width: 95%;
  max-width: 500px;
  margin: 0 auto;
  padding: 5px;
}
.login-box form .custom-input {
  width: 100%;
  position: relative;
  padding: 5px;
}
.login-box form input {
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
.login-box form label {
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
.login-box .actions {
  text-align: center;
  margin: 10px auto;
}
</style>