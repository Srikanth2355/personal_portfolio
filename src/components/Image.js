import React from 'react'
import "./Image.css"

function Image({link,para,image}) {
    return (
        <div className="images">
            <a href={link} target="blank">
                <img src={image} alt="pic"></img>
                <span>{para}</span>
            </a> 
        </div>
    )
}

export default Image
