import React, {Component} from 'react'

export default class TitleTextColor extends Component {

  _color(charFrequency, char) {
    // set each char to match the color of the char in charFrequency
    const color = charFrequency.filter(ele => ele.label[0] === char.toLowerCase())
    // if char isn't in DB yet set to white
    return color.length ? color[0].fill : 'white'
  }

   _mapped({charFrequency, titleText, colors}) { // Mmm Destructuring
      return titleText.split('').map((char, i) => {
         const color = this._color(charFrequency, char)
         return (
           <span key={i} style={{color}}>
             {char === ' ' ? '_' : char}
           </span>
         )
      })
   }

   render() {
      return (
         <h1 className="title text-center">
           {this._mapped(this.props)}
         </h1>
      )
   }
}
