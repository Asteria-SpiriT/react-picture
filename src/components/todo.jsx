import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleTodo } from "../redux/actions/todoActions";

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onToggleTodo: id => {
          dispatch(toggleTodo(id));
      }
    }
}

class Todo extends Component {
    constructor(props){
        super(props);
    }

    toggleHandlers (id){
        this.props.onToggleTodo(id);
    }

    render (){
        const todo = this.props.todo;
        return (
            <li 
                onClick={this.toggleHandlers.bind(this, todo.id)}
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: todo.completed ? 'default' : 'pointer'
                }}
            >
                {todo.text}
            </li>
        )
    }
}

Todo = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)

export default Todo;