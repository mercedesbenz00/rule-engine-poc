// @flow
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { fetchJSON } from '../../helpers/api';

import { 

    GET_ENTERPRISE, ADD_ENTERPRISE, UPDATE_ENTERPRISE, DELETE_ENTERPRISE, ACTIVE_ENTERPRISE, PASSIVE_ENTERPRISE,
    ADD_MANAGER, GET_MANAGER, UPDATE_MANAGER, DELETE_MANAGER, GET_ADEVERTISEMENT,
    GET_AUDIT

 } from './constants';

import {

    getEnterpriseSuccess, getEnterpriseFailed,
    addEnterpriseSuccess, addEnterpriseFailed, 
    updateEnterpriseSuccess, updateEnterpriseFailed,
    deleteEnterpriseSuccess, deleteEnterpriseFailed, 
    activeEnterpriseSuccess, activeEnterpriseFailed, 
    passiveEnterpriseSuccess, passiveEnterpriseFailed,

    addManagerSuccess, addManagerFailed, 
    getManagerSuccess, getManagerFailed, 
    updateManagerSuccess, updateManagerFailed, 
    deleteManagerSuccess, deleteManagerFailed, 
    getAdvertisementSuccess,
    
    getAuditSuccess, getAuditFailed

} from './actions';

////////////////////////////////////////////////////////////
//////               ENTERPRISE INTO               /////////
////////////////////////////////////////////////////////////
// GET ENTERPRISE INFO
function* getEnterprise({ payload: {name} }) {
    const options = {
        body: JSON.stringify({ name }),
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/enterprise', options);
        yield put(getEnterpriseSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(getEnterpriseFailed(message));
    }
}

// ADD ENTERPRISE INFO
function* addEnterprise({ payload: {enterprise} }) {
    const options = {
        body: JSON.stringify({ enterprise }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/enterprise', options);
        yield put(addEnterpriseSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(addEnterpriseFailed(message));
    }
}

// UPDATE ENTERPRISE INFO
function* updateEnterprise({ payload: {enterprise} }) {
    const options = {
        body: JSON.stringify({ enterprise }),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/enterprise', options);
        yield put(updateEnterpriseSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(updateEnterpriseFailed(message));
    }
}

// DELETE ENTERPRISE INFO
function* deleteEnterprise({ payload: {enterprise} }) {
    const options = {
        body: JSON.stringify({ enterprise }),
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/enterprise', options);
        yield put(deleteEnterpriseSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(deleteEnterpriseFailed(message));
    }
}

// ACTIVE ENTERPRISE INFO
function* activeEnterprise({ payload: {enterprise, active} }) {
    const options = {
        body: JSON.stringify({ enterprise, active }),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/enterprise/active', options);
        yield put(activeEnterpriseSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(activeEnterpriseFailed(message));
    }
}

// PASSIVE ENTERPRISE INFO
function* passiveEnterprise({ payload: {enterprise, passive} }) {
    const options = {
        body: JSON.stringify({ enterprise, passive }),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/enterprise/passive', options);
        yield put(passiveEnterpriseSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(passiveEnterpriseFailed(message));
    }
}

////////////////////////////////////////////////////////////
//////                 MANAGER INFO                /////////
////////////////////////////////////////////////////////////
// ADD MANAGER INFO
function* addManager({ payload: {manager } }) {    
    const options = {
        body: JSON.stringify({ manager }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/managers', options);
        yield put(addManagerSuccess(response));        
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(addManagerFailed(message));
    }
}

// GET MANAGER INFO
function* getManager({ payload: {name} }) {
    const options = {
        body: JSON.stringify({ name }),
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/managers', options);        
        yield put(getManagerSuccess(response));        
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(getManagerFailed(message));
    }
}

// UPDATE MANAGER INFO
function* updateManager({ payload: {manager} }) {
    const options = {
        body: JSON.stringify({ manager }),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/managers', options);
        yield put(updateManagerSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(updateManagerFailed(message));
    }
}

// DELETE MANAGER INFO
function* deleteManager({ payload: {manager} }) {
    const options = {
        body: JSON.stringify({ manager }),
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/managers', options);
        yield put(deleteManagerSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(deleteManagerFailed(message));
    }
}

// GET ADVERTISEMENT INFO
function* getAdvertisement({ payload: {type} }) {
    const options = {
        body: JSON.stringify({ type }),
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/advertisement', options);
        yield put(getAdvertisementSuccess(response));        
    } catch (error) {
        ////TODO: error handling
        console.log('error', error)
    }
}

// GET AUDIT INFO
function* getAudit({ payload: {name} }) {
    const options = {
        body: JSON.stringify({ name }),
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    try {
        const response = yield call(fetchJSON, '/main/audit', options);
        yield put(getAuditSuccess(response));
    } catch (error) {
        let message;
        switch (error.status) {
            case 500:
                message = 'Internal Server Error';
                break;
            case 401:
                message = 'Invalid credentials';
                break;
            default:
                message = error;
        }
        yield put(getAuditFailed(message));
    }
}


export function* watchGetEnterpriseInfo() {
    yield takeEvery(GET_ENTERPRISE, getEnterprise);
}

export function* watchAddEnterpriseInfo() {
    yield takeEvery(ADD_ENTERPRISE, addEnterprise);
}

export function* watchUpdateEnterpriseInfo() {
    yield takeEvery(UPDATE_ENTERPRISE, updateEnterprise);
}

export function* watchDeleteEnterpriseInfo() {
    yield takeEvery(DELETE_ENTERPRISE, deleteEnterprise);
}

export function* watchActiveEnterpriseInfo() {
    yield takeEvery(ACTIVE_ENTERPRISE, activeEnterprise);
}

export function* watchPassiveEnterpriseInfo() {
    yield takeEvery(PASSIVE_ENTERPRISE, passiveEnterprise);
}

export function* watchAddManager() {
    yield takeEvery(ADD_MANAGER, addManager);
}

export function* watchGetManager() {
    yield takeEvery(GET_MANAGER, getManager);
}
export function* watchUpdateManager() {
    yield takeEvery(UPDATE_MANAGER, updateManager);
}

export function* watchDeleteManager() {
    yield takeEvery(DELETE_MANAGER, deleteManager);
}

export function* watchGetAdvertisement() {
    yield takeEvery(GET_ADEVERTISEMENT, getAdvertisement);
}

export function* watchGetAuditInfo() {
    yield takeEvery(GET_AUDIT, getAudit);
}

function* mainSaga() {
    yield all([
        fork(watchGetEnterpriseInfo), 
        fork(watchAddEnterpriseInfo), 
        fork(watchUpdateEnterpriseInfo), 
        fork(watchDeleteEnterpriseInfo),
        fork(watchActiveEnterpriseInfo),
        fork(watchPassiveEnterpriseInfo),
        fork(watchAddManager),
        fork(watchGetManager),
        fork(watchUpdateManager),
        fork(watchDeleteManager),
        fork(watchGetAdvertisement),
        fork(watchGetAuditInfo),
    ]);
}

export default mainSaga;
