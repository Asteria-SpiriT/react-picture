import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';

import Routes from './router';
// import Routes from "./visibleRoute";
import counter from './redux/reducers';
import { addCount, decreCount } from "./redux/actions";

let store = createStore(counter);

// 监控state变化输出state的值
store.subscribe( () => console.log(store.getState()));

ReactDom.render(
    <Provider store={store}>
        <Routes title="Project"/>
    </Provider>, 
    document.getElementById('app')
);