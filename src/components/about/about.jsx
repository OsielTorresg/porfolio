import "./about.css";
// import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a" id="About">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="./assest/osiel2.png" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Hello! my name is Osiel Torres Gonzalez</p>
        <p className="a-desc">
          I'm a young, Organized, and dependable junior software engineer who
          can successfully manage multiple priorities. A team player willing to
          take on added responsibilities to drive team goals forward. I also
          Love to play music with my guitar!
        </p>
        <div className="a-award">
          {/* <img src={Award} alt="" className="a-award-img" /> */}
          <div className="a-award-texts">
            <h4 className="a-award-title">Road to Hire </h4>
            <p className="a-award-desc">
              Graduated A rigorous six-month training program, apprentices
              transition to high-earning careers with premier Charlotte
              employers like Bank of America, Red Ventures, and Atrium Health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
