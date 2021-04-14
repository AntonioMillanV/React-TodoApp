import React from "react";
import PropTypes from 'prop-types';
import Form from './Form';
import '../css/Header.css';

const Header = (props) => {
  const completed = props.todos.filter(todo => todo.done === true)
  const incompleted = props.todos.filter(todo => todo.done !== true)

  return(
    <div className="card-header">
      <div className="header">
        <h1>Tienes <span className="span-header">{props.todos.length}</span> {(props.todos.length)> 2 ? 'Tareas': 'Tarea'}</h1>
        <p className="task">Completadas:  <span className="span-header">{completed.length}</span></p>
        <p className="task">Restantes: <span className="span-header">{incompleted.length}</span></p>
        <p className="progress-tag">Progreso:</p>
        <progress 
          value={completed.length}
          max={props.todos.length}
        ></progress>
      </div>
      <Form updateTodo={props.updateTodo} />
    </div>
  );
}

Header.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  ),
  
  updateTodo: PropTypes.func.isRequired
};

export default Header;