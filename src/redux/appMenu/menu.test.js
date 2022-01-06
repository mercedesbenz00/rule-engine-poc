import { expectSaga } from 'redux-saga-test-plan';

import { INIT_MENU, INIT_MENU_SUCCESS } from './constants';
import * as actions from './actions';
import appmenuReducer from './reducers';
import watchMenuInit from './saga';
import { authProtectedRoutes as routes } from '../../routes';
import assignIds from './utils';

describe('appMenu actions', () => {
    it('should init menu', () => {
        const expectedAction = {
            type: INIT_MENU,
            payload: {},
        };
        expect(actions.initMenu()).toEqual(expectedAction);
    });
});

describe('appMenu reducer', () => {
    it('should return the initial state', () => {
        expect(appmenuReducer(undefined, {})).toEqual({});
    });

    it('should handle INIT_MENU', () => {
        expect(
            appmenuReducer(
                {},
                {
                    type: INIT_MENU,
                    payload: {},
                }
            )
        ).toEqual({});
    });

    const menuItems = [];
    it('should handle INIT_MENU_SUCCESS', () => {
        expect(
            appmenuReducer(
                {},
                {
                    type: INIT_MENU_SUCCESS,
                    payload: { menuItems },
                }
            )
        ).toEqual({ menuItems });
    });
});

describe('init menu flow', () => {
    const menuItems = assignIds(routes);
    it('menu', () => {
        return expectSaga(watchMenuInit)
            .withReducer(appmenuReducer)
            .dispatch(actions.initMenu())
            .hasFinalState({ menuItems })
            .silentRun();
    });
});
