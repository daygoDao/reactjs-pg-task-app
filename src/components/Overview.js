import React from 'react';

   class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = "task";
  }

  render() {
    return <h2>ayo from overview.js</h2>;
  }
}

export default Task;
