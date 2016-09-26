import React, {Component} from 'react'
import {colorList} from '../models/helpers'
import {VictoryBar, VictoryPie} from 'victory'

export default class BarChart extends Component {

  componentDidMount() {
    // get svg from DOM and adjust viewBox
    const shape = document.getElementsByTagName("svg")
    shape[0].setAttribute("viewBox", "55 0 900 900")
  }

  _data(chars) {
     let mapped = []
     const colors = this.props.colors
     for (let key in chars) {
        mapped.push({
           y: chars[key],
           label: `${key} (${chars[key]})`
        })
     }

     // sort by value and if values are equal sort by Character
     mapped = mapped.sort((a, b) => {
        if (a.y === b.y) {
           return a.label.charCodeAt(0) - b.label.charCodeAt(0)
        }
        return a.y - b.y
     })

     // once sorted the x value can be attached which Victory only sorts by
     mapped.forEach((e, i) => {
        e['x'] = i
        e['fill'] = colors[i]
     })
     return mapped
  }

  _renderChart(isBar) {
    if(isBar) {
      return (
        <VictoryBar
          scale={"linear"} // "linear", "time", "log", "sqrt"
          horizontal={true}
          height={900}
          width={900}
          padding={5}
          style={{labels: {fontSize: 14, fill: 'white'}}}
          data={this._data(this.props.charFrequency)}
        />
      )
    } else {
      return (
        <VictoryPie
          innerRadius={140}
          colorScale={colorList}
          style={{labels: {fontSize: 6, fill: 'white'}}}
          data={this._data(this.props.charFrequency)}
        />
      )
    }
  }

  render() {
    return (
      <div>
        {this._renderChart(this.props.isBarChart)}
      </div>
    )
  }
}
