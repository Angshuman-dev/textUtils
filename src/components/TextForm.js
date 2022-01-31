import React,{useState} from 'react';


export default function TextForm(props) {

    console.log(props.mode)
    const handleChange = (event)=>{
        setText(event.target.value)
    }

    const handleupClick = ()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to uppercase","success")
    }
    const handlelowClick = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase","success")
    }

    const handleCopyText =()=>{
      var copyText = document.getElementById("myBox");
        console.log(text)
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
    }

    const [text,setText] = useState('')
  return (
      <>
      <div className='container' >
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='light' ? 'white' : 'grey',color:props.mode==='light'?'black':'white'}} onChange={handleChange} value={text} rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" style={{backgroundColor:props.mode2==='red' ? 'yellow' : 'red'}} onClick={handleupClick}>Convert to uppercase</button>
  <button className="btn btn-primary" style={{backgroundColor:props.mode2==='red' ? 'yellow' : 'red'}} onClick={handlelowClick}>Convert to lowercase</button>
  <button className="btn btn-primary" style={{backgroundColor:props.mode2==='red' ? 'yellow' : 'red'}} onClick={handleCopyText}>Copy text</button>

  </div>
  
    <div className="container">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length-1} words {text.length} characters</p>
    <p>{0.008 * (text.split(" ").length-1)} minutes read</p>
    
    </div>
    </>
  )
}
