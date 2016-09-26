import React, {Component} from 'react'
import TextInput from './TextInput'
import BarChart from './BarChart'
import PieChart from './PieChart'
import {frequency} from '../models/API'
import {generateColorPalette} from '../models/helpers'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charFrequency : null,
      isBarChart: true,
      colors: null
    }
  }

  componentDidMount() {
     // Sync with Mongo DB on load
     frequency().then(obj => this._charFrequency(obj.data))
     
     // Sync with Mongo DB every 30secs
     const self = this
     setInterval(function() {
        frequency().then(obj => self._charFrequency(obj.data))
     }, 30000)

     this.setState({colors: generateColorPalette()})
  }

  _charFrequency(chars) {
     let mapped = []
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
        e['fill'] = this.state.colors[i]
     })
     this.setState({charFrequency: mapped})
  }

  _handleClick() {
    this.setState({isBarChart: !this.state.isBarChart})
  }

  _renderChart() {
    if(this.state.isBarChart) {
      return <BarChart {...this.state}/>
    } else {
      return <PieChart {...this.state}/>
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <h1 className='text-center'>Character Frequency</h1>
            <TextInput setFrequency={this._charFrequency.bind(this)}/>
            <button
              type="button"
              className="btn btn-success btnChart"
              onClick={this._handleClick.bind(this)}>
              {this.state.isBarChart ? "Pie Chart" : "Bar Chart"}
            </button>
          </div>
          {this.state.charFrequency ? this._renderChart() : <h1>No Data</h1>}
        </div>
      </div>
    )
  }
}
