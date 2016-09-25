import React, {Component} from 'react'
import {VictoryBar} from 'victory'

export default class BarChart extends Component {

  _data(chars) {
     const mapped = []
     let count = 0
     const colors = this.props.colors
     for (let key in chars) {
        mapped.push({
           x: count + 1,
           y: chars[key],
           fill: colors[count],
           label: `${key}`
        })
        count++
     }
     return mapped
  }

  render() {
    return (
      <VictoryBar
        height={500}
        padding={75}
        style={{
          labels: {fontSize: 20}
        }}
        data={this._data(this.props.charFrequency)}
      />
    )
  }
}
