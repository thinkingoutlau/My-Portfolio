import React from "react";
const Profile = () => {
  return (
    <div className="profile">
      <h1 className="name">WINNIE LAU</h1>
      <h3>Software Engineer</h3>
      <i className="username">thinkingoutlau</i>
      <div>
        <img className="picture" src="/Winnie_Lau.png" />
      </div>
      <div className="aboutMe">
        Hi there! I'm Winnie and I'm from NYC :) I am a software engineer 👩🏻‍💻 and
        was a former educator 👩🏻‍🏫. I was a high school mathematics teacher and a
        college lecturer. My passions were always mathematics and education. It
        wasn't until I came upon this new world that I discovered coding will
        become another passion of mine. I recently transitioned into the tech
        world and have been loving every minute of it!
      </div>
      <br />

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
