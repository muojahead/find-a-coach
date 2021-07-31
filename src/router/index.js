import { createRouter, createWebHistory } from "vue-router";
import CoachesList from "../components/coaches/CoachesList.vue";
import CoachInfo from "../components/coaches/CoachInfo.vue";
import CoachContact from "../components/coaches/CoachContact.vue";
import RegisterCoach from "../components/requests/RegisterCoach.vue";
import Requests from "../components/requests/Requests.vue";
const routes = [{
        path: "/",
        redirect: "/coaches",
    },
    { path: "/coaches", component: CoachesList },
    { path: "/register-coach", component: RegisterCoach },
    { path: "/requests", component: Requests },
    {
        path: "/coach-info",
        name: "home",
        component: CoachInfo,
        children: [
            { path: "/:id", component: CoachContact, name: "contact-coach" },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exActive",
});

export default router;