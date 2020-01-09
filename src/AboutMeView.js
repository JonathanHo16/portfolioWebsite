import React from 'react';
import './AboutMeViewStyleSheet.css';

export default class AboutMeView extends React.Component
{
    static defaultProps = {
        proDescription: "I am an Engineering student at the University of Waterloo studying Systems Design Engineering " +
            "My passions include software development in all layers of the stack, deployment pipelines and " +
            "discovering new technologies. Through out my previous internships I have gained experience working in many different " +
            "stacks and cultures. My experience ranges from mobile iOS development working with Objective-C " +
            "and php to a QA roles using javascript and TCL.",
        personalDescription : "Outside my professional life I have a passion for sports, music and cooking. Being a very active " +
            "student has accustomed me to moving fast and adapting to ever changing surroundings. Thorough sport " +
            "I have learned the value of hard work and to not give up in the face of adversity. My interest in " +
            "cooking comes my food allergies. Since I often go to restaurants and I am not able to order my first " +
            "choice item I decided to learn to cook so that in these scenarios I can go home and make my dish of " +
            "choice allergen free. This has taught me to problem solve as I must often to reverse-engineer the " +
            "elements without the aid of a recipe"
    };

    render(){
        return <div className={"AboutMeDiv"}>
                <div className={"Description"}>
                    <p className={"DescriptionText"}>{this.props.proDescription}</p>
                    <p className={"DescriptionText"}>{this.props.personalDescription}</p>
                </div>
            <div className={"Picture"}>
                    <p>A picture is going here</p>
            </div>
        </div>
    }
}