import React from 'react';
import './ToolBoxStyleSheet.css';
import gitIcon from './logos/gitIcon_colored.png';
import cppLogo from './logos/cpp_logo.png'
import appleLogo from './logos/appleLogo.png'
import watchOsLogo from './logos/watchOsLogo.png'
import nodeJsLogo  from './logos/nodeJsLogo.png'
import mysqlLogo from './logos/mysqlLogo.png'
import phpLogo from './logos/phpLogo.png'
import javaLogo from './logos/javaLogo.png'
import tclLogo from './logos/tclLogo.png'
import subversionLogo  from './logos/subversionLogo.png'
import Tool from "./Tool";
export default class ToolBox extends React.Component
{
    render() {
        return <div className={"ToolBox"}>
            <h1>My Tools</h1>
            <table>
                <tbody>
                    <tr>
                        <td><Tool image={cppLogo} name={"C++"}/> </td>
                        <td><Tool image={appleLogo} name={"Objective-C"}/> </td>
                        <td><Tool image={watchOsLogo} name={"Apple's WatchOs"}/> </td>
                        <td><Tool image={nodeJsLogo} name={"NodeJS"}/> </td>
                        <td><Tool image={javaLogo} name={"Java"}/> </td>
                    </tr>
                    <tr>
                        <td><Tool image={mysqlLogo} name={"mySQL"}/> </td>
                        <td><Tool image={phpLogo} name={"PHP"}/> </td>
                        <td><Tool image={tclLogo} name={"TCL"}/> </td>
                        <td><Tool image={gitIcon} name={"Git"}/> </td>
                        <td><Tool image={subversionLogo} name={"Subversion"}/> </td>
                    </tr>
                </tbody>

            </table>
        </div>
    }
}