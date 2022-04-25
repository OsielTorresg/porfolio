import "./intro.scss";
// import { init } from "ityped";
// import { useEffect, useRef } from "react";

export default function Intro() {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     strings: ["web", "Developor"],
  //   });
  // }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assest/osiel.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello world!, Im</h2>
          <h1>Osiel Torres </h1>
          <h3>
            Junior<span> Engineer</span>
          </h3>
          {/* ref={textRef} ///goes in span  */}
        </div>
        <a href="#About">
          <img src="assest/down.png" alt=""></img>
        </a>
      </div>
    </div>
  );
}
