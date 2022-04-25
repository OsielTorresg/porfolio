import "./topbar.scss";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            otg.
          </a>
          <div className="itemcontainer">
            <FaUserAlt className="icon" />
            <span>(336) 425-6616</span>
          </div>
          <div className="itemcontainer">
            <FaEnvelope className="icon" />
            <span>Osieltorresg7@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
