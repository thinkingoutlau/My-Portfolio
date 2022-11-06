import React from "react";

const Profile = () => {
  return (
    <div className="profile">
      <h1 className="name">WINNIE LAU</h1>
      <div>
        <img className="picture" src="/Winnie_Lau.png" />
      </div>

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

export default Profile;
