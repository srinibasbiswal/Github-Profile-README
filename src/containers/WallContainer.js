import React, { useEffect, useState } from 'react';
import styles from '../stylesheets/style.module.css';
import {users} from '../dataSet/users';
import source from '../dataSet/githubCards/srinibasbiswal.md';
import ReactMarkdown from "react-markdown";

function WallContainer(){

    const [usersProfile, setusersProfile] = useState({
        profiles : []
    });

    const [userGithubCards, setuserGithubCards] = useState({});

    const importAll = (r) => r.keys().map(r);
    const markdownFiles = importAll(require.context('../dataSet/githubCards', false, /\.md$/)).sort().reverse();

    useEffect(() => {
        var profileCards = [];
        users.forEach(user => {
            profileCards.push(user);       
        });
        setusersProfile({profiles : profileCards})           
        renderPosts();
      }, []);

    const renderPosts = async() => {
        var fileNameExecutionSeq = [];
        Promise.all(
            markdownFiles.map((file) => fetch(file)
                .then(
                    (res) => {
                        var fileName = file;
                        fileName = fileName.substr(14).slice(0, -12);
                        fileNameExecutionSeq.push(fileName);                        
                        return res.text();
                    }
                )))
                .then((mdData) => {
                    fileNameExecutionSeq.forEach( (fName,index) => {
                        console.log(fName,index);
                        var cards = userGithubCards;
                        cards[fName] = mdData[index]
                        setuserGithubCards({cards});
                    });
            })
             .catch((err) => console.error(err)); 
    }

    const handleSubmit = (event) => {
        console.log(userGithubCards);
        event.preventDefault();
      }

    return(
        <React.Fragment>
            <div className={`${styles.SearchComponent}`}>
                <form onSubmit={handleSubmit}>
                    <label>
                    <input type="text" placeholder="Search" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                {
                    (typeof userGithubCards.cards !== 'undefined')
                    ? <div>
                        {
                            usersProfile.profiles.map((profile, index) => {                 
                                return(
                                    <div>
                                    <div>{profile.githubUserName}</div>
                                    <div>{userGithubCards.cards[profile.githubUserName]}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    : <div></div>
                   
                }                
            </div>
        </React.Fragment>
    )
}

export default WallContainer;
