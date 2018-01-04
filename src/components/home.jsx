import '../styles/index.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCount, decreCount } from "../redux/actions/counterActions";

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAddClick: num => {
        dispatch(addCount(num))
      },
      onDecClick: num => {
        dispatch(decreCount(num))
      },
    }
}

class Home extends Component {
    constructor(props){
        super(props);
    }

    addHandlers (){
        this.props.onAddClick(2);
    }
    decreHandlers (){
        this.props.onDecClick(1);
    }
    render (){
        return (
            <div className="home">
                <h2>Home Page</h2>
                <p>Hello, react.</p>
                <button onClick={this.addHandlers.bind(this)}>+</button>&nbsp;<button onClick={this.decreHandlers.bind(this)}>-</button>
            </div>
        )
    }
}

Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default Home;