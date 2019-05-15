import { CHANGE_ACTIVE_ITEM, LOG_IN, FETCH_USER_TABLE } from './types';
import axios from 'axios';

export const changeActiveItem = obj => dispatch => {
	dispatch({ type: CHANGE_ACTIVE_ITEM, payload: obj });
};

export const logIn = () => dispatch => {
	dispatch({ type: LOG_IN, payload: null });
};

export const fetchUserTable = () => dispatch => {
    axios
        .get(`/get-users`)
        .then(res => dispatch({ 
            type: FETCH_USER_TABLE, 
            payload: res.data 
        })
    )
};