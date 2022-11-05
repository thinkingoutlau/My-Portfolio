import React from "react";

const App = () => {
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   <a target="_blank" href="https://www.linkedin.com/in/thinkingoutlau/"></a>;

  //   console.log("hello");
  // };
  return (
    <div>
      <h1 className="name">WINNIE LAU :)</h1>
      <a target="_blank" href="https://www.linkedin.com/in/thinkingoutlau/">
        <button>Linkedin</button>
      </a>

      <a target="_blank" href="https://github.com/thinkingoutlau">
        <button>Github</button>
      </a>
      <a target="_blank" href={"WinnieLau_Resume.pdf"}>
        <button>Resume</button>
      </a>
    </div>
  );
};

export default App;
