import todos from "./todoReducers";
import { combineReducers } from "redux";

const visiblityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.visiblityFilter;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visiblityFilter,
    todos
});

export default todoApp;