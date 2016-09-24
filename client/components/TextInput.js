import React, {Component} from 'react'
import {frequency} from '../models/API'

export default class TextInput extends Component {
   constructor(props) {
      super(props)
      this.state = {
         term: ''
      }
   }

   _handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.term)

      // Sync with Mongo DB
      frequency(this.state.term).then(obj => {
        console.log(obj.data)
      })
      this.setState({term: ''})
   }

   _onInputChange(value) {
      this.setState({
         term: value.substr(0, 140)
      })
   }

   render() {
      return (
         <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
            <input className="form-control" value={this.state.term} placeholder="140 Character Limit" onChange={event => this._onInputChange(event.target.value)}/>
         </form>
      )
   }
}
