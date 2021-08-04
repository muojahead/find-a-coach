<template>
  <div class="title">
    <div class="container">
      <h2>{{ title }}</h2>
      <div class="back" @click="backRoute" v-if="back">
        <i class="fa fa-arrow-left"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    back: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    backRoute() {
      return this.$router.back();
    },
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
.title .container {
  position: relative;
}
.back {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--y-color);
  font-size: 25px;
  left: 5px;
  cursor: pointer;
}
</style>