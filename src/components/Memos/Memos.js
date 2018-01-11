import React, { Component } from 'react';

import Memo from './Memo/Memo';

class Memos extends Component {
    render() {
        return this.props
        .memos
        .map((memo, index) => {

            return <Memo
                click={() => this.props.clicked(index)}
                name={memo.name}
                position={memo.position}
                content={memo.content}
                time={memo.time}
                clear={memo.clear}
                nameChanged={(event) => this.props.changed(event, memo.id)} />
        });
    }
}


export default Memos;
