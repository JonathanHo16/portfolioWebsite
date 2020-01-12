import React from 'react';

import "./NavBarStyleSheet.css";
import linkedinLogoColored from "./logos/linkedinIcon_colored.png";
import linkedinLogoWhite from "./logos/linkedinIcon_white.png"
import gitLogoColored from "./logos/gitIcon_colored.png";
import gitLogoWhite from "./logos/gitIcon_white.png"
import emailLogoColored from "./logos/emailIcon_colored.png";
import emailLogoWhite from "./logos/emailIcon_white.png"
export default class NavBar extends React.Component
{
    render(){
        return <div className={"NavBar"}>
            <div className={"contactContainer"}>
                <a href='https://www.linkedin.com/in/jonathanbho/' target='_blank'>
                    <img
                        src={linkedinLogoWhite}
                        onMouseOver={e => (e.currentTarget.src = linkedinLogoColored)}
                        onMouseOut={e => (e.currentTarget.src = linkedinLogoWhite)}
                        className='logo'
                        id='linkedin'

                    />
                </a>
                <a href='https://github.com/JonathanHo16' target='_blank'>
                    <img
                        src={gitLogoWhite}
                        onMouseOver={e => (e.currentTarget.src = gitLogoColored)}
                        onMouseOut={e => (e.currentTarget.src = gitLogoWhite)}
                        className='logo'
                        id='linkedin'

                    />
                </a>
                <a href='mailto:jbho@uwaterloo.ca?subject=Hey I saw your website and I would like to chat &cc=jonathanbho@outlook.com'>
                    <img
                        src={emailLogoWhite}
                        onMouseOver={e => (e.currentTarget.src = emailLogoColored)}
                        onMouseOut={e => (e.currentTarget.src = emailLogoWhite)}
                        className='logo'
                        id='linkedin'

                    />
                </a>
            </div>
        </div>
            }
}