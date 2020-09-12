import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import WallContainer from './WallContainer';

function MainContainer(){
    return(
        <React.Fragment>
            <HeaderComponent></HeaderComponent>
            <WallContainer></WallContainer>
        </React.Fragment>
    );
}

export default MainContainer;