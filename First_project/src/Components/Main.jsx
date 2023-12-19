import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Main(){
    return (
        <div className="content">
            <h1 className="name">Ambuj Mishra</h1>
            <p className="title">Frontend Developr</p>
            <div className="btn">
                <button className="email"><span><FontAwesomeIcon icon={faEnvelope} className="btn-email"/></span>Email</button>
                <button className="linkdin"><span> <FontAwesomeIcon icon={faLinkedin}  className="btn-linkdin"/></span>Linkdin </button>
            </div>
            <div className="text">
                <h3 className="heding">About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p className="heding">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}