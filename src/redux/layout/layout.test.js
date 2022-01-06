import { expectSaga } from 'redux-saga-test-plan';

import * as layoutConstants from '../../constants/layout';
import * as actions from './actions';
import layoutReducer from './reducers';

import {
    watchChangeLayoutType,
    watchChangeLayoutWidth,
    watchChangeLeftSidebarTheme,
    watchChangeLeftSidebarType,
    watchShowRightSidebar,
    watchHideRightSidebar,
} from './saga';

const INIT_STATE = {
    layoutType: layoutConstants.LAYOUT_VERTICAL,
    layoutWidth: layoutConstants.LAYOUT_WIDTH_FLUID,
    leftSideBarTheme: layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT,
    leftSideBarType: layoutConstants.LEFT_SIDEBAR_TYPE_FIXED,
    showRightSidebar: false,
};

describe('change layout type flow', () => {
    it('vertical', () => {
        return expectSaga(watchChangeLayoutType)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayout(layoutConstants.LAYOUT_VERTICAL))
            .hasFinalState({ ...INIT_STATE, layoutType: layoutConstants.LAYOUT_VERTICAL })
            .silentRun();
    });

    it('horizontal', () => {
        return expectSaga(watchChangeLayoutType)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayout(layoutConstants.LAYOUT_HORIZONTAL))
            .hasFinalState({ ...INIT_STATE, layoutType: layoutConstants.LAYOUT_HORIZONTAL })
            .silentRun();
    });

    it('detached', () => {
        return expectSaga(watchChangeLayoutType)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayout(layoutConstants.LAYOUT_DETACHED))
            .hasFinalState({
                ...INIT_STATE,
                layoutType: layoutConstants.LAYOUT_DETACHED,
                leftSideBarType: layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE,
            })
            .silentRun();
    });
});

describe('change layout width flow', () => {
    it('fluid', () => {
        return expectSaga(watchChangeLayoutWidth)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayoutWidth(layoutConstants.LAYOUT_WIDTH_FLUID))
            .hasFinalState({ ...INIT_STATE, layoutWidth: layoutConstants.LAYOUT_WIDTH_FLUID })
            .silentRun();
    });

    it('boxed', () => {
        return expectSaga(watchChangeLayoutWidth)
            .withReducer(layoutReducer)
            .dispatch(actions.changeLayoutWidth(layoutConstants.LAYOUT_WIDTH_BOXED))
            .hasFinalState({ ...INIT_STATE, layoutWidth: layoutConstants.LAYOUT_WIDTH_BOXED })
            .silentRun();
    });
});

describe('change left sidebar theme flow', () => {
    it('light', () => {
        return expectSaga(watchChangeLeftSidebarTheme)
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_LIGHT))
            .hasFinalState({ ...INIT_STATE, leftSideBarTheme: layoutConstants.LEFT_SIDEBAR_THEME_LIGHT })
            .silentRun();
    });

    it('dark', () => {
        return expectSaga(watchChangeLeftSidebarTheme)
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DARK))
            .hasFinalState({ ...INIT_STATE, leftSideBarTheme: layoutConstants.LEFT_SIDEBAR_THEME_DARK })
            .silentRun();
    });

    it('default', () => {
        return expectSaga(watchChangeLeftSidebarTheme)
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT))
            .hasFinalState({ ...INIT_STATE, leftSideBarTheme: layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT })
            .silentRun();
    });
});

describe('change left sidebar type flow', () => {
    it('condensed', () => {
        return expectSaga(watchChangeLeftSidebarType)
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED))
            .hasFinalState({ ...INIT_STATE, leftSideBarType: layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED })
            .silentRun();
    });

    it('scrollable', () => {
        return expectSaga(watchChangeLeftSidebarType)
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE))
            .hasFinalState({ ...INIT_STATE, leftSideBarType: layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE })
            .silentRun();
    });

    it('fixed', () => {
        return expectSaga(watchChangeLeftSidebarType)
            .withReducer(layoutReducer)
            .dispatch(actions.changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED))
            .hasFinalState({ ...INIT_STATE, leftSideBarType: layoutConstants.LEFT_SIDEBAR_TYPE_FIXED })
            .silentRun();
    });
});

describe('right sidebar flow', () => {
    it('hide', () => {
        return expectSaga(watchHideRightSidebar)
            .withReducer(layoutReducer)
            .dispatch(actions.hideRightSidebar())
            .hasFinalState({ ...INIT_STATE, showRightSidebar: false })
            .silentRun();
    });

    it('show', () => {
        return expectSaga(watchShowRightSidebar)
            .withReducer(layoutReducer)
            .dispatch(actions.showRightSidebar())
            .hasFinalState({ ...INIT_STATE, showRightSidebar: true })
            .silentRun();
    });
});
