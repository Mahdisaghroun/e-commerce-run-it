import { LOADING, RELOADING } from './Actions';
//import axios from 'axios';
export const loadingAction = (Data) => {
    return {
        type: LOADING,
        payload: Data
    }

};
export const Connecting = (data) => {
    //localStorage.setItem('Connected', true);
    return {
        type: LOADING,
        payload: data
    }

};
export const reloadingAction = (Data) => {
    return {
        type: RELOADING,
        payload: Data
    }

}
export const checkConnected = (data) => {

    return (dispatch) => {


        dispatch(Connecting(data))





    }

}

