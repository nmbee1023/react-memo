import React, {Component} from 'react';
import classes from './App.css';
import classMemo from '../components/Memos/Memo/Memo.css';
import Memos from '../components/Memos/Memos';
import Cockpit from '../components/Cockpit/Cockpit';

var moment = require('moment');
var nowTime = moment().format('YYYY年MM月DD日');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      memos: [],
      showMemos: false,
      toggleClicked: 0
    };
    this.handleMemoAdd = this
      .handleMemoAdd
      .bind(this);
    console.log('[App.js] Inside Constructor', props, this.state.toggleClicked);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()', this.state.memos)
  }

  nameChangedHandler = (event, id) => {

    const memoIndex = this
      .state
      .memos
      .findIndex(p => {
        return p.id === id;
      });

    const memo = {
      ...this.state.memos[memoIndex]
    }

    memo.name = event.target.value;

    const memos = [...this.state.memos];
    memos[memoIndex] = memo;

    this.setState({memos: memos});
  }

  clearMemosHandler = (memoIndex) => {
    const memos = this.state.memos;
    memos.splice(memoIndex, 1);
    this.setState({memos: memos});
  }

  handleMemoAdd = () => {

    const doesShow = this.state.showMemos;
    this.setState((prevState, props) => {
      return {
        showMemos: true,
        toggleClicked: prevState.toggleClicked + 1
      }
    });


    // React.findDOMNode関数で入力項目を得ることが出来る var id = e.index
    var name = this.refs.name.value;
    var position = this.refs.position.value;
    var content = this.refs.content.value;
    var time = nowTime;
    var clear = 'clear';

    // データ追加をイベント通知
    this
      .state
      .memos
      .push({name: name, position: position, content: content, time: time, clear: clear});

    this.setState({memos: this.state.memos})

    this.refs.name.value = "";
    this.refs.position.value = "";
    this.refs.content.value = "";
  }

  render() {

    console.log('[App.js] Inside render()', this.state.toggleClicked)

    const table = {
      margin: 'auto',
      width: '80%'
    }

    const tableTr = {
      backgroundColor: 'lightblue',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      fontSize: '20px',
      marginBottom: '12px'
    }

    let memos = null;
    var informationInput = (
      <div className={classes.input}>
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
                <input ref="name" type="text" name="name"/>
              </td>
              <td>
                <input ref="position" type="text" name="position"/>
              </td>
              <td>
                <input ref="content" type="content" name="content"/>
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.handleMemoAdd} className="btn btn-primary">Append</button>
      </div>
    )

    if (this.state.showMemos) {

      memos = (
        <table style={table}>
          <thead>
            <tr className={classMemo.Memo} style={tableTr}>
              <th>title</th>
              <th>position</th>
              <th>memo</th>
              <th>time</th>
              <th>clear</th>
            </tr>
          </thead>

          <tbody>
            <Memos
              memos={this.state.memos}
              clicked={this.clearMemosHandler}
              changed={this.nameChangedHandler}/>
          </tbody>
        </table>
      );


    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showMemos={this.state.showMemos}
          memos={this.state.memos}/> {informationInput}{memos}
      </div>
    )
  }
}

export default App;
