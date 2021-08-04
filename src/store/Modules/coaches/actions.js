export default {
    addCoach(context, payload) {
        const coachData = payload;
        context.commit("addCoach", coachData);
    },
};