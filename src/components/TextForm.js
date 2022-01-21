import React,{useState} from 'react';


export default function TextForm(props) {
    const handleChange = (event)=>{
        setText(event.target.value)
    }

    const handleupClick = ()=>{
        setText(text.toUpperCase())
    }
    const handlelowClick = ()=>{
        setText(text.toLowerCase())
    }

    const [text,setText] = useState('')
  return (
      <>
      <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" onChange={handleChange} value={text} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to uppercase</button>
  <button className="btn btn-primary" onClick={handlelowClick}>Convert to lowercase</button>

  </div>
  
    <div className="container">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length-1} words {text.length} characters</p>
    <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
    
    </div>
    </>
  )
}
