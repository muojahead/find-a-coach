export default {
    theNewUser(context, payload) {
        const data = {
            fullname: payload.fullname,
            email: payload.email,
            password: payload.password,
            rePassword: payload.rePassword,
            id: payload.id,
        };
        context.commit("addNewUser", data);
    },
};