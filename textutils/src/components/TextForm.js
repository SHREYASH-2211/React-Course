import React , {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
  return (
    <div>
    <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} id="myBox" rows="10"></textarea>
    </div>
    <button className="btn btn-primary">Convert to UpperCase</button>
    </div>
  )
}
 