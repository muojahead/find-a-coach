<template>
  <div>
    <page-title title="Coaches List"></page-title>
    <div class="container">
      <the-filter @change-filter="setFilter"></the-filter>
    </div>
    <div class="container">
      <div class="coaches" v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :name="coach.name"
          :job="coach.job"
          :disc="coach.disc"
          :image="coach.image"
          :rate="coach.rate"
        ></coach-item>
      </div>
      <div class="noCoaches" v-else>
        Unfortunately, there are no Coaches at the moment
        <i class="far fa-sad-tear" style="color: var(--y-color)"></i>
      </div>
    </div>
  </div>
</template>
<script>
import coachItem from "./CoachItem.vue";
import theFilter from "../Bases/TheFilter.vue";
import PageTitle from "../Bases/PageTitle.vue";
export default {
  components: {
    coachItem,
    theFilter,
    PageTitle,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        fullstack: true,
        uiux: true,
      },
    };
  },
  methods: {
    setFilter(updatedFilter) {
      this.activeFilters = updatedFilter;
    },
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (
          this.activeFilters.frontend &&
          coach.jobFilter.includes("frontend")
        ) {
          return true;
        }
        if (this.activeFilters.backend && coach.jobFilter.includes("backend")) {
          return true;
        }
        if (
          this.activeFilters.fullstack &&
          coach.jobFilter.includes("fullstack")
        ) {
          return true;
        }
        if (this.activeFilters.uiux && coach.jobFilter.includes("UI/UX")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>
<style scoped>
/* Start Coaches Area */
.coaches {
  display: grid;
  padding: 50px 10px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.noCoaches {
  background-color: var(--b-color);
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  font-size: var(--h2-font-size);
  text-align: center;
  width: 98%;
  margin: 5px auto;
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
</style>