import React, {Component} from 'react';
import classes from './../../containers/App.css';

class InformationInput extends Component {



    render() {

        return (
            <div className={classes.input}>
                <form>
                    <table>
                        <thead>
                            <tr>
                                <th>title</th>
                                <th>position</th>
                                <th>memo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input ref="name" type="text" name="name"></input>
                                </td>
                                <td>
                                    <input ref="position" type="text" name="position"></input>
                                </td>
                                <td>
                                    <input type="content" name="content"></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={this.props.click} className="btn btn-primary">Append</button>
                </form>
            </div>
        )
    }
}

export default InformationInput;
