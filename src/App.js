import React from "react";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="app">
      <Projects />
      <Profile />
    </div>
  );
};

export default App;
