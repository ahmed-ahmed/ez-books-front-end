import api from '../../config/api.config';

export default {
    namespaced: true,
    state: {
        list: []
    },
    mutations: {
        setAccounts(state, accounts) {
            state.list = accounts;
        },
        addAccount(state, account) {
            state.list.push(account);
        }
    },
    actions: {
        async list(context) {
            let response = await api.get(`accounts`);
            context.commit('setAccounts', response.data);
        },
        async add(context, account) {
            // await api.post(`accounts`, account);
            let response = await api.post(`accounts`, account);
            context.commit('addAccount', response.data);
        }
    }
}