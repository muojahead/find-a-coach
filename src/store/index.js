import { createStore } from "vuex";
import coachesModule from "./Modules/coaches/index.js";
import requesetsModule from "./Modules/requests/index.js";
import accountModule from "./Modules/account/index.js";
const store = createStore({
    modules: {
        coaches: coachesModule,
        requests: requesetsModule,
        account: accountModule,
    },
    state() {
        return {
            logedIn: false,
        };
    },
    mutations: {
        logedInSuc(state, payload) {
            return (state.logedIn = payload);
        },
    },
    actions: {
        showHeaderandFooter(context, payload) {
            context.commit("logedInSuc", payload);
        },
    },
    getters: {
        logedIn(state) {
            return state.logedIn;
        },
    },
});
export default store;