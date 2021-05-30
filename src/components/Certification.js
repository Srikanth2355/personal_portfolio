import React from 'react'
import "./Certification.css"

function Certification() {
    return (
        <div className="certification_div">
            <h2 className="certification">Certifications</h2>
            <div className="technical">
                <h2>Technical</h2>
                <ul>
                    <li>M001: MongoDB Basics - MongoDB University</li>
                    <li>The Complete 2020 Web Development Bootcamp by Dr.Angela Yu - Udemy</li>
                </ul>
            </div>
            <div className="communication">
                <h2>Communication</h2>
                <ul>
                    <li>Certified From British Council of India</li>
                </ul>
            </div>
        </div>
    )
}

export default Certification
