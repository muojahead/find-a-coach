export default {
    admin(state) {
        return state.admin;
    },
    usersCount(state) {
        return state.accounts.length;
    },
    accounts(state) {
        return state.accounts;
    },
};