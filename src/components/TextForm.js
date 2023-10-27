import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  
  const handleUpClick=()=>{
    console.log("Converted to Uppercase: " , text)
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!","success")
  }

  const handleDownClick=()=>{
    console.log("Converted to lowercase: " , text)
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!","success")
  }
  const handleHyphon=()=>{
      console.log("Hyphon: " , text)
      let newText= text.trim().replace(" ","-");
      setText(newText)
      props.showAlert("Inserted hyphon!","success")
  }
  const handlePeriod=()=>{
    console.log("Insert period: " , text)
    let newText= text.trim().padEnd(text.length + 1,".");
    setText(newText)
    props.showAlert("Inserted period!","success")
}

  const handleOnChange=(event)=>{
    console.log("Converted")
    setText(event.target.value)
  }
  
  

  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div>
        <textarea
          className="form-control"
          id="floatingTextarea"
          value={text}
          rows="5"
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>
      <button type="button" className="btn btn-danger" onClick={handleUpClick} >
        Convert to Uppercase
      </button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleDownClick} >
        Convert to Lowercase
      </button>
      <button type="button" className="btn btn-info mx-2" onClick={handleHyphon} >
        Insert Hyphon
      </button>
      <button type="button" className="btn btn-warning mx-2" onClick={handlePeriod} >
        Insert Period
      </button>
      {/* <label for="floatingTextarea">{props.textArea}</label> */}
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h4>Text summary</h4>
      <p>{text===""?0:text.trim().split(" ").length} words and {text.length} characters </p>
      <p> {0.008*text.split(" ").length} minutes spent to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something"}</p>
    </div>
    </>
    
  );
}
