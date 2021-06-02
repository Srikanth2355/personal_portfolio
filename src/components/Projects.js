import React from 'react'
import "./Projects.css"
import Image from "./Image"


function Projects() {
    return (
        <div className="projects">
            <h2 className="project_main">Projects</h2>
            <div className="project_sub">
                <h2 className="project_sub1">JavaScript Projects</h2>
                <div className="images_row">
                    <Image 
                        link="https://srikanth2355.github.io/Guess-number-game/" 
                        para="Guess Number Game" 
                        image="/images/number_game.png"
                    />
                    <Image 
                        link="https://srikanth2355.github.io/blackjackapp/"
                        para="BlackJack App" 
                        image="/images/challenges.png"
                    />
                    <Image 
                        link="https://srikanth2355.github.io/weatherapp/" 
                        para="Weather App" 
                        image="/images/weather.png"
                    />
                    <Image 
                        link="https://srikanth2355.github.io/twitterclone/" 
                        para="Twitter like App" 
                        image="/images/twitter.png"   
                    />
                </div>
            </div>
            <h2 className="project_sub2">React Projects</h2>
            <div className="images_row">
                    <Image 
                        link="https://srinetflix-clone.netlify.app/" 
                        para="Netflix landing Page" 
                        image="/images/netflix.png"
                    />
                    <Image 
                        link="https://sritiktoksclone.netlify.app/" 
                        para="Tiktoks" 
                        image="/images/tiktoksclone.png"
                    />
                    <Image 
                        link="https://www.google.com" 
                        para="Tindog website" 
                        image="/images/twitter.png"
                    />
                    <Image 
                        link="https://www.google.com" 
                        para="Tindog website" 
                        image="/images/twitter.png"
                    />
            </div>
        </div>
    )
}

export default Projects
