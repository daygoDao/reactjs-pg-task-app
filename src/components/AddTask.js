import React, { useState } from "react";

const AddTask = () => {
  const { taskName, setTaskName } = useState;

  return (
    <form>
      <label htmlFor="taskInput">Enter Task</label>
      <input type="text" id="taskInput" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
