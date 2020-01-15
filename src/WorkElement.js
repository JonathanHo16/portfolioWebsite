import React from 'react';
import "./WorkElementStyleSheet.css"
import intellisportsLogo from './logos/intellisportsLogo.png'

export default class WorkElement extends React.Component{
    companyLogo;
    dateStart;
    dateEnd;
    company;
    detailsArray;
     constructor (props) {
         super(props);
         this.state = {
             isMobile : window.innerWidth <= 500
         };
     }
    render () {

        const listItems = this.props.detailsArray.map((detailString) =>
            <li key={detailString}>{detailString}</li>);
        return <div className={'elementContainer'}>
            <h2 className={"workTitle"}>{this.props.title}</h2>
            <div className={"detailsContainer"}>
                <h4 className={"subWorkTitle"}>{this.props.company + " - " + this.props.location}</h4>
                <h4 className={"dateRange"}>{this.props.dateStart + " - " + this.props.dateEnd}</h4>
            </div>
            <div className={(this.state.isMobile ? "contentContainer_mobile" : "contentContainer")}>
                <div className={"jobResponsibilities"}>
                    <ul>{listItems}</ul>
                </div>
                <div className={"imageContainer"}>
                    <img className={"companyLogo"} src={this.props.companyLogo} />
                </div>
            </div>


        </div>
    }

}