import React from 'react';

import "./NavBarStyleSheet.css";
import linkedinLogoColored from "./logos/linkedinIcon_colored.png";
import linkedinLogoWhite from "./logos/linkedinIcon_white.png"
import gitLogoColored from "./logos/gitIcon_colored.png";
import gitLogoWhite from "./logos/gitIcon_white.png"
import emailLogoColored from "./logos/emailIcon_colored.png";
import emailLogoWhite from "./logos/emailIcon_white.png"
import resumePdf from "./resume.pdf";
export default class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            offsetTop: null,
            hidden: false,
            className: 'namebar'
        };
    }
    scrollToRef = (section) => {
        let scrollToY;
        let header = document.getElementById('myHeader');

        switch(section) {
            case 'top':
                scrollToY = 0;
                break;
            case 'about':
                // scrollToY = document.getElementById('about').offsetTop - (window.pageYOffset > document.getElementById('myHeader').offsetTop ? 0 : 50);
                scrollToY = document.getElementById('about').offsetTop - 30;
                break;
            case 'toolBox':
                // scrollToY = document.getElementById('projects').offsetTop - (window.pageYOffset > document.getElementById('myHeader').offsetTop ? 20 : 40);
                scrollToY = document.getElementById('toolBox').offsetTop - 30 ;
                break;
            default:
                scrollToY = 0;
                break;
        }

        window.scrollTo({left: 0, top: scrollToY, behavior: 'smooth'});
    };

    componentDidMount() {
        this.setState({offsetTop: document.getElementById('about').offsetTop});
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll = () => {
        let className;
        window.pageYOffset >= this.state.offsetTop - 100? className = 'nameBar' : className = 'nameBarHidden';
        this.setState({className});
    };
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
            <div className={this.state.className}>
                <h2>Jonathan Ho</h2>
            </div>
            <div className={"jumpContainer"}>
                <button className='jumpButton' onClick={() => window.open(resumePdf, '_blank')}>Resume</button>
                <button className='jumpButton' onClick={() => this.scrollToRef('toolBox')}>ToolBox</button>
                <button className='jumpButton' onClick={() => this.scrollToRef('about')}>About</button>
            </div>
        </div>
            }
}