import React, {useState} from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleUpCase = () =>{
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLowCase = ()=>{
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearCase = ()=>{
        setText("");
        props.showAlert("Text Cleared","success");
    }

    const handleSwapCase = ()=>{
        const newText = [...text].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
        setText(newText);
        props.showAlert("Case Swapped","success");
    }

     
    const [text, setText] = useState("");

  return (
    <>
    <div>
        <div className="mb-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode === 'dark'?'#1d4167':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearCase}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpCase}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowCase}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSwapCase}>Swap Case</button>
        
        
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: 'Nothing to preview '}</p>
    </div>
    </>
  )
}
