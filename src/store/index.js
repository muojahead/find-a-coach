import { createStore } from "vuex";
import coachesModule from "./Modules/coaches/index.js";
import requesetsModule from "./Modules/requests/index.js";
const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requesetsModule,
    },
});
export default store;