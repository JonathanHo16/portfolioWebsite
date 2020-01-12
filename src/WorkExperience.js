import React from 'react';
import "./WorkExperienceStyleSheet.css"
import WorkElement from './WorkElement'

import intellisportsLogo from './logos/intellisportsLogo.png'
import solaceLogo from './logos/solaceLogo.png'
import nokiaLogo from './logos/nokiaLogo.png'

export default class WorkExperience extends React.Component {
    intellisportsDetailsArray = [ "Architected, implemented and maintained the whole in-app marketplace system",
        "Created a \"rate the app\" user flow that increased the amount of app store reviews by over 200%",
        "Designed a new watchOS extension for existing mobile app to improve user experience",
        "Ensured the rapid deployment of back end features to enable the development of front-end features"];
    solaceDetailsArray = ["Developed internal libraries used by the QA automation test team to add support for RESTful APIs",
        "Evaluated and modified existing test procedures to enhance robustness, readability and reliability",
        "Debugged and maintained internal test automation framework to ensure minimal test crashes",
        "Collaborated with other members on the QA team to increase software coverage by 15%",
        "Componentized legacy API to improve reusability for the developer platform"];
    nokiaDetailsArray = [ "Updated JavaScript features for implementation in the next product update (JS)",
        "Used Mocha (JS) and Selenium to expand automation test coverage",
        "Leveraged version Control software Git to maintain large code base with many developers",
        "Successfully worked within QA team to resolve software bugs"];

    render() {
        return <div className={"workSection"}>
            <h1 className={"workHeader"}>Work Experience</h1>
            <WorkElement className={"elementDiv"}
                         title={"Full-Stack Mobile iOS Developer"}
                         company={"Intellisports"}
                         location={"Montreal Qc."}
                         dateStart={"September 2019"}
                         dateEnd={"December 2019"}
                         companyLogo={intellisportsLogo}
                         detailsArray={this.intellisportsDetailsArray}
            />
            <WorkElement className={"elementDiv"}
                         title={"Software Engineer in Test"}
                         company={"Solace"}
                         location={"Ottawa On."}
                         dateStart={"January 2019"}
                         dateEnd={"April 2019"}
                         companyLogo={solaceLogo}
                         detailsArray={this.solaceDetailsArray}
            />
            <WorkElement className={"elementDiv"}
                         title={"Software Engineer"}
                         company={"NOKIA"}
                         location={"Ottawa On."}
                         dateStart={"July 2017"}
                         dateEnd={"August 2017"}
                         companyLogo={nokiaLogo}
                         detailsArray={this.nokiaDetailsArray}
            />
        </div>
    }
}