import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./Intro.scss";

export default function Intro() {
  //const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: false,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["Software", "React"],
  //   });
  // }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="Profile-pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi There, I'm</h2>
          <h1> K Vamsi Verma</h1>
          <h3>
            <span>Software</span> Developer
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
