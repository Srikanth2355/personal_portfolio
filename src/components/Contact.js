import React from 'react'
import "./Contact.css"
import "font-awesome/css/font-awesome.min.css"

function Contact() {
    return (
        <div className="Contact">
            <h2>Contact</h2>
            <div className="mediaiconscontact">
                <a href="https://www.facebook.com/srikanth.gubba.73/" target='blank'>
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/srikanth-g-273b54137" target='blank'>
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="mailto:gubbasrikanth2355@gmail.com">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    )
}

export default Contact
