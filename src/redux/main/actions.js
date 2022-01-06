import {
    GET_ENTERPRISE, GET_ENTERPRISE_SUCCESS, GET_ENTERPRISE_FAILED,    
    ADD_ENTERPRISE, ADD_ENTERPRISE_SUCCESS, ADD_ENTERPRISE_FAILED,
    UPDATE_ENTERPRISE, UPDATE_ENTERPRISE_SUCCESS, UPDATE_ENTERPRISE_FAILED,
    DELETE_ENTERPRISE, DELETE_ENTERPRISE_SUCCESS, DELETE_ENTERPRISE_FAILED,
    SELECT_ENTERPRISE, SELECTALL_ENTERPRISE,
    PASSIVE_ENTERPRISE, PASSIVE_ENTERPRISE_SUCCESS, PASSIVE_ENTERPRISE_FAILED,
    ACTIVE_ENTERPRISE, ACTIVE_ENTERPRISE_SUCCESS, ACTIVE_ENTERPRISE_FAILED,

    ADD_MANAGER, ADD_MANAGER_SUCCESS, ADD_MANAGER_FAILED,
    GET_MANAGER, GET_MANAGER_SUCCESS, GET_MANAGER_FAILED,
    UPDATE_MANAGER, UPDATE_MANAGER_SUCCESS, UPDATE_MANAGER_FAILED,    
    DELETE_MANAGER, DELETE_MANAGER_SUCCESS, DELETE_MANAGER_FAILED,
    SELECT_MANAGER, SELECTALL_MANAGER, GET_ADEVERTISEMENT, GET_ADEVERTISEMENT_SUCCESS,
    
    GET_AUDIT, GET_AUDIT_SUCCESS, GET_AUDIT_FAILED, SELECT_AUDIT, SELECTALL_AUDIT,
    ACTIVE_AUDIT,  ACTIVE_AUDIT_SUCCESS, ACTIVE_AUDIT_FAILED, PASSIVE_AUDIT,
    PASSIVE_AUDIT_SUCCESS, PASSIVE_AUDIT_FAILED,
} from './constants';

////////////////////////////////////////////////////////////
//////                ENTERPRISE                   /////////
////////////////////////////////////////////////////////////
export const getEnterprise = (name) => ({
    type: GET_ENTERPRISE,
    payload: { name },
});

export const getEnterpriseSuccess = (data) => ({
    type: GET_ENTERPRISE_SUCCESS,
    payload: data,
});

export const getEnterpriseFailed = (error) => ({
    type: GET_ENTERPRISE_FAILED,
    payload: error,
});

export const selectEnterprise = (enterprise, selected) => ({
    type: SELECT_ENTERPRISE,
    payload: {enterprise, selected}
})

export const selectAllEnterprise = (selected) => ({
    type: SELECTALL_ENTERPRISE,
    payload: selected
})

export const activeEnterprise = (enterprise, active) => ({
    type: ACTIVE_ENTERPRISE,
    payload: {enterprise, active}
})

export const activeEnterpriseSuccess = (data) => ({
    type: ACTIVE_ENTERPRISE_SUCCESS,
    payload: data
})

export const activeEnterpriseFailed = (error) => ({
    type: ACTIVE_ENTERPRISE_FAILED,
    payload: error
})

export const passiveEnterprise = (enterprise, passive) => ({
    type: PASSIVE_ENTERPRISE,
    payload: {enterprise, passive}
})

export const passiveEnterpriseSuccess = (data) => ({
    type: PASSIVE_ENTERPRISE_SUCCESS,
    payload: data
})

export const passiveEnterpriseFailed = (error) => ({
    type: PASSIVE_ENTERPRISE_FAILED,
    payload: error
})

export const addEnterprise = (enterprise) => ({
    type: ADD_ENTERPRISE,
    payload: { enterprise },
});

export const addEnterpriseSuccess = (data) => ({
    type: ADD_ENTERPRISE_SUCCESS,
    payload: data,
});

export const addEnterpriseFailed = (error) => ({
    type: ADD_ENTERPRISE_FAILED,
    payload: error,
});

export const updateEnterprise = (enterprise) => ({
    type: UPDATE_ENTERPRISE,
    payload: { enterprise},
});

export const updateEnterpriseSuccess = (data) => ({
    type: UPDATE_ENTERPRISE_SUCCESS,
    payload: data,
});

export const updateEnterpriseFailed = (error) => ({
    type: UPDATE_ENTERPRISE_FAILED,
    payload: error,
});

export const deleteEnterprise = (enterprise) => ({
    type: DELETE_ENTERPRISE,
    payload: { enterprise },
});

export const deleteEnterpriseSuccess = (data) => ({
    type: DELETE_ENTERPRISE_SUCCESS,
    payload: data,
});

export const deleteEnterpriseFailed = (error) => ({
    type: DELETE_ENTERPRISE_FAILED,
    payload: error,
});

////////////////////////////////////////////////////////////
//////                  MANAGER                    /////////
////////////////////////////////////////////////////////////
export const addManager = (manager) => ({    
    type: ADD_MANAGER,
    payload: { manager},
})

export const addManagerSuccess = (manager) => ({
    type: ADD_MANAGER_SUCCESS,
    payload: manager,
});

export const addManagerFailed = (error) => ({
    type: ADD_MANAGER_FAILED,
    payload: error,
});

export const getManager = (name) => ({
    type:GET_MANAGER,
    payload: {name},
})

export const getManagerSuccess = (response) => ({
    type: GET_MANAGER_SUCCESS,
    payload: response,
});

export const getManagerFailed = (error) => ({
    type: GET_MANAGER_FAILED,
    payload: error,
});

export const updateManager = (manager) => ({
    type: UPDATE_MANAGER,
    payload: { manager},
});

export const updateManagerSuccess = (data) => ({
    type: UPDATE_MANAGER_SUCCESS,
    payload: data,
});

export const updateManagerFailed = (error) => ({
    type: UPDATE_MANAGER_FAILED,
    payload: error,
});

export const deleteManager = (manager) => ({
    type: DELETE_MANAGER,
    payload: { manager },
});

export const deleteManagerSuccess = (data) => ({
    type: DELETE_MANAGER_SUCCESS,
    payload: data,
});

export const deleteManagerFailed = (error) => ({
    type: DELETE_MANAGER_FAILED,
    payload: error,
});

export const selectManager = (manager, selected) => ({
    type: SELECT_MANAGER,
    payload: {manager, selected}
})

export const selectAllManager = (selected) => ({
    type: SELECTALL_MANAGER,
    payload: selected
})

export const getAdvertisement = (type) => ({
    type: GET_ADEVERTISEMENT,
    payload: {type}
})

export const getAdvertisementSuccess = (data) => ({
    type: GET_ADEVERTISEMENT_SUCCESS,
    payload: data,
})


////////////////////////////////////////////////////////////
//////                AUDIT                   /////////
////////////////////////////////////////////////////////////
export const getAudit = (name) => ({
    type: GET_AUDIT,
    payload: { name },
});

export const getAuditSuccess = (data) => ({
    type: GET_AUDIT_SUCCESS,
    payload: data,
});

export const getAuditFailed = (error) => ({
    type: GET_AUDIT_FAILED,
    payload: error,
});

export const selectAudit = (audit, selected) => ({
    type: SELECT_AUDIT,
    payload: {audit, selected}
})

export const selectAllAudit = (selected) => ({
    type: SELECTALL_AUDIT,
    payload: selected
})

export const activeAudit = (audit, active) => ({
    type: ACTIVE_AUDIT,
    payload: {audit, active}
})

export const activeAuditSuccess = (data) => ({
    type: ACTIVE_AUDIT_SUCCESS,
    payload: data
})

export const activeAuditFailed = (error) => ({
    type: ACTIVE_AUDIT_FAILED,
    payload: error
})

export const passiveAudit = (audit, passive) => ({
    type: PASSIVE_AUDIT,
    payload: {audit, passive}
})

export const passiveAuditSuccess = (data) => ({
    type: PASSIVE_AUDIT_SUCCESS,
    payload: data
})

export const passiveAuditFailed = (error) => ({
    type: PASSIVE_AUDIT_FAILED,
    payload: error
})
