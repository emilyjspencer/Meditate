import React, { Fragment } from 'react';
import './Welcome.css';
import meditate from './meditate.jpg';


const Welcome  = () => {

    return (
        <Fragment>
          <h1>Welcome to the Meditation App</h1>
          <img src={meditate}></img>
        </Fragment>
    )
}


export default Welcome;