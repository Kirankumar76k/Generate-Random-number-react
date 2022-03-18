// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onRandomNum = () => {
    const k = this.getRandomNumber()

    this.setState(prevState => ({
      count: prevState.count + k,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onRandomNum}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
