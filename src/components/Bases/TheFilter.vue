<template>
  <div class="filters">
    <div class="filters-title">Filters</div>
    <div class="filters-choice">
      <form>
        <div class="filter">
          <input type="checkbox" checked @change="setFilters" id="frontend" />
          <label for="frontend">Front-end</label>
        </div>
        <div class="filter">
          <input type="checkbox" checked @change="setFilters" id="backend" />
          <label for="backend">Back-end</label>
        </div>
        <div class="filter">
          <input type="checkbox" checked @change="setFilters" id="fullstack" />
          <label for="fullstack">Full-stack</label>
        </div>
        <div class="filter">
          <input type="checkbox" checked @change="setFilters" id="uiux" />
          <label for="uiux">UI/UX</label>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        fullstack: true,
        uiux: true,
      },
    };
  },
  methods: {
    setFilters(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updateFilter = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updateFilter;
      this.$emit("change-filter", updateFilter);
    },
  },
};
</script>
<style scoped>
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
</style>