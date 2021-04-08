import React from "react";
import "../css/Todo.css";

class Todo extends React.Component {
  state ={
    done: false
  }

  handleClick = () => {
    this.setState({
      done: !this.state.done
    })
    console.log('si jala xD, valor de done: ' + String(this.state.done));
  }
  render() {
    return(
    <div className="list-item">
      <input type="checkbox"
          className="ok"
          defaultChecked={this.state.done}
          onChange={this.handleClick}
      />
      <p className={`${this.state.done ? 'done' : ''}`}>{this.props.title}</p>
      <div className="buttons">
        <button className="delete">
          {'\u292b'}
        </button>
      </div>
    </div>
    );
  }
}

export default Todo;