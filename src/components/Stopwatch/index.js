// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState(() => ({isTimerRunning: true}))
  }

  getStringifiedTime = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return (
      <h1 className="time">{`${stringifiedMinutes}:${stringifiedSeconds}`}</h1>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="stopwatch-card-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-image"
            />
            <p className="timer-heading">Timer</p>
          </div>
          {this.getStringifiedTime()}
          <div className="btn-container">
            <button
              onClick={this.onStartTimer}
              className="button green-bg"
              type="button"
            >
              Start
            </button>
            <button
              onClick={this.onStopTimer}
              className="button red-bg"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.onResetTimer}
              className="button yellow-bg"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
