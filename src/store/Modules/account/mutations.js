export default {
    addNewUser(state, payload) {
        state.accounts.push(payload);
    },
};