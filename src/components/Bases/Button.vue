<template>
  <button>
    <slot></slot>
  </button>
</template>
<style scoped>
button {
  padding: 4px 8px;
  font-size: var(--h3-font-size);
  border: 2px solid var(--y-color);
  background-color: transparent;
  color: var(--y-color);
  cursor: pointer;
  transition: 0.2s linear;
}

button a {
  color: var(--y-color) !important;
  text-decoration: none !important;
}
</style>