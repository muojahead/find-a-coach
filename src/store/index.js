import { createStore } from "vuex";
import coachesModule from "./Modules/coaches/index.js";
const store = createStore({
    modules: {
        coaches: coachesModule,
    },
});
export default store;