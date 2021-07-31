<template>
  <div class="title">
    <div class="container">
      <h2>Coaches List</h2>
    </div>
  </div>
  <div class="container">
    <div class="filters">
      <div class="filters-title">Filters</div>
      <div class="filters-choice">
        <form action="">
          <div class="filter">
            <input type="checkbox" name="frontend" id="frontend" />
            <label for="frontend">Front-end</label>
          </div>
          <div class="filter">
            <input type="checkbox" name="frontend" id="backend" />
            <label for="backend">Back-end</label>
          </div>
          <div class="filter">
            <input type="checkbox" name="frontend" id="fullstack" />
            <label for="fullstack">Full-stack</label>
          </div>
          <div class="filter">
            <input type="checkbox" name="frontend" id="uiux" />
            <label for="uiux">UI/UX</label>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="coaches">
      <div class="coach">
        <div class="head">
          <div class="img">
            <img src="../../assetss/imgs/coachOne.jpg" alt="coach Photo" />
          </div>
          <div class="info">
            <h2>Mohamed Mujahid</h2>
            <p>Front-end Developer</p>
          </div>
          <div class="rate">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
        </div>
        <div class="body">
          <div class="disc">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              harum labore amet veniam at sunt dolor est velit, eum totam
              possimus molestiae quia quibusdam cupiditate explicabo nisi nulla
              dolorum nesciunt? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nobis, culpa distinctio libero architecto
              praesentium neque placeat ducimus. Tempora optio
            </p>
          </div>
          <div class="buttons">
            <button-base
              ><router-link to="/contact/id">contact</router-link></button-base
            >
            <button-base
              ><router-link to="/coach-info"
                >More Details</router-link
              ></button-base
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonBase from "../Bases/Button.vue";
export default {
  components: {
    ButtonBase,
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
/* Start Filters Area */

.filters {
  border-bottom: 0.5px solid gray;
  display: flex;
}
.filters .filters-title {
  width: 20%;
  text-align: center;
  line-height: 60px;
  font-size: var(--h1-font-size);
}
.filters-choice {
  width: 80%;
  text-align: center;
  line-height: 65px;
}
.filters-choice form {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.filters-choice form .filter label {
  font-size: var(--p-font-size);
  font-weight: 500;
  margin: 0 3px;
  user-select: none;
}
.filters-choice form .filter input {
  height: 15px;
  width: 15px;
}
@media (max-width: 500px) {
  .filters-choice form {
    grid-template-columns: repeat(2, 1fr);
  }
  .filters-choice {
    width: 75%;
    text-align: left;
    line-height: 30px;
  }
  .filters .filters-title {
    text-align: left;
    width: 25%;
  }
}
/* Start Coaches Area */
.coaches {
  display: grid;
  padding: 50px 10px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.coaches .coach {
  background-color: var(--b-color);
  border-radius: 10px;
}
.coaches .coach .head {
  display: flex;
  border-bottom: 0.5px solid gray;
  padding: 20px;
}
.coaches .coach .head .img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}
.coaches .coach .head .img img {
  width: 304%;
  position: absolute;
  top: -125px;
  left: -104px;
}
.coaches .coach .head .info {
  width: 50%;
  padding: 25px 10px;
}
.coaches .coach .head .info h2 {
  color: var(--y-color);
  font-size: var(--h2-font-size);
}
.coaches .coach .head .info p {
  color: white;
  font-size: var(--p-font-size);
}
.coaches .coach .head .rate {
  padding: 25px 10px;
  direction: rtl;
  color: var(--y-color);
  width: 35%;
}
.coaches .coach .head .rate i {
  margin: 1px;
}

.coaches .coach .body {
  padding: 20px;
}
.coaches .coach .body .disc p {
  color: #fff;
  font-size: var(--p-font-size);
}
.coaches .coach .body .buttons {
  padding: 10px 0 0 0;
  width: 100%;
  direction: rtl;
}
.coaches .coach .body .buttons button {
  margin: 0 7px;
}
.coaches .coach .body .buttons button a {
  color: var(--y-color);
  text-decoration: none;
  transition: 0.2s linear;
}
.coaches .coach .body .buttons button:hover,
.coaches .coach .body .buttons button:hover a {
  background-color: var(--y-color);
  border-color: transparent;
  color: var(--b-color);
}
@media (max-width: 1100px) {
  .coaches {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (max-width: 820px) {
  .coaches {
    padding: 10px;
  }
}
@media (max-width: 540px) {
  .coaches .coach .head .rate {
    width: 28%;
  }
}
@media (max-width: 515px) {
  .coaches .coach .head {
    display: block;
    text-align: center;
    padding: 10px;
  }
  .coaches .coach .body {
    padding: 10px;
  }
  .coaches .coach .head .img,
  .coaches .coach .head .info,
  .coaches .coach .head .rate {
    padding: 3px;
    direction: rtl;
    color: var(--y-color);
    width: 100%;
    border-radius: unset;
  }
  .coaches .coach .head .img {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .coaches .coach .head .img img {
    width: 317%;
    position: absolute;
    top: -202px;
    left: -165px;
  }
  .coaches .coach .body .buttons button {
    margin: 3px;
    padding: 3px 6px;
  }
}
@media (max-width: 300px) {
  .coaches .coach .body .buttons button {
    width: 100%;
    display: block;
  }
}
</style>