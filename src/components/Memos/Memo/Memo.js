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
        const clearButton = {
            'cursor': 'pointer',
            ':hover': {
                'backgroundColor': 'lightblue',
                'color': 'red',
                'fontWeight': 'bold'
            }
        }

        return (
            <tr className={classes.Memo} style={style}>
                <td>{this.props.name}</td>
                <td>{this.props.position}</td>
                <td>{this.props.content}</td>
                <td>{this.props.time}</td>
                <td style={clearButton} onClick={this.props.click}>{this.props.clear}</td>
            </tr>
        // <p>{this.props.children}</p> <input type="text"
        // onChange={this.props.nameChanged} value={this.props.name}/>
        )
    };
}

export default Radium(Memo);
