import React from 'react'
import { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({ color: "black", backgroundColor: "white" });
    const [toggleBtn, setToggleBtn] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if(myStyle.color === "white"){
            setMyStyle({ 
                color: "black", 
                backgroundColor: "white" 
            });
            setToggleBtn("Enable Dark Mode")
        }else{
            setMyStyle({ 
                color: "white", 
                backgroundColor: "black", 
                border: "1px solid white" 
            });
            setToggleBtn("Enable Light Mode")
        }
    }

    return (
        <>
        <div className='container my-2'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, characters count or read time.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils provides all its text analysis features completely free of charge. Users can access and utilize the tool without any subscription fees or hidden costs. Whether you're an individual, a student, or a professional, you can take advantage of the text analysis capabilities without worrying about any financial constraints. This commitment to being free ensures that everyone has access to a valuable resource for understanding and processing text without barriers.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Textutils is designed to be seamlessly compatible with various web browsers, offering users flexibility in their choice of internet browser. Whether you prefer Chrome, Firefox, Safari, or any other popular browser, you can access and use Textutils without any compatibility issues. This browser compatibility ensures that users can enjoy the convenience of text analysis on their preferred platform, enhancing the accessibility and usability of the tool across a wide range of devices and operating systems.
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <button type="button" class="btn btn-primary" onClick={toggleStyle}>{toggleBtn}</button>
            </div>
        </div>
        </>
    )
}
