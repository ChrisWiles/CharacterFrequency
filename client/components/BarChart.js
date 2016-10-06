import React, {Component, PropTypes} from 'react'
import {VictoryBar} from 'victory'

const style = {
   labels: {
      fontSize: 14,
      fill: 'white'
   }
}

 class BarChart extends Component {

  componentDidMount() {
    // get svg from DOM and adjust viewBox
    const shape = document.getElementsByTagName("svg")
    shape[0].setAttribute("viewBox", "0 0 1000 1000")
  }

  render() {
    return (
      <VictoryBar
        scale={"linear"} // "linear", "time", "log", "sqrt"
        horizontal={true}
        height={900}
        width={900}
        padding={5}
        style={style}
        data={this.props.charFrequency}
      />
    )
  }
}

BarChart.propTypes = {
  charFrequency: PropTypes.object.isRequired
}

export default BarChart
