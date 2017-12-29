import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';

ReactDom.render( 
    <Router title="Project"/>, 
    document.getElementById('app')
);