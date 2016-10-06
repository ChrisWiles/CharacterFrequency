import React, {Component, PropTypes} from 'react'
import {frequency} from '../api/API'

class TextInput extends Component {
   constructor(props) {
      super(props)
      this._handleSubmit = this._handleSubmit.bind(this)
      this.state = {
         term: ''
      }
   }

   _handleSubmit(event) {
      const term = this.state.term
      event.preventDefault()
         // dont sync while holding enter key
      if (term) {
         // Sync with Mongo DB
         frequency(term)
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

TextInput.propTypes = {
  setFrequency: PropTypes.func.isRequired,
  getTitleText: PropTypes.func.isRequired
}

export default TextInput
