import React,{Compoent} from 'react';
import ReactDom from 'react-dom';
import Home from './components/home';

ReactDom.render( 
    <Home title="Project"/>, 
    document.getElementById('app')
);