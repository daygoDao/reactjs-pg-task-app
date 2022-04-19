import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>;
      })}
    </ul>
  );
};

// class Task extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { tasks: [] };
//   }

//   handleClick = () => {
//     const input = document.querySelector(".user-input");
//     console.log(input.value);
//     const updatedTask = [...this.state.tasks, input.value];
//     console.log(updatedTask);
//     this.setState({ tasks: updatedTask });
//     this.appendTask();
//   };

//   appendTask = () => {
//     for (let i = 0; i < this.state.tasks.length; i++) {
//       <li>{this.state.tasks[i]}</li>;
//     }
//   };

//   render() {
//     return (
//       <section>
//         <input type="text" className="user-input"></input>
//         <button className="addTaskButt" onClick={this.handleClick}>
//           add task
//         </button>
//         <ul className="tasks">
//         </ul>
//       </section>
//     );
//   }
// }

export default Overview;
