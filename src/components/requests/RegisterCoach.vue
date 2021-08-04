<template>
  <div>
    <div class="title">
      <div class="container">
        <h2>Register New Coach</h2>
      </div>
    </div>
    <div class="box">
      <div class="container">
        <div class="box-container">
          <div class="box-title"><h3>Add New Coach</h3></div>
          <div class="box-image">
            <img
              src="../../assetss/imgs/resgisterImg.svg"
              alt="register Image"
            />
          </div>
          <div class="box-form">
            <form action="">
              <floated-input
                inputName="coachName"
                v-model="coachName"
                title="Coach Name"
                type="text"
              ></floated-input>
              <floated-input
                inputName="coachEmail"
                v-model="coachEmail"
                title="Coach Email"
                type="email"
              ></floated-input>
              <floated-input
                inputName="coachPhone"
                v-model="coachPhone"
                title="Coach st. Phone"
                type="tel"
              ></floated-input>
              <floated-input
                inputName="coachPhoneTow"
                v-model="coachPhoneTow"
                title="Coach nd. Phone"
                type="tel"
              ></floated-input>
              <floated-input
                inputName="coachWebsite"
                v-model="coachWebsite"
                title="Coach Website"
                type="url"
              ></floated-input>
              <floated-input
                inputName="coachPlace"
                v-model="coachPlace"
                title="Coach Location"
                select
                :values="countries"
              >
              </floated-input>
              <floated-input
                inputName="coachAge"
                v-model="coachAge"
                title="Coach Age"
                type="number"
              >
              </floated-input>
              <floated-input
                inputName="freelanceStatus"
                v-model="freelanceStatus"
                title="Freelance Status"
                select
                :values="['avaliable', 'unavailable']"
              >
              </floated-input>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import floatedInput from "../Bases/FloatedInput.vue";
import country_list from "./countries.js";
export default {
  components: {
    floatedInput,
  },
  data() {
    return {
      coachName: "",
      coachEmail: "",
      coachPhone: "",
      coachPhoneTow: "",
      coachWebsite: "",
      countries: country_list,
      coachAge: "",
      coachPlace: "",
      freelanceStatus: "",
      // coachImage: "",
    };
  },
};
</script>
<style scoped>
.title {
  width: 100%;
  height: 60px;
  text-align: center;
  background-color: var(--b-color);
  color: #fff;
  font-size: var(--h2-fontSize);
  border-top: 0.5px solid gray;
  line-height: 60px;
}
.box {
  padding: 50px 20px;
}
.box-container {
  background-color: var(--b-color);
  border-radius: 10px;
  overflow: hidden;
  width: 95%;
  max-width: 800px;
  margin: 0 auto;
}
.box-container .box-title {
  width: 100%;
  text-align: center;
  padding: 15px 0;
}
.box-container .box-title h3 {
  border-bottom: 2px solid var(--y-color);
  display: inline-block;
  color: white;
}
.box-container .box-image {
  width: 100%;
  position: relative;
  padding: 25px;
  text-align: center;
}
.box-container .box-image img {
  width: 100%;
  max-width: 400px;
  height: auto;
}
.box-container .box-form {
  padding: 10px 5px;
}
.box-container .box-form form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>