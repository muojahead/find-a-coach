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
                <div class="custom-input">
                  <input
                    type="text"
                    class="floating__input"
                    id="name"
                    autocomplete="off"
                    v-model="name"
                  />
                  <label for="name">Coach Name </label>
                </div>
                <!--  -->
                <div class="custom-input">
                  <input
                    type="text"
                    class="floating__input"
                    id="email"
                    autocomplete="off"
                    v-model="email"
                  />
                  <label for="email">Coach Email </label>
                </div>
                <!--  -->
                <div class="custom-input">
                  <input
                    type="text"
                    class="floating__input"
                    id="phone"
                    autocomplete="off"
                    v-model="phone"
                  />
                  <label for="phone">Coach st. Phone </label>
                </div>
                <!--  -->
                <div class="custom-input">
                  <input
                    type="text"
                    class="floating__input"
                    id="phoneTow"
                    autocomplete="off"
                    v-model="phoneTow"
                  />
                  <label for="phoneTow">Coach nd. Phone </label>
                </div>
                <!--  -->
                <div class="custom-input">
                  <input
                    type="text"
                    class="floating__input"
                    id="website"
                    autocomplete="off"
                    v-model="website"
                  />
                  <label for="website">Coach Website </label>
                </div>
                <!--  -->
                <div class="custom-input">
                  <input
                    type="text"
                    class="floating__input"
                    id="rate"
                    autocomplete="off"
                    v-model="rate"
                  />
                  <label for="rate">Hourly Rate</label>
                </div>
                <!--  -->
                <div class="custom-input">
                  <input
                    type="number"
                    class="floating__input"
                    id="age"
                    autocomplete="off"
                    v-model="age"
                  />
                  <label for="age">Coach Age </label>
                </div>
                <!--  -->

                <div class="upload__input">
                  <input type="file" id="imgUpload" @change="hasImage" />
                  <label for="imgUpload">{{ fileInputName }}</label>
                </div>
                <!--  -->
                <div class="custom-input">
                  <select id="job" v-model="job">
                    <option selected disabled>Choose</option>
                    <option v-for="job in jobsList" :key="job" :value="job">
                      {{
                        job == "UI/UX" ? job + " Desginer" : job + " Developer"
                      }}
                    </option>
                  </select>
                  <label for="job">Job Title</label>
                </div>
                <!--  -->
                <div class="custom-input">
                  <select id="location" v-model="location">
                    <option selected disabled>Choose</option>
                    <option
                      v-for="country in countries"
                      :key="country"
                      :value="country"
                    >
                      {{ country + ", Egypt" }}
                    </option>
                  </select>
                  <label for="location">Coach Location</label>
                </div>
                <!--  -->
                <div class="custom-input">
                  <select id="freelanceStatus" v-model="freelanceStatus">
                    <option selected disabled>Choose</option>
                    <option
                      v-for="freelance in ['avaliable', 'unavailable']"
                      :key="freelance"
                      :value="freelance"
                    >
                      {{ freelance }}
                    </option>
                  </select>
                  <label for="freelanceStatus">Freelance Status</label>
                </div>
                <!--  -->
                <div class="custom-input">
                  <select id="exp" v-model="exp">
                    <option selected disabled>Choose</option>
                    <option
                      v-for="expVal in expValuesList"
                      :key="expVal"
                      :value="expVal"
                    >
                      {{ expVal }}
                    </option>
                  </select>
                  <label for="exp">Coach Experience</label>
                </div>
                <!--  -->
              </div>
              <div class="dicription">
                <textarea id="coachDisc" rows="5" v-model="disc"></textarea>
                <label for="coachDisc">Coach Description</label>
              </div>
              <div class="send__data">
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
      name: "",
      email: "",
      phone: "",
      phoneTow: "",
      website: "",
      countries: country_list,
      age: "",
      location: [],
      freelanceStatus: [],
      image: "",
      exp: [],
      hasImageMsg: false,
      rate: [],
      job: "",
      disc: "",
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
    };
  },
  computed: {
    fileInputName() {
      return this.hasImageMsg ? this.image.name : "Coach Picture";
    },
  },
  methods: {
    sendCoachData() {
      const coachesCount = this.$store.getters["coaches/coachesCount"];
      const newCoachData = {
        id: `c${coachesCount + 1}`,
        name: this.name,
        job:
          this.job == "UI/UX"
            ? this.job + " Desginer"
            : this.job + " Developer",
        jobFilter: this.job,
        image: `https://randomuser.me/api/portraits/men/${
          coachesCount + 1
        }.jpg`,
        age: this.age,
        email: this.email,
        location: this.location + ", Egypt",
        website: this.website,
        phoneOne: this.phone,
        phoneTow: this.phoneTow,
        exp: this.exp,
        rate: this.rate,
        freelance: this.freelanceStatus,
        disc: this.disc,
      };
      this.$store.dispatch("coaches/addCoach", newCoachData);
      this.$router.push("/");
    },
    hasImage(e) {
      this.hasImageMsg = true;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = files[0];
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
  background-color: #fff;
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
  /*  */
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
  background-color: #70707093;
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
  background-color: #4f4f4f;
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