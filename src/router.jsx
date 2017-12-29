import React, { Component } from 'react';
import { BrowerRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Detail from './components/detail';

class Routes extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: 'React'
        }
    }

    componentWillMount (){
        console.log(`willMount`);
    }

    componentDidMount (){
        console.log(`didMount`);
    }

    render (){
        return (
            <div className="content">
                <h3>{this.props.title}</h3>
                <p>Hello, {this.state.name}.</p>
                <Router>
                    <Switch>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/detail">Detail</Link></li>
                        </ul>
                        <Route exact  path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/detail" component={Detail}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes