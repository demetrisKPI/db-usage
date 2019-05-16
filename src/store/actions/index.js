import { SET_TASK, CHANGE_ACTIVE_ITEM, LOG_IN, FETCH_USER_TABLE, FETCH_TASK_TABLE, ADD_USER, DELETE_USER, ADD_TASK, SET_TASK_STATE } from './types';
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

export const fetchTaskTable = () => dispatch => {
    axios
        .get(`/get-tasks`)
        .then(res => dispatch({
            type: FETCH_TASK_TABLE,
            payload: res.data
        })
        )
};

export const addUser = obj => dispatch => {
    axios
        .post(`/add-user`, obj)
        .then(res => dispatch({
            type: ADD_USER,
            payload: res
        })
        )
};

export const deleteUser = userid => dispatch => {
    axios
        .delete(`/delete-user`, userid)
        .then(res => dispatch({
            type: DELETE_USER,
            payload: res
        })
        )
};

export const setTask = obj => dispatch => {
    axios
        .post(`/set-user-task`, obj)
        .then(res => dispatch({
            type: SET_TASK,
            payload: res
        })
        )
};

export const setTaskState = obj => dispatch => {
    axios
        .post(`/set-state`, obj)
        .then(res => dispatch({
            type: SET_TASK_STATE,
            payload: res
        })
        )
};

export const addTask = obj => dispatch => {
    axios
        .post(`/add-task`, obj)
        .then(res => dispatch({
            type: ADD_TASK,
            payload: res
        })
        )
};