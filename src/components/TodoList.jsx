import React from "react";
import Todo from './Todo';
import "../css/TodoList.css";

class TodoList extends React.Component {
  state = {
    tasks: [
      {title: 'Tarea 1'},
      {title: 'Tarea 2'},
      {title: 'Tarea 3'},
      {title: 'Tarea 4'},
    ]
  }

  render() {
    return (
      <div className="list-wrapper">
        {
          this.state.tasks.map((task,index) => {
            return <Todo title={task.title} key={index} />
          })
        }

      </div>
    )
  }
}

export default TodoList;