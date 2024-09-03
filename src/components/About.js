import React, { useState } from 'react'

export default function About(props) {

    // let initialStyle = {
    //     color: 'black',
        
    // }
    // const [myStyle, setMyStyle] = useState(initialStyle)

    // const [btntext, setbtntxt] = useState("Enable Dark Mode")

    // let todark = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })

    //         setbtntxt("Enable Light Mode")
    //     }

    //     else {
    //         setMyStyle(initialStyle)
    //         setbtntxt("Enable Dark mode")
    //     }
    // }


    let myStyle ={
        color: props.mode ==='dark'?'white':'#042705',
        backgroundColor: props.mode ==='dark'?'#042705':'white',
        border :'1px solid',
        borderColor : props.mode ==='dark'?'#042705':'white'
    }
    






    return (
        <div className='container' style={{color: props.mode ==='dark'?'white':'#042705'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TXTify helps you analyze your text.</strong>  It helps ypu analyze your text instantly and efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            This is FREE to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TXTify is free to use.</strong> It is a free character counter tool that provides instant char count and its statistics.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TXTify is a browser compatible tool.</strong> It usits to count characters in facebook, blog, books, pdf docs etc.
                        </div>
                    </div>
                </div>
                {/* <div className='container my-3'>
                    <button onClick={todark} type="button" className="btn btn-primary">{btntext}</button>
                </div> */}

            </div>
        </div>
    )
}
