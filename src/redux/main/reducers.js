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

import _ from 'lodash'

const INIT_STATE = {
    loading: false,
    enterprise: [],
    selected_enterprise: [],
    manager:[],
    selected_manager: [],
    audit:[],
    selected_audit: [],
    advertisement: null, 
};

const Main = (state = INIT_STATE, action) => {
    switch (action.type) {
        ////////////////////////////////////////////////////////////
        //////               ENTERPRISE INTO               /////////
        ////////////////////////////////////////////////////////////
        case GET_ENTERPRISE:
            return { ...state, selected_enterprise:[], loading:true };
        case GET_ENTERPRISE_SUCCESS:
            return { ...state, enterprise: action.payload, loading: false, error: null };
        case GET_ENTERPRISE_FAILED:
            return { ...state, error: action.payload, loading: false };
        case SELECT_ENTERPRISE:
            var list = []
            _.extend(list, state.selected_enterprise)
            if (action.payload.selected) {
                list.push(action.payload.enterprise)
            } 
            else {
                list = list.filter(enterprise => {return enterprise.id !== action.payload.enterprise.id})
            }
            return {...state, selected_enterprise: list};
        case SELECTALL_ENTERPRISE:
            var list = []
            if (action.payload) {
                _.extend(list, state.enterprise)
            }
            return{...state, selected_enterprise: list}
        case ACTIVE_ENTERPRISE:
        case PASSIVE_ENTERPRISE:
            return { ...state, loading:true, };
        case ACTIVE_ENTERPRISE_SUCCESS:
            var enterprise=[]
            _.extend(enterprise, action.payload)
            return {...state, enterprise, loading:false, error:null}
        case PASSIVE_ENTERPRISE_SUCCESS:
            var enterprise=[]
            _.extend(enterprise, action.payload)
            return {...state, enterprise, loading:false, error:null}
        case ACTIVE_ENTERPRISE_FAILED:
        case PASSIVE_ENTERPRISE_FAILED:
            return {...state, loading:false, error:action.payload}
        case ADD_ENTERPRISE:
            return { ...state, loading: true };
        case ADD_ENTERPRISE_SUCCESS:
            return { ...state, enterprise: action.payload, loading: false, error: null };
        case ADD_ENTERPRISE_FAILED:
            return { ...state, error: action.payload, loading: false };
        case UPDATE_ENTERPRISE:
            return { ...state, loading: true };
        case UPDATE_ENTERPRISE_SUCCESS:
            return { ...state, enterprise: action.payload, loading: false, error: null };
        case UPDATE_ENTERPRISE_FAILED:
            return { ...state, error: action.payload, loading: false };
        case DELETE_ENTERPRISE:
            return { ...state, loading: true };
        case DELETE_ENTERPRISE_SUCCESS:
            return { ...state, enterprise:action.payload, selected_enterprise:[], loading: false, error: null };
        case DELETE_ENTERPRISE_FAILED:
            return { ...state, error: action.payload, loading: false };
        ////////////////////////////////////////////////////////////
        //////                 MANAGER INFO                /////////
        ////////////////////////////////////////////////////////////
        case ADD_MANAGER:
            return { ...state, loading:true};
        case ADD_MANAGER_SUCCESS:
            return { ...state, manager: action.payload,error: null ,loading:false};
        case ADD_MANAGER_FAILED:
            return { ...state, error: action.payload, loading:false };
        case GET_MANAGER:
            return {...state, selected_manager:[], advertisement: null, loading:true}            
        case GET_MANAGER_SUCCESS:
            return { ...state, manager: action.payload, error: null ,loading:false}; 
        case GET_MANAGER_FAILED:
            return { ...state, error: action.payload ,loading:false};
        case UPDATE_MANAGER:
            return { ...state, loading: true };
        case UPDATE_MANAGER_SUCCESS:
            return { ...state, manager: action.payload, loading: false, error: null };
        case UPDATE_MANAGER_FAILED:
            return { ...state, error: action.payload, loading: false };
        case DELETE_MANAGER:
            return { ...state, loading: true };
        case DELETE_MANAGER_SUCCESS:
            return { ...state, manager:action.payload, selected_manager: [], loading: false, error: null };
        case DELETE_MANAGER_FAILED:
            return { ...state, error: action.payload, loading: false };
        case SELECT_MANAGER:
            var list = []
            _.extend(list, state.selected_manager)
            if (action.payload.selected) {
                list.push(action.payload.manager)
            } 
            else {
                list = list.filter(manager => {return manager.id !== action.payload.manager.id})
            }
            return {...state, selected_manager: list};
        case SELECTALL_MANAGER:
            var list = []
            if (action.payload) {
                _.extend(list, state.manager)
            }
            return{...state, selected_manager: list}  
        case GET_ADEVERTISEMENT:
            return { ...state, advertisement:null, loading:true };
        case GET_ADEVERTISEMENT_SUCCESS:
            return { ...state, advertisement: action.payload, loading: false, error: null };    
            
        ////////////////////////////////////////////////////////////
        //////               AUDIT INTO               /////////
        ////////////////////////////////////////////////////////////
        case GET_AUDIT:
            return { ...state, selected_audit:[], loading:true };
        case GET_AUDIT_SUCCESS:
            return { ...state, audit: action.payload, loading: false, error: null };
        case GET_AUDIT_FAILED:
            return { ...state, error: action.payload, loading: false };
        case SELECT_AUDIT:
            var list = []
            _.extend(list, state.selected_audit)
            if (action.payload.selected) {
                list.push(action.payload.audit)
            } 
            else {
                list = list.filter(audit => {return audit.id !== action.payload.audit.id})
            }
            return {...state, selected_audit: list};
        case SELECTALL_AUDIT:
            var list = []
            if (action.payload) {
                _.extend(list, state.audit)
            }
            return{...state, selected_audit: list}
        case ACTIVE_AUDIT:
        case PASSIVE_AUDIT:
            return { ...state, loading:true, };
        case ACTIVE_AUDIT_SUCCESS:
            var audit=[]
            _.extend(audit, action.payload)
            return {...state, audit, loading:false, error:null}
        case PASSIVE_AUDIT_SUCCESS:
            var audit=[]
            _.extend(audit, action.payload)
            return {...state, audit, loading:false, error:null}
        case ACTIVE_AUDIT_FAILED:
        case PASSIVE_AUDIT_FAILED:
            return {...state, loading:false, error:action.payload}
        // case ADD_AUDIT:
        //     return { ...state, loading: true };
        // case ADD_AUDIT_SUCCESS:
        //     return { ...state, audit: action.payload, loading: false, error: null };
        // case ADD_AUDIT_FAILED:
        //     return { ...state, error: action.payload, loading: false };
        // case UPDATE_AUDIT:
        //     return { ...state, loading: true };
        // case UPDATE_AUDIT_SUCCESS:
        //     return { ...state, audit: action.payload, loading: false, error: null };
        // case UPDATE_AUDIT_FAILED:
        //     return { ...state, error: action.payload, loading: false };
        default:
            return { ...state };
    }
};

export default Main;
