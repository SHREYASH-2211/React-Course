import React , {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked")
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleloClick = ()=>{
    // console.log("Uppercase was clicked")
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handleOnChange = (event)=>{
    
    setText(event.target.value)
  }

    const [text, setText] = useState("Enter text here");


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#05405d'}}>
    <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#05405d'}} id="myBox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#05405d'}}>
      <h1>Your Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}  Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text to preview it."}</p>
    </div>
    </>
    
  )
}
 