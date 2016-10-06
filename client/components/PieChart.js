import React, {Component} from 'react'
import {colorList} from '../utils/helpers'
import {VictoryPie, VictoryTooltip, VictoryVoronoiTooltip} from 'victory'

const tooltipProps = {
   x: 0,
   y: 0,
   cornerRadius: 5,
   orientation: "top"
}

const style = {
   labels: {
      fontSize: 25,
      fill: 'black'
   }
}

export default class PieChart extends Component {
  render() {
    return (
      <VictoryPie
        height={850}
        width={850}
        labelComponent={<VictoryTooltip {...tooltipProps}/>}
        innerRadius={250}
        colorScale={colorList}
        style={style}
        data={this.props.charFrequency}
      />
    )
  }
}
