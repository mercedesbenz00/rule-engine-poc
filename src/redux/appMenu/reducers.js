import {
    INIT_MENU,
    INIT_MENU_SUCCESS,
    CHANGE_ACTIVE_MENU_FROM_LOCATION,
    CHANGE_ACTIVE_MENU_FROM_LOCATION_SUCCESS,
} from './constants';

type Action = { type: string, payload: {} };
type State = { +value: boolean };

const AppMenu = (state: State = {}, action: Action) => {
    switch (action.type) {
        case INIT_MENU:
            return action.payload;
        case INIT_MENU_SUCCESS:
            return { ...state, ...action.payload };
        case CHANGE_ACTIVE_MENU_FROM_LOCATION:
            return { ...state };
        case CHANGE_ACTIVE_MENU_FROM_LOCATION_SUCCESS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default AppMenu;
