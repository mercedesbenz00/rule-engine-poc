// @flow
import {
    INIT_MENU,
    INIT_MENU_SUCCESS,
    CHANGE_ACTIVE_MENU_FROM_LOCATION,
    CHANGE_ACTIVE_MENU_FROM_LOCATION_SUCCESS,
} from './constants';

type DefaultMenuAction = { type: string, payload: {} };

export const initMenu = (): DefaultMenuAction => ({
    type: INIT_MENU,
    payload: {},
});

export const initMenuSuccess = (menuItems: Array<{}>): DefaultMenuAction => ({
    type: INIT_MENU_SUCCESS,
    payload: { menuItems },
});

export const changeActiveMenuFromLocation = (): DefaultMenuAction => ({
    type: CHANGE_ACTIVE_MENU_FROM_LOCATION,
    payload: {},
});

export const changeActiveMenuFromLocationSuccess = (activatedMenuItemIds: Array<string>): DefaultMenuAction => ({
    type: CHANGE_ACTIVE_MENU_FROM_LOCATION_SUCCESS,
    payload: { activatedMenuItemIds },
});
