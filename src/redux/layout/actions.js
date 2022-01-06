// @flow
import {
    CHANGE_LAYOUT,
    CHANGE_LAYOUT_WIDTH,
    CHANGE_SIDEBAR_THEME,
    CHANGE_SIDEBAR_TYPE,
    TOGGLE_RIGHT_SIDEBAR,
    SHOW_RIGHT_SIDEBAR,
    HIDE_RIGHT_SIDEBAR,
} from './constants';

type LayoutAction = { type: string, payload?: string | null };

export const changeLayout = (layout: string): LayoutAction => ({
    type: CHANGE_LAYOUT,
    payload: layout,
});

export const changeLayoutWidth = (width: string): LayoutAction => ({
    type: CHANGE_LAYOUT_WIDTH,
    payload: width,
});

export const changeSidebarTheme = (theme: string): LayoutAction => ({
    type: CHANGE_SIDEBAR_THEME,
    payload: theme,
});

export const changeSidebarType = (sidebarType: string): LayoutAction => ({
    type: CHANGE_SIDEBAR_TYPE,
    payload: sidebarType,
});

export const toggleRightSidebar = (): LayoutAction => ({
    type: TOGGLE_RIGHT_SIDEBAR,
    payload: null,
});

export const showRightSidebar = (): LayoutAction => ({
    type: SHOW_RIGHT_SIDEBAR,
    payload: null,
});

export const hideRightSidebar = (): LayoutAction => ({
    type: HIDE_RIGHT_SIDEBAR,
    payload: null,
});
