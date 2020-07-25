import React from 'react';
import classes from './Backdrop.module.css';


const backdrop = (props) => (
    props.show ? <span className={classes.Backdrop} onClick={props.clicked}></span> : null
);

export default backdrop;