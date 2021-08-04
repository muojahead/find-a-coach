<template>
  <div class="coach">
    <div class="head">
      <div class="img">
        <img :src="image" alt="coach Photo" />
      </div>
      <div class="info">
        <h2>{{ name }}</h2>
        <p>{{ job }}</p>
      </div>
      <div class="rate">
        <i
          class="fa fa-star"
          aria-hidden="true"
          v-for="star in rate"
          :key="star"
        ></i>
      </div>
    </div>
    <div class="body">
      <div class="disc">
        <p>
          {{ disc.replace(/^(.{200}[^\s]*).*/, "$1") + "....." }}
        </p>
      </div>
      <div class="buttons">
        <button-base link :to="conactCoachLink">contact</button-base>
        <button-base link :to="detailsCoachLink">More Details</button-base>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["image", "name", "job", "rate", "disc", "id"],
  computed: {
    conactCoachLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    detailsCoachLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>
<style scoped>
.coach {
  background-color: var(--b-color);
  border-radius: 5px;
}
.coach .head {
  display: flex;
  border-bottom: 0.5px solid gray;
  padding: 20px;
}
.coach .head .img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}
.coach .head .img img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0px;
}
.coach .head .info {
  width: 50%;
  padding: 25px 10px;
}
.coach .head .info h2 {
  color: var(--y-color);
  font-size: var(--h2-font-size);
}
.coach .head .info p {
  color: white;
  font-size: var(--p-font-size);
}
.coach .head .rate {
  padding: 25px 10px;
  direction: rtl;
  color: var(--y-color);
  width: 35%;
}
.coach .head .rate i {
  margin: 1px;
}

.coach .body {
  padding: 20px;
}
.coach .body .disc p {
  color: #fff;
  font-size: var(--p-font-size);
}
.coach .body .buttons {
  padding: 10px 0 0 0;
  width: 100%;
  direction: rtl;
}
.coach .body .buttons button {
  margin: 0 7px;
}

@media (max-width: 540px) {
  .coach .head .rate {
    width: 28%;
  }
}
@media (max-width: 515px) {
  .coach .head {
    display: block;
    text-align: center;
    padding: 10px;
  }
  .coach .body {
    padding: 10px;
  }
  .coach .head .img,
  .coach .head .info,
  .coach .head .rate {
    padding: 3px;
    direction: rtl;
    color: var(--y-color);
    width: 100%;
    border-radius: unset;
  }
  .coach .head .img {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .coach .head .img img {
    width: 317%;
    position: absolute;
    top: -202px;
    left: -165px;
  }
  .coach .body .buttons button {
    margin: 3px;
    padding: 3px 6px;
  }
}
@media (max-width: 300px) {
  .coach .body .buttons button {
    width: 100%;
    display: block;
  }
}
</style>