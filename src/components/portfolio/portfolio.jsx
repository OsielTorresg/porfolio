import "./portfolio.scss";
import { projects } from "../../data";
export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <div className="container">
        {projects.map((d) => (
          <div className="item">
            <h2>{d.title}</h2>
            <img src={d.img} alt="" />

            <h4>{d.desc}</h4>

            <div className="button">
              <button>
                <a href={d.link} target="_blank">
                  View Project
                </a>
              </button>
              <button>
                <a href={d.github} target="_blank">
                  View Code
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
