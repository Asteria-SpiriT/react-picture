import React from 'react';
import ReactDom from 'react-dom';

import Routes from './router';

ReactDom.render(
    <Routes title="Project"/>, 
    document.getElementById('app')
);