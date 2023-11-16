import React from "react";

export default function About(props) {

    let myStyle = {
      color: props.mode === 'dark'?'white':'#042743',
      backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
  }

  return (
    <div className="container" style={myStyle}>
      <h1>About us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Purpose
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            
          >
            <div className="accordion-body">
              This is a very simple website made to manipulate text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Functions
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We provide multiple functions such as:
              <br/>(i) Converting text to uppercase and lowercase.
              <br/>(ii) Inserting period at the end of the sentence and hyphon between two words.
              <br/>(iii) Copying text to clipboard and also clearing the text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Contact
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              You can contact me at rohit2001.sr@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
