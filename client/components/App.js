import React, {Component} from 'react'
import TextInput from './TextInput'
import BarChart from './BarChart'
import {frequency} from '../models/API'
import {generateColorPalette} from '../models/helpers'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charFrequency : false,
      colors: false,
      isBarChart: true
    }
  }

  componentDidMount() {
    // Sync with Mongo DB on load
    frequency().then(obj => this._frequency(obj.data))
    // Live Update

    // get random colors
    this.setState({colors: generateColorPalette()})
  }

  _frequency(chars) {
    this.setState({charFrequency: chars})
  }

  _handleClick() {
    this.setState({isBarChart: !this.state.isBarChart})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <h1 className='text-center'>Character Frequency</h1>
            <TextInput setFrequency={this._frequency.bind(this)}/>
            <button type="button" className="btn btn-success btnChart" onClick={this._handleClick.bind(this)}>Pie Chart</button>
          </div>
          {this.state.charFrequency ? <BarChart {...this.state}/> : <h1>No Data</h1>}
        </div>
      </div>
    )
  }
}
