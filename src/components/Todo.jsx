import React from "react";
import PropTypes from 'prop-types';
import Checkmark from './Checkmark.jsx';
import "../css/Todo.css";

class Todo extends React.Component {
  render() {
    return(
      <div 
      className="list-item animate__animated animate__bounceInDown"
      >
      <Checkmark 
        done={this.props.todo.done} 
        toggleDone={this.props.toggleDone} 
        index={this.props.index} 
      />
      <p 
        className={`${this.props.todo.done ? 'done' : ''}`}
      >
        {this.props.todo.title}
      </p>
      <div className="buttons">
        <button 
          className="delete" 
          onClick={(e) => this.props.deleteTodo(e, this.props.index)}
        >
          {'\u292b'}
        </button>
      </div>
    </div>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  toggleDone: PropTypes.func.isRequired
}

export default Todo;