import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "../components/coaches/CoachesList.vue";
import CoachInfo from "../components/coaches/CoachInfo.vue";
import CoachContact from "../components/coaches/CoachContact.vue";
import RegisterCoach from "../components/requests/RegisterCoach.vue";
import Requests from "../components/requests/Requests.vue";
import LogIn from "../components/LogIn.vue";
import sginup from "../components/sginup.vue";
const routes = [{
        path: "/",
        component: LogIn,
    },
    { path: "/coaches", component: CoachesList },
    { path: "/register-coach", component: RegisterCoach },
    { path: "/requests", component: Requests },
    {
        path: "/coaches/:id",
        component: CoachInfo,
        props: true,
    },
    { path: "/coaches/:id/contact", props: true, component: CoachContact },
    { path: "/signup", component: sginup },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exActive",
});

export default router;