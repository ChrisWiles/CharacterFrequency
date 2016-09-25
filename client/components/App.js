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
      colors: false
    }
  }

  componentDidMount() {
    // Sync with Mongo DB on load
    frequency().then(obj => this._frequency(obj.data))
    // get random colors
    this.setState({colors: generateColorPalette()})
  }

  _frequency(chars) {
    this.setState({charFrequency: chars})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <h1 className='text-center'>Character Frequency</h1>
            <TextInput setFrequency={this._frequency.bind(this)}/>
            {this.state.charFrequency ? <BarChart {...this.state}/> : <h1>No Data</h1>}
          </div>
        </div>
      </div>
    )
  }
}
