import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, HashRouter, Route, Link, Switch } from 'react-router-dom';

import { addCount, decreCount } from "./redux/actions";

import Home from './components/home';
import About from './components/about';
import Detail from './components/detail';

const mapStateToProps = state => {
    return {
        state
    }
}

class Routes extends Component {
    constructor (props){
        super(props);
        this.state = {
            name: 'World'
        };
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
                <p>Hello, {this.state.name}!!</p>
                <span>{this.props.state}</span>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/detail">Detail</Link></li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/detail" component={Detail}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default connect(
    mapStateToProps
)(Routes);