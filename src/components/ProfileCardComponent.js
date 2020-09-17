import React from 'react'
import ReactMarkdown from "react-markdown";
import styles from '../stylesheets/style.module.css';

function ProfileCardComponent(props){
    return(
        <div className={styles.ProfileCard}>
            <h3>{props.profileDetails.githubUserName}</h3>
            <ReactMarkdown
                source={props.markDown}
            ></ReactMarkdown>
        </div>
        
    )

}

export default ProfileCardComponent;