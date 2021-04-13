import React from "react";
import Todo from './Todo';
import PropTypes from 'prop-types';
import "../css/TodoList.css";

class TodoList extends React.Component {
  render() {
    return (
      <div className="list-wrapper">
        {
          this.props.todos.map((todo,index) => {
            return <Todo todo={todo} toggleDone={this.props.toggleDone} deleteTodo={this.props.deleteTodo} index={index} key={index} />
          })
        }

      </div>
    )
  }
}

TodoList.propTypes = {
  toggleDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  index: PropTypes.number,
  key: PropTypes.number
}

export default TodoList;