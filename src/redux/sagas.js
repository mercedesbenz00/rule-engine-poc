// @flow
import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';
import layoutSaga from './layout/saga';
import appMenuSaga from './appMenu/saga';
import mainSaga from './main/saga';

export default function* rootSaga(getState: any): any {
    yield all([authSaga(), layoutSaga(), appMenuSaga(), mainSaga()]);
}
