<template>
  <div>
    <the-header></the-header>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from "./components/Bases/TheHeader.vue";
import TheFooter from "./components/Bases/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style lang="scss">
:root {
  --b-color: #212121;
  --y-color: #ffff00;
  --y-color-alpha: #ffff00b2;
  --p-font-size: 17px;
  --p-font-size-ss: 15px;
  --h1-font-size: 24px;
  --h1-font-size-ss: 22px;
  --h2-font-size: 22px;
  --h2-font-size-ss: 20px;
  --h3-font-size: 20px;
  --h3-font-size-ss: 18px;
  --h4-font-size: 18px;
  --h4-font-size-ss: 16px;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
  -moz-scroll-behavior: smooth;
  -o-scroll-behavior: smooth;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Georama", sans-serif;
  background-color:#0D1118;
}
input:not([type='checkbox']){
  border: .5px solid #010409;
  background-color: #0D1118;
}
.container {
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
}
@media (max-width: 770px) {
  .container {
    width: 100%;
    padding: 5px 0;
    margin: 0 auto;
  }
}
</style>
