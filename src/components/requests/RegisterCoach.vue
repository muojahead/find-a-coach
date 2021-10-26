<template>
  <div>
    <page-title back title="Register New Coach"></page-title>

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
            <form @submit.prevent="sendCoachData">
              <div class="inputs-group">
                <div class="custom-input" :class="{ invalid: !name.isValid }">
                  <input
                    :placeholder="name.isValid ? '' : name.errorMsg"
                    type="text"
                    class="floating__input"
                    id="name"
                    autocomplete="off"
                    v-model.trim="name.val"
                  />
                  <label for="name">Coach Name </label>
                </div>
                <!--  -->
                <div class="custom-input" :class="{ invalid: !email.isValid }">
                  <input
                    :placeholder="email.isValid ? '' : email.errorMsg"
                    type="text"
                    class="floating__input"
                    id="email"
                    autocomplete="off"
                    v-model.trim="email.val"
                  />
                  <label for="email">Coach Email </label>
                </div>
                <!--  -->
                <div class="custom-input" :class="{ invalid: !phone.isValid }">
                  <input
                    :placeholder="phone.isValid ? '' : phone.errorMsg"
                    type="text"
                    class="floating__input"
                    id="phone"
                    autocomplete="off"
                    v-model.trim="phone.val"
                  />
                  <label for="phone">Coach st. Phone </label>
                </div>
                <!--  -->
                <div
                  class="custom-input"
                  :class="{ invalid: !phoneTow.isValid }"
                >
                  <input
                    :placeholder="phoneTow.isValid ? '' : phoneTow.errorMsg"
                    type="text"
                    class="floating__input"
                    id="phoneTow"
                    autocomplete="off"
                    v-model.trim="phoneTow.val"
                  />
                  <label for="phoneTow">Coach nd. Phone </label>
                </div>
                <!--  -->
                <div
                  class="custom-input"
                  :class="{ invalid: !website.isValid }"
                >
                  <input
                    :placeholder="website.isValid ? '' : website.errorMsg"
                    type="text"
                    class="floating__input"
                    id="website"
                    autocomplete="off"
                    v-model.trim="website.val"
                  />
                  <label for="website">Coach Website </label>
                </div>
                <!--  -->
                <div class="custom-input" :class="{ invalid: !rate.isValid }">
                  <input
                    :placeholder="rate.isValid ? '' : rate.errorMsg"
                    type="text"
                    class="floating__input"
                    id="rate"
                    autocomplete="off"
                    v-model.trim="rate.val"
                  />
                  <label for="rate">Hourly Rate</label>
                </div>
                <!--  -->
                <div class="custom-input" :class="{ invalid: !age.isValid }">
                  <input
                    :placeholder="age.isValid ? '' : age.errorMsg"
                    type="number"
                    class="floating__input"
                    id="age"
                    autocomplete="off"
                    v-model.trim="age.val"
                  />
                  <label for="age">Coach Age </label>
                </div>
                <!--  -->

                <div class="upload__input" :class="{ invalid: !image.isValid }">
                  <input type="file" id="imgUpload" @change="hasImage" />
                  <label for="imgUpload">
                    {{ image.isValid ? fileInputName : image.errorMsg }}</label
                  >
                </div>
                <!--  -->
                <div class="custom-input" :class="{ invalid: !job.isValid }">
                  <select id="job" v-model.trim="job.val">
                    <option selected disabled>Choose</option>
                    <option v-for="job in jobsList" :key="job" :value="job">
                      {{
                        job == "UI/UX" ? job + " Desginer" : job + " Developer"
                      }}
                    </option>
                  </select>
                  <label for="job">
                    {{ exp.isValid ? "Job Title" : job.errorMsg }}</label
                  >
                </div>
                <!--  -->
                <div
                  class="custom-input"
                  :class="{ invalid: !location.isValid }"
                >
                  <select id="location" v-model.trim="location.val">
                    <option selected disabled>Choose</option>
                    <option
                      v-for="country in countries"
                      :key="country"
                      :value="country"
                    >
                      {{ country + ", Egypt" }}
                    </option>
                  </select>
                  <label for="location">
                    {{
                      exp.isValid ? "Coach Location" : location.errorMsg
                    }}</label
                  >
                </div>
                <!--  -->
                <div
                  class="custom-input"
                  :class="{ invalid: !freelanceStatus.isValid }"
                >
                  <select
                    id="freelanceStatus"
                    v-model.trim="freelanceStatus.val"
                  >
                    <option selected disabled>Choose</option>
                    <option
                      v-for="freelance in ['avaliable', 'unavailable']"
                      :key="freelance"
                      :value="freelance"
                    >
                      {{ freelance }}
                    </option>
                  </select>
                  <label for="freelanceStatus">
                    {{
                      exp.isValid
                        ? "Freelance Status"
                        : freelanceStatus.errorMsg
                    }}</label
                  >
                </div>
                <!--  -->
                <div class="custom-input" :class="{ invalid: !exp.isValid }">
                  <select id="exp" v-model.trim="exp.val">
                    <option selected disabled>Choose</option>
                    <option
                      v-for="expVal in expValuesList"
                      :key="expVal"
                      :value="expVal"
                    >
                      {{ expVal }}
                    </option>
                  </select>
                  <label for="exp">
                    {{ exp.isValid ? "Coach Experience" : exp.errorMsg }}</label
                  >
                </div>
                <!--  -->
              </div>
              <div class="dicription" :class="{ invalid: !disc.isValid }">
                <textarea
                  id="coachDisc"
                  :placeholder="disc.isValid ? '' : disc.errorMsg"
                  rows="5"
                  v-model.trim="disc.val"
                ></textarea>
                <label for="coachDisc">Coach Description</label>
              </div>
              <div class="send__data">
                <p v-if="formIsValid">Fix The errors Above and try again</p>
                <button-base to="/" type="submit">Add New Coach</button-base>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import country_list from "./countries.js";
export default {
  data() {
    return {
      name: {
        val: "",
        isValid: true,
        errorMsg: "Insert Your Frist and Second name",
      },
      email: {
        val: "",
        isValid: true,
        errorMsg: "Insert Your Email Addrees",
      },
      phone: {
        val: "",
        isValid: true,
        errorMsg: "Insert Your Phone Number or Just add -",
      },
      phoneTow: {
        val: "",
        isValid: true,
        errorMsg: "Insert Your Phone Number or Just add -",
      },
      website: {
        val: "",
        isValid: true,
        errorMsg: "Insert Your Website Link or Just add -",
      },
      countries: country_list,
      age: {
        val: "",
        isValid: true,
        errorMsg: "Insert Your Age",
      },
      location: {
        val: "",
        isValid: true,
        errorMsg: "Select Your Location",
      },
      freelanceStatus: {
        val: "",
        isValid: true,
        errorMsg: "Select Your Freelancing Status",
      },
      image: {
        val: "",
        isValid: true,
        errorMsg: "Upload Your Image",
      },
      exp: {
        val: "",
        isValid: true,
        errorMsg: "Select Your Exeprince Years Count",
      },
      hasImageMsg: false,
      rate: {
        val: "",
        errorMsg: "Insert Your Hourly Rate Price",
        isValid: true,
      },
      job: {
        val: "",
        isValid: true,
        errorMsg: "Select Your Job Title",
      },
      disc: {
        val: "",
        isValid: true,
        errorMsg: "Insert Your Description",
      },
      jobsList: ["frontend", "backend", "fullstack", "UI/UX"],
      expValuesList: [
        "1 Year",
        "2 Years",
        "3 Years",
        "4 Years",
        "5 Years",
        "6 Years",
        "7 Years",
        "8 Years",
        "9 Years",
        "10+ Years",
      ],
      formIsValid: false,
    };
  },
  computed: {
    fileInputName() {
      return this.hasImageMsg ? this.image.val.name : "Coach Picture";
    },
  },
  methods: {
    validaiteForm() {
      this.formIsValid = false;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      } else {
        this.name.isValid = true;
      }
      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      } else {
        this.email.isValid = true;
      }
      if (this.age.val === "") {
        this.age.isValid = false;
        this.formIsValid = false;
      } else {
        this.age.isValid = true;
      }
      if (this.phone.val === "") {
        this.phone.isValid = false;
        this.formIsValid = false;
      } else if (this.phone.val === "-") {
        this.phone.val = "not-available";

        this.phone.isValid = true;
      } else {
        this.phone.isValid = true;
      }
      if (this.phoneTow.val === "") {
        this.phoneTow.isValid = false;
        this.formIsValid = false;
      } else if (this.phoneTow.val === "-") {
        this.phoneTow.val = "not-available";

        this.phoneTow.isValid = true;
      } else {
        this.phoneTow.isValid = true;
      }
      if (this.website.val === "") {
        this.website.isValid = false;
        this.formIsValid = false;
      } else if (this.website.val === "-") {
        this.website.val = "not-available";

        this.website.isValid = true;
      } else {
        this.website.isValid = true;
      }
      if (this.disc.val === "") {
        this.disc.isValid = false;
        this.formIsValid = false;
      } else {
        this.disc.isValid = true;
        this.formIsValid = true;
      }
      if (this.image.val === "") {
        this.image.isValid = false;
        this.formIsValid = false;
      } else {
        this.image.isValid = true;
      }
      if (!this.job.val || this.job.val.length < 0) {
        this.job.isValid = false;
        this.formIsValid = false;
      } else {
        this.job.isValid = true;
      }
      if (!this.location.val || this.location.val.length < 0) {
        this.location.isValid = false;
        this.formIsValid = false;
      } else {
        this.location.isValid = true;
      }
      if (!this.freelanceStatus.val || this.freelanceStatus.val.length < 0) {
        this.freelanceStatus.isValid = false;
        this.formIsValid = false;
      } else {
        this.freelanceStatus.isValid = true;
      }
      if (!this.exp.val || this.exp.val.length < 0) {
        this.exp.isValid = false;
        this.formIsValid = false;
      } else {
        this.exp.isValid = true;
      }

      if (!this.rate.val || this.rate.val.length < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      } else {
        this.rate.isValid = true;
      }
    },
    sendCoachData() {
      this.validaiteForm();
      if (!this.formIsValid) {
        return;
      }
      const coachesCount = this.$store.getters["coaches/coachesCount"];

      const newCoachData = {
        id: `c${coachesCount + 1}`,
        name: this.name.val,
        job:
          this.job.val == "UI/UX"
            ? this.job.val + " Desginer"
            : this.job.val + " Developer",
        jobFilter: this.job.val,
        image: `https://randomuser.me/api/portraits/men/${
          coachesCount + 1
        }.jpg`,
        age: this.age.val,
        email: this.email.val,
        location: this.location.val + ", Egypt",
        website: this.website.val.startsWith("http")
          ? "https://" + this.website.val
          : this.website.val,
        phoneOne: this.phone.val,
        phoneTow: this.phoneTow.val,
        exp: this.exp.val,
        rate: parseInt(this.rate.val),
        freelance: this.freelanceStatus.val,
        disc: this.disc.val,
      };
      this.$store.dispatch("coaches/addCoach", newCoachData);
      this.$router.push("/");
    },
    hasImage(e) {
      this.hasImageMsg = true;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image.val = files[0];
    },
  },
};
</script>
<style scoped>
.box {
  padding: 50px 20px;
}
.box-container {
  background-color: var(--b-color);
  border-radius: 10px;
  overflow: hidden;
  width: 95%;
  max-width: 1000px;
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
.box-container .box-form form .inputs-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.box-container .box-form form .custom-input {
  width: 100%;
  position: relative;
  padding: 5px;
}
.box-container .box-form form .custom-input input,
.box-container .box-form form .custom-input select {
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
.box-container .box-form form .custom-input select {
  padding: 18px 5px;
}
.box-container .box-form form .custom-input select option {
  background-color: var(--y-color);
  color: #000;
}
.box-container .box-form form .custom-input input:focus {
  box-shadow: 0 0 0 0.2rem rgba(190, 245, 62, 0.377);
}

.box-container .box-form form .custom-input label {
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

.box-container .box-form form .upload__input {
  width: 100%;
  position: relative;
  padding: 5px;
}
.box-container .box-form form .upload__input input {
  display: none;
}
.box-container .box-form form .upload__input label {
  padding: 20px 12px 17px 3px;
  width: 100%;
  display: block;
  background-color: #0D1118;
  border: .5px solid #010409;
  font-size: 16px;
  border-radius: 3px;
  outline: none;
  color: #fff;
  font-family: "Georama", sans-serif;
  display: block;
  position: relative;
  word-break: break-all;
}
.box-container .box-form form .upload__input label:after {
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
.box-container .box-form form .dicription {
  width: 100%;
  padding: 5px;
  position: relative;
  overflow: hidden;
}
.box-container .box-form form .dicription textarea {
  padding: 25px 12px 17px 12px;
  width: 100%;
  display: block;
  background-color: #0D1118;
  border: 2px solid gray;
  font-size: 16px;
  border-radius: 3px;
  outline: none;
  color: #fff;
  font-family: "Georama", sans-serif;
  display: block;
  position: relative;
  word-break: break-all;
  resize: none;
}
.box-container .box-form form .dicription label {
  position: absolute;
  user-select: none;
  background-color: #0D1118;
  transform: translateY(-50%);
  width: 98.1%;
  padding-top: 5px;
  color: var(--y-color);
  position: absolute;
  top: 20px;
  left: 10px;
  color: #fff;
  font-size: 13px;
  font-size: 16px;
  transition: 0.1s linear;
}
.box-container .box-form form .send__data p {
  margin: 10px auto;
  border: 1px solid red;
  padding: 4px 8px;
  border-radius: 3px;
  color: #fff;
}
.box-container .box-form form .invalid input,
.box-container .box-form form .invalid label,
.box-container .box-form form .invalid select,
.box-container .box-form form .invalid textarea {
  border-color: red !important;
}
.box-container .box-form form .custom-input input:focus,
.box-container .box-form form .custom-input select:focus,
.box-container .box-form form .custom-input textarea:focus {
  border-color: gray !important;
}
@media (max-width: 992px) {
  .box-container .box-form form .dicription label {
    width: 97.1%;
  }
}
@media (max-width: 662px) {
  .box-container .box-form form .dicription label {
    width: 94.1%;
  }
}
@media (max-width: 298px) {
  .box-container .box-form form .dicription label {
    width: 92.1%;
  }
}
.box-container .box-form form .send__data {
  text-align: center;
  padding: 5px;
}
@media (max-width: 674px) {
  .box-container .box-form form .inputs-group {
    grid-template-columns: repeat(1, 1fr);
  }
  .box {
    padding: 20px 5px;
  }
}
@media (max-width: 380px) {
  .box-container {
    border-radius: 5px;
    width: 99.5%;
    margin: 0 auto;
  }
  .box {
    padding: 10px 0;
  }
} ;
</style>