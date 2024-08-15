import React from 'react'
import html from '../images/vscode-icons_file-type-html.svg'
import css from '../images/vscode-icons_file-type-css.svg'
import js from '../images/vscode-icons_file-type-js-official.svg'
import jquey from '../images/pngwing.com 1.svg'
import sass from '../images/logos_sass.svg'
import bootstrap from '../images/bootstrap-original-wordmark.svg'
import mui from '../images/materialui-original.svg'
import vscode from '../images/vscode-icons_file-type-vscode.svg'
import react from '../images/logos_react.svg'
import eclipce from '../images/pngwing.com (1) 1.svg'
import oracle from '../images/oracle-original.svg'
import dbeaver from '../images/pngaaa.com-6692094 1.svg'
import figma from '../images/figma-original.svg'
import node from '../images/Programming logos and icons by hrhasnai (15).svg'
import java from '../images/Programming logos and icons by hrhasnai (23).svg'
import spring from '../images/spring-original-wordmark.svg'
import gradle from '../images/gradle-plain-wordmark.svg'
import mongo from '../images/mongodb-original-wordmark.svg'
import docker from '../images/docker-plain-wordmark.svg'
import tomcat from '../images/tomcat-original.svg'
import aws from '../images/amazonwebservices-original-wordmark.svg'
import git from '../images/akar-icons_github-fill.svg'

function TechSAtack() {
    return (
        <div className='techStackWrap'>
            <div className='techStackInner'>
                <div className='stackInnerMain title'>My Technique Stack</div>
                <div className='stackContent subtitle'>"These are the technologies I have worked with."</div>
            </div>
            <div className='stackIconWrap'>
                <div className='iconWrapContainer'>
                    <ul>
                        <li><img src={html} alt="" /></li>
                        <li><img src={css} alt="" /></li>
                        <li><img src={js} alt="" /></li>
                        <li><img src={jquey} alt="" /></li>
                        <li><img src={sass} alt="" /></li>
                        <li><img src={bootstrap} alt="" /></li>
                        <li><img src={mui} alt="" /></li>
                    </ul>
                </div>
                <div className='iconWrapContainer'>
                    <ul>
                        <li><img src={vscode} alt="" /></li>
                        <li><img src={react} alt="" /></li>
                        <li><img src={dbeaver} alt="" /></li>
                        <li><img src={oracle} alt="" /></li>
                        <li><img src={eclipce} alt="" /></li>
                        <li><img src={figma} alt="" /></li>
                    </ul>
                </div>
                <div className='iconWrapContainer'>
                    <ul>
                        <li><img src={java} alt="" /></li>
                        <li><img src={spring} alt="" /></li>
                        <li><img src={gradle} alt="" /></li>
                        <li><img src={node} alt="" /></li>
                        <li><img src={mongo} alt="" /></li>
                        <li><img src={docker} alt="" /></li>
                        <li><img src={tomcat} alt="" /></li>
                        {/* <li><img src={aws} alt="" /></li> */}
                        <li><img src={git} alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TechSAtack