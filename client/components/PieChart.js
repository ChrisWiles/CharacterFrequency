import React, {Component} from 'react'
import {colorList} from '../models/helpers'
import {VictoryPie} from 'victory'

export default class PieChart extends Component {
  render() {
    return (
      <VictoryPie
        innerRadius={140}
        colorScale={colorList}
        style={{labels: {fontSize: 6, fill: 'white'}}}
        data={this.props.charFrequency}
      />
    )
  }
}
