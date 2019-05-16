import { CHANGE_ACTIVE_ITEM, LOG_IN, FETCH_USER_TABLE, FETCH_TASK_TABLE } from '../actions/types';

const initialState = {
    activeItem: '',
    logged: false,
    userTable: [],
    taskTable: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_ACTIVE_ITEM:
			return {
				...state,
				activeItem: action.payload
            };
        case LOG_IN:
            return {
                ...state,
                logged: true
            };
        case FETCH_USER_TABLE:
            return {
                ...state,
                userTable: action.payload
            };
        case FETCH_TASK_TABLE:
            return {
                ...state,
                taskTable: action.payload
            };
        default: 
            return state;
    }
}