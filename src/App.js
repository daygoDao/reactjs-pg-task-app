import React, { Component } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import uniqid from "uniqid";

const App = () => {
  return (
    <div>
      <Header />
      <AddTask />
    </div>
  );
};

export default App;
