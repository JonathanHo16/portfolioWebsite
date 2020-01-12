import React from "react";
import "./ToolStyleSheet.css"
export default class Tool extends React.Component{

    render() {
        return <div className={'toolContainer'}>
            <img className={'toolImage'} src={this.props.image} id/>
            <p className={'toolName'}>{this.props.name}</p>
        </div>
    }


}