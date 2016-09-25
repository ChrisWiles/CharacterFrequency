import React, {Component} from 'react'
import TextInput from './TextInput'
import BubbleChart from './BubbleChart'
import {frequency} from '../models/API'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frequency : {}
    }
  }

  componentDidMount() {

    // Sync with Mongo DB on load
    frequency()
      .then(obj => this._frequency(obj.data))
  }

  _frequency(chars) {
    this.setState({frequency: chars})
    console.log(this.state.frequency)
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <h1 className='text-center'>Character Frequency</h1>
            <TextInput setFrequency={this._frequency.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}
