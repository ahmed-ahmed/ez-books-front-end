import api from '../../services/api.service';

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
            let response = await api.get(`financial-acounts`);
            context.commit('setAccounts', response.data);
        },
        async add(context, account) {
            // await api.post(`accounts`, account);
            let response = await api.post(`financial-acounts`, account);
            context.commit('addAccount', response.data);
        }
    },
    getters: {
        groupBySubType: state => {
            return state.list.reduce((a, b) => {
                const parentIndex = a.map(a => a.text).indexOf(b.accountSubType);
                let parentObject = {};
                if (parentIndex === -1) {
                    parentObject = {text: b.accountSubType, children: []};
                    a.push(parentObject)

                } else {
                    parentObject = a[parentIndex]
                }
                parentObject.children.push({id: b.id, text: b.name});
                return a;
            }, []);
        }
    }
}
