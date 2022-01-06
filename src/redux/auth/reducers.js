// @flow
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGOUT_USER,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    FORGET_PASSWORD,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_FAILED,
    LANGUAGE_SET,
    LANGUAGE_SET_SUCCESS,
    LANGUAGE_SET_FAILED,
} from './constants';

import { getLoggedInUser } from '../../helpers/authUtils';

const INIT_STATE = {
    user: getLoggedInUser(),
    loading: false,
};

type AuthAction = { type: string, payload: {} | string };
type State = { user?: {} | null, loading?: boolean, +value?: boolean };

const Auth = (state: State = INIT_STATE, action: AuthAction) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false, error: null };
        case LOGIN_USER_FAILED:
            return { ...state, error: action.payload, loading: false };
        case REGISTER_USER:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false, error: null };
        case REGISTER_USER_FAILED:
            return { ...state, error: action.payload, loading: false };
        case LOGOUT_USER:
            return { ...state, user: null };
        case FORGET_PASSWORD:
            return { ...state, loading: true };
        case FORGET_PASSWORD_SUCCESS:
            return { ...state, passwordResetStatus: action.payload, loading: false, error: null };
        case FORGET_PASSWORD_FAILED:
            return { ...state, error: action.payload, loading: false };
        case LANGUAGE_SET:
            return { ...state, loading: true };
        case LANGUAGE_SET_SUCCESS:
            return { ...state, user:action.payload, loading: false, error: null };
        case LANGUAGE_SET_FAILED:
            return { ...state, error: action.payload, loading: false };
        default:
            return { ...state };
    }
};

export default Auth;
