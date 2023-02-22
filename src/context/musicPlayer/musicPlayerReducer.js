import {
    SET_SIDEBAR,
    CLEAR_SIDEBAR_DETAILS,
    SHOW_SIDEBAR,
    SET_SIDEBAR_TYPE
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_SIDEBAR:
            return {
                ...state,
                details: action.payload,
                show_sideBar: true
            }
        case SHOW_SIDEBAR:
            return {
                ...state,
                show_sideBar: true
            }
        case CLEAR_SIDEBAR_DETAILS:
            return {
                ...state,
                details: null,
                sideBar_type: null,
                show_sideBar: false
            }

        case SET_SIDEBAR_TYPE:
            return {
                ...state,
                sideBar_type: action.payload,
                show_sideBar: true
            }
        default:
            return state;
    }
}