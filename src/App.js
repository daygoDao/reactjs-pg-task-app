import React, { Component } from "react";
import Header from "./components/Header";
import uniqid from "uniqid";

const App = () => {
  return (
    <div>
      <form>
        <label htmlFor="taskInput">Enter Task</label>
        <input type="text" id="taskInput" />
        <button type="submit">Add Task</button>
      </form>
      <Header />
    </div>
  );
};

export default App;
