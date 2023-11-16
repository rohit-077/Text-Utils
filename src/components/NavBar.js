import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/About">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <h2 className="h2 mx-2">Choose color: </h2>
              <input type="radio" onClick={()=>props.toggleModeColor('skyblue')} className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
              <label className="btn btn-outline-primary mx-2" htmlFor="btnradio1">Blue</label>

              <input type="radio" onClick={()=>props.toggleModeColor('red')} className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"  />
              <label className="btn btn-outline-danger mx-2" htmlFor="btnradio2">Red</label>

              <input type="radio" onClick={()=>props.toggleModeColor('yellow')} className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"  />
              <label className="btn btn-outline-warning mx-2" htmlFor="btnradio3">Yellow</label>
              <input type="radio" onClick={()=>props.toggleModeColor('green')} className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"  />
              <label className="btn btn-outline-success mx-2" htmlFor="btnradio4">Green</label>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label className="form-check-label mx-5" htmlFor="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
        </div>
      </div>
    </nav>
  );
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
NavBar.defaultProps = {
  title: "Set title",
  aboutText: "About text",
};
