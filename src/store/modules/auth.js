import {UserService, AuthenticationError} from '../../services/user.service'
import TokenService from '../../services/storage.service'
import router from '../../router'


const state = {
    authenticating: false,
    accessToken: TokenService.getToken(),
    authenticationSuccess: false,
    authenticationErrorCode: 0,
    authenticationError: '',
    registering: false,
    registerationSuccess: false
}

const getters = {
    loggedIn: (state) => {
        return state.accessToken ? true : false
    },

    authenticationErrorCode: (state) => {
        return state.authenticationErrorCode
    },

    authenticationError(state) {
        return state.authenticationError
    },

    authenticationSuccess(state) {
        return state.authenticationSuccess
    },

    authenticating: (state) => {
        return state.authenticating
    },

    registering: (state) => {
        return state.registering
    },

    registerationSuccess: (state) => {
        return state.registerationSuccess
    }
};

const actions = {
    async login({commit}, {username, password}) {
        commit('loginRequest');
        try {
            const token = await UserService.login(username, password);
            commit('loginSuccess', token);

            // Redirect the user to the page he first tried to visit or to the home view
            router.push(router.history.current.query.redirect || '/');
            return true
        } catch (e) {
            if (e instanceof AuthenticationError) {
                commit('loginError', {errorCode: e.errorCode, errorMessage: e.message})
            }
            return false
        }
    },

    logout({commit}) {
        UserService.logout();
        commit('logoutSuccess');
        router.push('/login')
    },

    async register({commit}, {firstname, lastname, username, password}) {
        commit('registerRequest');
        try {
            const registeredUser = await UserService.register(firstname, lastname, username, password);
            commit('registerSuccess');
            actions.login({commit}, {
                username: username,
                password: password
            });
        } catch (e) {
            if (e instanceof AuthenticationError) {
                commit('loginError', {errorCode: e.errorCode, errorMessage: e.message})
            }
            return false
        }
    }
};

const mutations = {
    loginRequest(state) {
        state.authenticating = true;
        state.authenticationError = '';
        state.authenticationErrorCode = 0
    },

    loginSuccess(state, accessToken) {
        state.accessToken = accessToken;
        state.authenticationSuccess = true;
        state.authenticating = false;
    },

    loginError(state, {errorCode, errorMessage}) {
        state.authenticating = false;
        state.authenticationErrorCode = errorCode;
        state.authenticationError = errorMessage
    },

    logoutSuccess(state) {
        state.accessToken = ''
    },

    registerRequest(state) {
        state.registering = true;
    },

    registerSuccess(state) {
        state.registerationSuccess = true;
        state.registering = false;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
