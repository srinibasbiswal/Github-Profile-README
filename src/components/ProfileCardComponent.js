import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import ReactMarkdown from "react-markdown";
import styles from '../stylesheets/style.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MDEditor from '@uiw/react-md-editor';

function ProfileCardComponent(props){

    const [currentComponent, setCurrentComponent] = useState('MarkDownDesign');

    const switchDesign = () =>{
        if (currentComponent === 'MarkDownDesign'){
            setCurrentComponent('MarkDownCode');
        }else if (currentComponent === 'MarkDownCode'){
            setCurrentComponent('MarkDownDesign');
        }
    }

    return(
        <React.Fragment>
            <div className={styles.ProfileCard}>
                <div className={styles.CardHeader}>
                    <div className={styles.chipLeft}>
                        <a className={styles.icon} href={`https://github.com/${props.profileDetails.githubUserName}`} rel="noopener noreferrer" target="_blank">
                            <div className={styles.icon__github}>
                                <FontAwesomeIcon name="search" icon={faGithub}></FontAwesomeIcon>
                            </div>
                        </a>
                        <h3>{props.profileDetails.githubUserName}</h3>
                    </div>
                    <div className={styles.chipRight}>
                        <h3>Show Code</h3>
                        <div className={styles.switch}>                    
                            <div className={styles.switch__toggle}>
                                <input id={props.index} type="checkbox"  onClick={switchDesign}/>
                                <label htmlFor={props.index}></label>
                            </div>
                        </div>
                    </div>    
                </div>  
            { 
                (currentComponent === 'MarkDownDesign') 
                ?  <MDEditor.Markdown source={props.markDown} />
                : <SyntaxHighlighter language="markdown" style={darcula}>
                    {props.markDown}
                    </SyntaxHighlighter>
            }
        </div>
        

        </React.Fragment>
        
    )

}

export default ProfileCardComponent;