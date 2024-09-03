import React, { useState } from 'react'

// hooks bina class bnaaye class ki property use krne deta h 

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here...")

    const handleUpClick = () => {
        console.log("Clicked");
        // setText("You have clicked on handleUpClick")  //ye krne se hum wha pe value chnage ni kr paaenge
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }

    const handleLowClick = () => {
        console.log("Clicked");
        // setText("You have clicked on handleUpClick")  //ye krne se hum wha pe value chnage ni kr paaenge
        setText(text.toLowerCase())
        props.showAlert("Converted to LowerCase","success")
    }

    const cleartext = ()=>{
        setText('')
        props.showAlert("Text CLeared","success")
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")
    }

    const xtraspace=()=>{
        let spaclesstxt= text.split(/[ ]+/).join(' ');    //this splits text on the basis of extra spaces and forms an array and then join it on the basis of single space
        setText(spaclesstxt)
        // setText(spaclesstxt.join(' '))
        props.showAlert("Removed extra space","success")

    }

    return (
        <>

            <div className='container ' style={{color : props.mode==='dark' ? 'white' : '#042743'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark' ? 'grey' : 'white', color : props.mode==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 bg-dark " onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 bg-dark" onClick={handleLowClick}>UpperCase to LowerCase</button>
                <button className="btn btn-primary mx-2 bg-dark" onClick={cleartext}>Clear all</button>
                <button className="btn btn-primary mx-2 bg-dark" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-2 bg-dark" onClick={xtraspace}>Remove extra space</button>
            </div>
            <div className="container my-3" style={{color : props.mode==='dark' ? 'white' : '#042743'}} >
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>Number of minutes taken to read {0.008*text.split(" ").length}</p>
                <h3>Preview</h3>
                <p>{text.length>0? text :"Write something in the textbox above to preview"}</p>
            </div>
        </>
    )
}
