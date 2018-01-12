import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = classes.Button;
    if (props.showMemos) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    return (
        <div>
            <h1>React App -Memo-
            </h1>
            <p className={assignedClasses.join(' ')}>
                Write your memos or event on your box and reflect it at the same time</p>
        </div>

    );

}

export default cockpit;
