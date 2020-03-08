import React from 'react';
import './AboutMeViewStyleSheet.css';
import me from './logos/me.jpg'

export default class AboutMeView extends React.Component
{
    constructor (props) {
        super(props);
        this.state = {
            isMobile : window.innerWidth <= 500
        };
    }
    static defaultProps = {

        proDescription: "I am an Engineering student at the University of Waterloo studying Systems Design Engineering. " +
            "My passions include software development in all layers of the stack, deployment pipelines and " +
            "discovering new technologies. Throughout my previous internships I have gained significant working experience with different " +
            "stacks and cultures. My experience ranges from mobile iOS development working with Objective-C " +
            "and php to a QA roles using javascript and TCL.",
        personalDescription : "Outside my professional life I have a passion for sports, music and cooking. Being a very active " +
            "student has accustomed me to moving fast and adapting to ever changing surroundings. Through sport " +
            "I have learned the value of hard work and to not give up in the face of adversity. My musical endeavours have shown " +
            "me that with time and practice is the root of improvement."
    };

    render(){
        return <div className={(this.state.isMobile ? "AboutMeDiv_mobile" : "AboutMeDiv")} id={"about"}>
                <div className={"Description"}>
                    <h1 className={'aboutMeHeader'}>About me </h1>
                    <p className={"DescriptionText"}>{this.props.proDescription}</p>
                    <p className={"DescriptionText"}>{this.props.personalDescription}</p>
                </div>
            <div className={"Picture"}>
                <img className={(this.state.isMobile ? "myFace_mobile" : "myFace")} src={me}/>
            </div>
        </div>
    }
}