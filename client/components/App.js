import React, {Component} from 'react'
import TextInput from './TextInput'
import BarChart from './BarChart'
import PieChart from './PieChart'
import TitleTextColor from './TitleTextColor'
import {frequency} from '../api/API'
import {generateColorPalette} from '../utils/helpers'

export default class App extends Component {
  constructor(props) {
    super(props)

    // bind event handlers in the constructor so they are only bound once for every instance
    this._charFrequency = this._charFrequency.bind(this)
    this._getTitleText = this._getTitleText.bind(this)
    this._handleClick = this._handleClick.bind(this)

    this.state = {
      charFrequency : null,
      isBarChart: true,
      colors: null,
      titleText: null
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
     // return array of mapped objects
     let mapped = []
     for (let key in chars) {
        mapped.push({
           y: chars[key],
           label: `${key} (${chars[key]})`
        })
     }

     // sort by charCode
     mapped = mapped.sort((a, b) => a.label.charCodeAt(0) - b.label.charCodeAt(0))
     // set color by charCode, adding a char not in the db previously changes order
     mapped.forEach((e, i) => e['fill'] = this.state.colors[i])
     // sort by value and if values are equal sort by Character
     mapped = mapped.sort((a, b) => {
        if (a.y === b.y) {
           return a.label.charCodeAt(0) - b.label.charCodeAt(0)
        }
        return a.y - b.y
     })
     // Victory sorts by x; x is set here so that chars are sorted by value
     mapped.forEach((e, i) => e['x'] = i)
     this.setState({charFrequency: mapped})
  }

  _handleClick() {
    this.setState({isBarChart: !this.state.isBarChart})
  }

  _renderChart(charFrequency, isBarChart) {
    if (charFrequency && isBarChart) {
      return <BarChart {...this.state}/>
    } else if (charFrequency) {
      return <PieChart {...this.state}/>
    } else {
      return <h3 className="col-md-offset-2 col-md-8 text-center">Loading...</h3>
    }
  }

  _getTitleText(titleText) {
    this.setState({titleText})
  }

  _displayTitleText(titleText) {
    if(titleText) {
      return <TitleTextColor {...this.state}/>
    } else {
      return <h1 className="text-center App-title">Character Frequency</h1>
    }
  }

  render() {
    const {titleText, isBarChart, charFrequency} = this.state
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            {this._displayTitleText(titleText)}
            <TextInput
              setFrequency={this._charFrequency}
              getTitleText={this._getTitleText}
            />
            <button
              type="button"
              className="btn btn-success App-btnChart"
              onClick={this._handleClick}>
              {isBarChart ? "Pie Chart" : "Bar Chart"}
            </button>
            <h4 className='text-center App-Subtext'>Cumulative results from all users</h4>
          </div>
          {this._renderChart(charFrequency, isBarChart)}
        </div>
      </div>
    )
  }
}
