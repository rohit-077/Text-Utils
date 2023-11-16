import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  
  const handleUpClick=()=>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!","success")
  }

  const handleDownClick=()=>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!","success")
  }
  const handleHyphon=()=>{
      let newText= text.trim().replace(" ","-");
      setText(newText)
      props.showAlert("Inserted hyphon!","success")
  }
  const handlePeriod=()=>{
    let newText= text.trim().padEnd(text.length + 1,".");
    setText(newText)
    props.showAlert("Inserted period!","success")
}

const handleCopy = ()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to clipboard!", "success")

}

const handleClear = ()=>{
  setText("");
  props.showAlert("Text cleared!","success")
}

  const handleOnChange=(event)=>{
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
          style={{backgroundColor: props.mode==='light'?'white':'lightslategrey',color: props.mode==='light'?'black':'white'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleDownClick} >
        Convert to Lowercase
      </button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleHyphon} >
        Insert Hyphon
      </button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handlePeriod} >
        Insert Period
      </button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy} >
        Copy Text
      </button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClear} >
        Clear Text
      </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h4>Text summary</h4>
      <p>{text===""?0:text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
      <p> {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes spent to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something"}</p>
    </div>
    </>
    
  );
}
