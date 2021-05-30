import React from 'react'
import image from './portfolio-background.jpg'
import "./Banner.css"
import "font-awesome/css/font-awesome.min.css"

function Banner() {
    return (
        <div className="banner" style={{ backgroundImage:`url("${image}")` }}>
            <h1>I'm SRIKANTH GUBBA</h1>
            <div className="position">
                <h3>JavaScript , React Js Developer</h3>
            </div>
            <div className="mediaicons">
                <a href="https://www.facebook.com/srikanth.gubba.73/" target='blank'>
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/srikanth-g-273b54137" target='blank'>
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/Srikanth2355" target='blank'>
                    <i className="fa fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default Banner
