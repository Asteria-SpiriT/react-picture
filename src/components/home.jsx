import '../styles/index.scss';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addCount, decreCount } from "../redux/actions";

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
        this.props.onAddClick();
    }
    decreHandlers (){
        this.props.onDecClick();
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

const visibleHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default visibleHome;