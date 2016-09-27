import React, {Component} from 'react'
import {frequency} from '../models/API'

export default class TextInput extends Component {
   constructor(props) {
      super(props)
      this.state = {
         term: ''
      }
      this._handleSubmit = this._handleSubmit.bind(this)
   }

   _handleSubmit(event) {
      event.preventDefault()
      // dont sync while holding enter key
      if (this.state.term) {
         // Sync with Mongo DB
         frequency(this.state.term)
            .then(obj => this.props.setFrequency(obj.data))

         this.setState({term: ''})
      }
   }

   _onInputChange(value) {
      this.setState({term: value.substr(0, 40)})
      this.props.getTitleText(value.substr(0, 40))
   }

   render() {
      return (
         <form className="TextInput-form comment-form" onSubmit={this._handleSubmit}>
            <input
              className="form-control"
              value={this.state.term}
              placeholder="40 Character Limit"
              onChange={event => this._onInputChange(event.target.value)}
            />
         </form>
      )
   }
}
