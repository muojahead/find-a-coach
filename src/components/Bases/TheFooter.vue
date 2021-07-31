<template>
  <footer>
    <div class="container">
      <div class="left">all rights reserved © 2021</div>
      <div class="right">
        Made With <i style="color: red" class="fas fa-heart"></i> By
        <a href="https://webdesgin.co">Mohamed Mujahid</a>
      </div>
      <div class="fixer"></div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background-color: var(--b-color);
  padding: 10px 5px;
  color: var(--y-color);
  height: 70px;
  line-height: 50px;
  font-size: var(--p-font-size);
}
footer .left {
  float: left;
}
footer .right {
  float: right;
}
footer a {
  color: var(--y-color);
}
.fixer {
  clear: both;
}
@media (max-width: 450px) {
  footer .left {
    float: none;
    width: 100%;
    text-align: center;
    margin: 5px auto;
  }
  footer .right {
    float: none;
    width: 100%;
    text-align: center;
    margin: 5px auto;
  }
  footer {
    height: auto;
    line-height: unset;
    font-size: var(--p-font-size-ss);
  }
}
</style>