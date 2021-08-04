<template>
  <button v-if="!link">
    <slot></slot>
  </button>
  <router-link :to="to" v-else>
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
button,
a {
  padding: 4px 8px;
  font-size: var(--h3-font-size);
  border: 2px solid var(--y-color);
  background-color: transparent;
  color: var(--y-color);
  cursor: pointer;
  transition: 0.2s linear;
  text-decoration: none;
  margin: 0 3px;
  border-radius: 5px;
}

button:hover,
a:hover {
  background-color: var(--y-color);
  border-color: transparent;
  color: var(--b-color);
}
</style>