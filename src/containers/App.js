import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import logo from './logo.svg'; import Radium, {StyleRoot} from 'radium';
import classes from './App.css';
import classMemo from '../components/Memos/Memo/Memo.css';
// import Memo from '../components/Memos/Memo/Memo'; import ErrorBoundary from
// '../ErrorBoundary/ErrorBoundary'
import Memos from '../components/Memos/Memos';
import Cockpit from '../components/Cockpit/Cockpit';
// import WithClass from '../hoc/WithClass';
// import InformationInput from '../components/InfomationInput/InformationInput';

var moment = require('moment');
var nowTime = moment().format('YYYY年MM月DD日');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      memos: [],
      showMemos: true,
      toggleClicked: 0
    };
    this.handleMemoAdd = this.handleMemoAdd.bind(this);
    console.log('[App.js] Inside Constructor', props, this.state.toggleClicked);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()', this.state.memos)
    // console.log('[App.js]', this.state.memos)
  }

  // state = {   memos: [     {       id: '1',       name: 'Max',       position:
  // 'Gs',       content: 'hello world',       time: nowTime,       clear:
  // 'clear'     }, {       id: '1',       name: 'Max',       position: 'Gs',
  // content: 'hello world',       time: '#',       clear: 'clear'     }   ],
  // showMemos: false } tableInputHandler = (newMemo) => {   const memos =
  // [...this.state.memos]   memos.append(newMemo);   this.setState({memos:
  // memos}) }

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

    // const person = Object.assign({}, this.state.persons[personIndex]);
    memo.name = event.target.value;

    const memos = [...this.state.memos];
    memos[memoIndex] = memo;

    this.setState({memos: memos});
  }

  // appendMemosHandler = (props) => {   const memos = [...this.state.memos];
  // const memo = null;   memo.name = this.props.name.value;   memo.position =
  // this.props.position.value;   memo.content = this.props.content;   memo.time =
  // nowTime;   memo.clear = 'clear';   memos.append(memo); this.setState({memos:
  // memos}) }

  clearMemosHandler = (memoIndex) => {
    const memos = this.state.memos;
    memos.splice(memoIndex, 1);
    this.setState({ memos: memos });
  }

  toggleMemohandler = () => {
    const doesShow = this.state.showMemos;
    this.setState((prevState, props) => {
      return {
        showMemos: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  handleMemoAdd = () => {
    // React.findDOMNode関数で入力項目を得ることが出来る var id = e.index
    var name = this.refs.name
      .value;
    var position = this.refs.position
      .value;
    var content = this.refs.content
      .value;
    var time = nowTime;
    var clear = 'clear';

    // データ追加をイベント通知
    this.state.memos.push ({
      name: name,
      position: position,
      content: content,
      time: time,
      clear: clear
    });

    this.setState({
      memos: this.state.memos
    })
    // e.preventDefault(); // デフォルトの動作をキャンセル
    this.refs.name.value = "";
    this.refs.position.value = "";
    this.refs.content.value = "";
  }

  render() {

    console.log('[App.js] Inside render()', this.state.toggleClicked)

    const table = {
      margin: 'auto',
      width: '60%'
    }

    const tableTr = {
      backgroundColor: 'pink',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      fontSize: '20px',
      marginBottom: '12px'
    }

    let memos = null;
    let informationInput = null;
    // let btnClass = '';

    if (this.state.showMemos) {

      // InformationInput = (   <div>     <FormControl type="text" name="name"
      // value={this.memos.name}/>     <FormControl type="text" name="position"
      // value={this.memos.postion}/>     <FormControl type="text" name="content"
      // value={this.memos.content}/>     <FormControl name="time" value={nowTime}/>
      // </div> );

      memos = (
        <table style={table}>
          <thead>
            <tr className={classMemo.Memo} style={tableTr}>
              <th>name</th>
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

      informationInput = (
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
                  <input ref="name" type="text" name="name" />
                </td>
                <td>
                  <input ref="position" type="text" name="position" />
                </td>
                <td>
                  <input ref="content" type="content" name="content" />
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.handleMemoAdd} className="btn btn-primary">Append</button>
      </div>
      )
      // console.log(memos) btnClass = classes.Red;
    }

    return (
      // <StyleRoot>
    // <WithClass classes="classes.App" >
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showMemos={this.state.showMemos}
          memos={this.state.memos}
          clicked={this.toggleMemohandler}/>
          {informationInput}{memos}
      </div>
    // </WithClass>
      // </StyleRoot >); // return React.createElement('div', {className : 'App'}, // React.createElement('h1', null, 'does this work now?'))
    )
  }
}

// Memos.propTypes = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   age: PropTypes.number,
//   changed: PropTypes.func
// }

export default App;
