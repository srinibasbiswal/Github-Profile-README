import React from 'react';
import styles from '../stylesheets/style.module.css';

function WallContainer(){
    return(
        <React.Fragment>
            <div className={`${styles.SearchComponent}`}>
                <form>
                    <label>
                    <input type="text" placeholder="Search" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </React.Fragment>
    )
}

export default WallContainer;