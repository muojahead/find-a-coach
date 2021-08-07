export default {
    requstData(context, payload) {
        const data = {
            name: payload.name,
            id: payload.coachId,
            coachId: payload.coachId,
            email: payload.email,
            msg: payload.msg,
        };
        context.commit("addNewRequest", data);
    },
};