import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    
    const handleUpClick = () => {
        // console.log("Up Btn Clicked!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        let t = document.getElementById("myTextArea");
        t.select();
        t.setSelectionRange(0, 999);
        navigator.clipboard.writeText(t.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const getWords = (words) => {
        let cnt = words.split(" ").length;
        if(words.endsWith(" ") || words===""){
            cnt--;
        }
        return cnt;
    }

    const [text, setText] = useState("")
    // text = "dfdsgsg" // Wrong way to change
    // setText("dfdsgsg") // Right way 
    return (
        <>
        <div className='container' style={{color: props.mode==='light' ? 'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myTextArea" value={text} onChange={handleOnChange} rows="5"
                style={{color: props.mode==='light' ? 'black':'white', backgroundColor: props.mode==='light' ? 'white':'black'}}></textarea>
            </div>
            <div className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</div>
            <div className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</div>
            <div className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</div>
            <div className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</div>
            <div className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</div>
        </div>
        <div className="container my-2" style={{color: props.mode==='light' ? 'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{getWords(text)} words and {text.length} characters(including spaces)</p>
            <p>{text.split(" ").length/250} average minutes read</p>
            {/* <p>Based on 250 words needs average 1 minute to read</p> */}
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
