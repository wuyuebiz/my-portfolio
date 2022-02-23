import { handleActions } from 'redux-actions'

const defaultState = {
    authorized: false,
    load: false,
    email: null,
    token: null,
    refreshToken: null,
    error: null,
    userRole: null,
    userId: null,
    displayName: '',
    users: [],
    confirmEmailToken: '',
}

export default handleActions({
    INIT_LOGIN: state => ({
        ...state,
        loading: false,
        error: null,
    }),

    AUTH_REQUEST: state => ({
        ...state,
        loading: true,
        error: null,

    }),

}, defaultState)
