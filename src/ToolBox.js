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
        return <div className={"ToolBox"} id={'toolBox'}>
            <h1>My Tools</h1>
            <div className={"tableContainer"}>
                <table>
                    <tbody>
                        <tr>
                            <td><Tool image={cppLogo} id={"C++"}/> </td>
                            <td><Tool image={appleLogo} id={"Objective-C"}/> </td>
                            <td><Tool image={watchOsLogo} id={"Apple's WatchOs"}/> </td>
                            <td><Tool image={nodeJsLogo} id={"NodeJS"}/> </td>
                            <td><Tool image={javaLogo} id={"Java"}/> </td>
                        </tr>
                        <tr>
                            <td><Tool image={mysqlLogo} id={"mySQL"}/> </td>
                            <td><Tool image={phpLogo} id={"PHP"}/> </td>
                            <td><Tool image={tclLogo} id={"TCL"}/> </td>
                            <td><Tool image={gitIcon} id={"Git"}/> </td>
                            <td><Tool image={subversionLogo} id={"Subversion"}/> </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    }
}