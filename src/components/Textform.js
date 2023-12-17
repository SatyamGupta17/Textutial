import {useState} from 'react'
export default function TextForm(props){
    
    const [text, setText] = useState("")
    const handleUpClick = () =>{ 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", 'success');
    }
    const handleLowerClick = () =>{ 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", 'success');
    }
    const handleOnChange = (event) => { 
        setText(event.target.value)
    }
    const handleClearText = () => {
        let newText = ""
        setText(newText);
    }
    const handleCopy = () =>{ 
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Copy to Clipboard", 'success');
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "))
    }
    return (
        <>
        <div className = "container" style = {{color : props.mode ==='dark'? 'white' : '#042743'}}>
            <div className={`mb-3`}>
                <label htmlFor="MyBox" className="form-label"><h3>{props.heading}</h3></label>
                <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor : props.mode ==='dark'? '#312c2c' : 'white', color : props.mode === 'dark' ? 'white':'#042743'}}id="MyBox" rows="3"></textarea>
                </div>
                <button disabled = {text.length === 0}className = "btn btn-primary mx-1 my-1" onClick= {handleUpClick}>Convert to upperCase</button>

                <button disabled = {text.length === 0}className = "btn btn-primary mx-1 my-1" onClick= {handleLowerClick}>Convert to LowerCase</button>

                <button disabled = {text.length === 0}className = "btn btn-primary mx-1 my-1" onClick= {handleClearText}>Clear text</button>
                <button disabled = {text.length === 0}className = "btn btn-primary mx-1 my-1" onClick= {handleCopy}>Copy Text</button>
                <button disabled = {text.length === 0}className = "btn btn-primary mx- my-1" onClick= {handleExtraSpace}>Remove Extra Space</button>
                
        </div>
        <div className = "container" style = {{color : props.mode ==='dark'? 'white' : '#042743'}}>
            <h3>Your text Summary</h3>
            <p>{text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008* text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} minutes read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
        </>
    );
}
