import React, { Component } from "react";
import "./App.css";

//Logic components
import TimeList from "./containers/TimeListContainer";
import Timer from "./containers/TimerContainer";
import CountDown from "./components/CountDown";

//import constants
import { TIMER, COUNTDOWN } from "./constants";

// Redux Store
import { store } from "./store";
import { Provider } from "react-redux";

//redux test
import { runTest } from "./actions";

/**
App Component
root component of the application
**/
class App extends Component {
  constructor(props) {
    super(props);

    //redux test
    store.dispatch(runTest());

    this.state = {
      mode: TIMER
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(e) {
    var checked = this.refs.toggle.checked;
    console.log(checked);

    if (checked === true) {
      this.setState({
        ...this.state,
        mode: TIMER
      });
    } else if (checked === false) {
      this.setState({
        ...this.state,
        mode: COUNTDOWN
      });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App d-flex flex-column container">
          <div className="Header">
            <h1>Web Timer App</h1>
          </div>
          <div className="d-flex flex-fill justify-content-center flex-column">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div onClick={this.handleChanges}>
                  <input
                    type="checkbox"
                    defaultChecked="checked"
                    data-toggle="toggle"
                    data-on="Timer"
                    ref="toggle"
                    data-off="Countdown"
                  />
                </div>
                <div className="time-container">
                  {this.state.mode === TIMER && <Timer />}
                  {this.state.mode === COUNTDOWN && <CountDown />}
                </div>
                <div className="times-list">
                  {this.state.mode === TIMER && <TimeList />}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-grow-1" />
        </div>
      </Provider>
    );
  }
}

export default App;
