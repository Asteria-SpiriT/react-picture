import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux';

import Routes from './router';
import counter from './redux/reducers/counterReducers';
import todoApp from "./redux/reducers/visiblityReducers";

const visiblityCom = combineReducers({
    count: counter,
    todoList: todoApp
});
let store = createStore(visiblityCom);

// 监控state变化输出state的值
store.subscribe( () => console.log(store.getState()));
console.log(store.getState());

ReactDom.render(
    <Provider store={store}>
        <Routes title="Project"/>
    </Provider>, 
    document.getElementById('app')
);