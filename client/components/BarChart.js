import React, {Component} from 'react'
import {VictoryBar} from 'victory'

export default class BarChart extends Component {

  componentDidMount() {
    // get svg from DOM and adjust viewBox
    const shape = document.getElementsByTagName("svg")
    shape[0].setAttribute("viewBox", "55 0 900 900")
  }


  render() {
    return (
      <VictoryBar
        scale={"linear"} // "linear", "time", "log", "sqrt"
        horizontal={true}
        height={900}
        width={900}
        padding={5}
        style={{labels: {fontSize: 14, fill: 'white'}}}
        data={this.props.charFrequency}
      />
    )
  }
}
