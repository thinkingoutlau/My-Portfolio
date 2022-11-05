import React from "react";

const App = () => {
  const handleClick = (e) => {
    e.preventDefault();

    console.log("hello");
  };
  return (
    <div>
      <h1 className="name">WINNIE LAU :)</h1>
      <button onClick={handleClick}>Linkedin</button>
      <button>Github</button>
      <button>Resume</button>
    </div>
  );
};

export default App;
