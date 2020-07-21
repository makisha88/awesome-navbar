import React from 'react';

import classes from './NavElement.module.css';

const navElement = (props) => {
    let label = props.labels.map((value, index) => {
        return <span key={index}>{value}</span>
    })
    
    return (
        <div className={classes.NavElement}>
            <a href="/">{label}</a>
        </div>
    )
}
export default navElement;