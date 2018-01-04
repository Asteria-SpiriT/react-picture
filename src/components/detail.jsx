import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

import Todo from './todo';

const mapStateToProps = state => {
    return {
        todoLists: state.todoList.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onAddTodo: text => {
        dispatch(addTodo(text));
      }
    }
}

class Detail extends Component {
    constructor(){
        super();
    }

    addTodoHandlers (){
        const nodeObj = this.refs.input;
        const val = nodeObj.value.trim();
        
        val && this.props.onAddTodo(val);
        nodeObj.value = '';
    }

    render (){
        return (
            <div className="detail">
                <h2>Detail Page</h2>
                <form>
                    <input type="text" ref="input"/>
                    <input type="button" onClick={this.addTodoHandlers.bind(this)} value="Add Todo" />
                </form>
                <ul>
                    {this.props.todoLists.map( (todo, index) => 
                        <Todo todo={todo} key={index} />
                    )}
                </ul>
            </div>
        )
    }
}

export default Detail = connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);