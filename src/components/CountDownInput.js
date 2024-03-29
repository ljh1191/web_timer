import React, { Component } from "react";
import "./CountDownInput.css";

class CountDownInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempDuration: this.props.duration
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateDuration = this.updateDuration.bind(this);
  }

  handleInputChange(e) {
    let duration = parseInt(e.target.value);

    if (duration > 0) {
      this.setState({
        ...this.state,
        tempDuration: duration
      });
    }
  }

  updateDuration() {
    var new_duration = this.state.tempDuration;
    this.props.updateDuration(new_duration);
  }

  render() {
    return (
      <div className="Countdown-Input">
        <div className="input-title">
          <h2>Set the duration</h2>
        </div>
        <div className="d-flex form-group duration-form">
          <label className="duration-label">Duration (min):</label>
          <input
            onChange={this.handleInputChange}
            value={this.state.tempDuration}
            className="flex-fill form-control duration-input"
            type="number"
          />
        </div>
        <div className="submission-button d-flex form-group">
          <button onClick={this.updateDuration} className="btn btn-primary">
            Set Duration
          </button>
        </div>
        {/* <div class="btn-group" role="group" aria-label="Basic example">
          <button className="btn btn-outline-dark" value="10">10 seconds</button>
          <button className="btn btn-outline-dark" value="60">1 minutes</button>
          <button className="btn btn-outline-dark" value="300">5 minutes</button>
          <button className="btn btn-outline-dark" value="600">10 minutes</button>
          <button className="btn btn-outline-dark" value="1800">30 minutes</button>
          <button className="btn btn-outline-dark" value="3600">1 hours</button>
        </div> */}
      </div>
    );
  }
}

export default CountDownInput;
