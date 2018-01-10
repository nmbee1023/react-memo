import React from 'react';

import classes from './Cockpit.css';
// import Aux from '../../hoc/Aux'

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = classes.Button;
    if (props.showMemos) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.memos.length <= 2) {
        assignedClasses.push(classes.red); //classes = ['red']
    }
    if (props.memos.length <= 1) {
        assignedClasses.push(classes.bold); //classes = ['red', bold']
    }

    return (
        <div>
            <h1>React App -Memo-
            </h1>
            <p className={assignedClasses.join(' ')}>
                Write your memos or event at the same time to the incident!!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Memo</button>
        </div>

    );

}

export default cockpit;
