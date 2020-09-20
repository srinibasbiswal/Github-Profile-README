import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";
import styles from '../stylesheets/style.module.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function ProfileCardComponent(props){

    const [currentComponent, setCurrentComponent] = useState('MarkDownDesign');

    const showMarkUpDesign = () =>{
        setCurrentComponent('MarkDownDesign');
    }

    const showMarkUpCode = () =>{
        setCurrentComponent('MarkDownCode');
    }

    return(
        <React.Fragment>
            <div className={styles.ProfileCard}>
                <div className={styles.CardHeader}>
                    <div className={styles.chipLeft}>
                        <div className={styles.icon}>
                            <div className={styles.icon__github}>
                                <FontAwesomeIcon name="search" icon={faGithub}></FontAwesomeIcon>
                            </div>
                        </div>
                        <h3>{props.profileDetails.githubUserName}</h3>
                    </div>
                    <div className={styles.chipRight}>
                        <h3>Show Code</h3>
                        <div className={styles.switch}>                    
                            <div className={styles.switch__toggle}>
                                <input id={props.index} type="checkbox"/>
                                <label for={props.index}></label>
                            </div>
                        </div>
                    </div>    
                </div>  
            { 
                (currentComponent === 'MarkDownDesign') 
                ?  <ReactMarkdown source={props.markDown}/>
                : null
            }
        </div>
        

        </React.Fragment>
        
    )

}

export default ProfileCardComponent;