<template>
  <div class="custom-input">
    <input
      :type="type"
      class="floating__input"
      :id="inputName"
      autocomplete="off"
      v-if="!select"
    />
    <select :id="inputName" v-else>
      <option v-for="value in values" :key="value" :value="value">
        {{ value }}
      </option>
    </select>
    <label :for="inputName">{{ title }}</label>
  </div>
</template>
<script>
export default {
  props: {
    select: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    inputName: {
      type: String,
      required: false,
    },
    values: {
      type: Array,
      required: false,
    },
  },
};
</script>
<style scoped>
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
</style>