import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      skills: "experienced",
      img: "./assest/html.png",
      title: "Html",
      desc: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages. ",
    },
    {
      id: "2",
      skills: "experienced",
      img: "./assest/css.png",
      title: "Css",
      desc: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    },
    {
      id: "3",
      skills: "experienced",
      img: "./assest/js.png",
      title: "Javascript",
      desc: "an object-oriented computer programming language commonly used to create interactive effects within web browsers.",
    },
    {
      id: "4",
      skills: "experienced",
      img: "./assest/nodeJs.png",
      title: "node.js",
      desc: " Node. js (Node) is an open source development platform for executing JavaScript code server-side. ",
    },
    {
      id: "5",
      skills: "experienced",
      img: "./assest/react.png",
      title: "React",
      desc: "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.  ",
    },
    {
      id: "6",
      skills: "experienced",
      img: "./assest/mysql.png",
      title: "Mysql",
      desc: "MySQL is an open-source relational database management system (RDBMS). ",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <>
      <div className="works" id="works">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>{d.skills}</span>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="assest/arrow.png"
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src="assest/arrow.png"
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    </>
  );
}
