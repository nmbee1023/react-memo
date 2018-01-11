import React, {Component} from 'react';
import classes from './Memo.css';
import Radium from 'radium';
// import WithClass from '../../../hoc/WithClass';

class Memo extends Component {

    constructor(props) {
        super(props);
        console.log('[Memo.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[Memo.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Memo.js] Inside componentDidMount() ');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Update Memo.js] Inside componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update Memo.js] Inside shouldComponentUpdate', nextProps, nextState)
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[Update Memo.js] Inside shouldComponentUpdate', nextProps, nextState)
    }

    componentDidUpdate()
    {
        console.log('[Update Memo.js] Inside componentDidUpdate')
    }

    render() {
        const style = {
            fontSize: '20px'
        }
        const nameStyle = {
            'width': '100px'
        }
        const positionStyle = {
            'width': '50px'
        }
        const memoStyle = {
            'width': '1000px'
        }
        const timeStyle = {
            'width': '170px'
        }

        return (
            <tr className={classes.Memo} style={style}>
                <td style={nameStyle}>{this.props.name}</td>
                <td style={positionStyle}>{this.props.position}</td>
                <td style={memoStyle}>{this.props.content}</td>
                <td style={timeStyle}>{this.props.time}</td>
                <td>
                    <div className={classes.clearButton} onClick={this.props.click}>{this.props.clear}</div>
                </td>
            </tr>
        )
    };
}

export default Radium(Memo);
