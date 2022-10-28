import React, { useReducer } from 'react';
import LayoutContext from './layoutContext';
import layoutReducer from './layoutReducer';
import { 
    SET_SIDEBAR,
    SHOW_SIDEBAR,
    CLEAR_SIDEBAR_DETAILS,
    SET_SIDEBAR_TYPE
 } from '../types'

const LayoutState = (props) => {

    const initialState = {
        details: null,
        show_sideBar: false,
        sideBar_type: 'transactionDetails',
    }

    const [state, dispatch] = useReducer(layoutReducer, initialState);


    
    //set sidebar details
    const setSideBarDetails = (details) => {

        dispatch({
            type: SET_SIDEBAR,
            payload: details
        })
    }

    //set sidebar type
    const setSideBarType = (type) => {
            clearSideBarDetails()
            dispatch({
                type: SET_SIDEBAR_TYPE,
                payload: type
            })
        }

    //clear sidebar details
    const clearSideBarDetails = () => {

        dispatch({
            type: CLEAR_SIDEBAR_DETAILS,
        })
    }

    //show sidebar
    const setShowSideBar = () => {

        dispatch({
            type: SHOW_SIDEBAR,
        })
    }
    

    return (
        <LayoutContext.Provider value={{
            details: state.details,
            show_sideBar: state.show_sideBar,
            sideBar_type: state.sideBar_type,
            setShowSideBar,
            clearSideBarDetails,
            setSideBarDetails,
            setSideBarType
        }}>
           {props.children}
        </LayoutContext.Provider>
    )
}

export default LayoutState;
