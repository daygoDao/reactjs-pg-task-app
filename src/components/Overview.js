import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  handleClick = () => {
    const input = document.querySelector(".user-input");
    console.log(input.value);
    const updatedTask = [...this.state.tasks, input.value];
    console.log(updatedTask);
    this.setState({ tasks: updatedTask });
  };

  render() {
    return (
      <section>
        <input type="text" className="user-input"></input>
        <button className="addTaskButt" onClick={this.handleClick}>
          add task
        </button>
        <ul className="tasks"></ul>
      </section>
    );
  }
}

export default Task;
