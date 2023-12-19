import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { fas } from 'fontawesome.macro'

import { faFacebook, faInstagram, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';



export  default function Footer(){
    return (
        <div className="footer">
              <FontAwesomeIcon icon={faTwitter}  className="icons"/>
              <FontAwesomeIcon icon={faFacebook}  className="icons"/>
              <FontAwesomeIcon icon={faInstagram}  className="icons"/>
              <FontAwesomeIcon icon={faGithub} className="icons" />

        </div>
    )
    
}