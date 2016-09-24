import React, {Component} from 'react'
import TextInput from './TextInput'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    // get char Freq from mongo
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <h1 className='text-center'>Character Frequency</h1>
            <TextInput/>
          </div>
        </div>
      </div>
    )
  }
}
