import React from 'react'
import ReactMarkdown from "react-markdown";
import styles from '../stylesheets/style.module.css';

function ProfileCardComponent(props){

    return(
        <div className={styles.ProfileCard}>
            <ReactMarkdown
                source={props.markDown}
            ></ReactMarkdown>
        </div>
        
    )

}

export default ProfileCardComponent;