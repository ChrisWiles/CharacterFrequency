import React, {Component, PropTypes} from 'react'

class TitleTextColor extends Component {

  _color(charFrequency, char) {
    // set each char to match the color of the char in charFrequency
    const color = charFrequency.filter(ele => ele.label[0] === char.toLowerCase())
    // if char isn't in DB yet set to white
    return color.length ? color[0].fill : 'white'
  }

   _mapped({charFrequency, titleText}) { // Mmm Destructuring
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

TitleTextColor.propTypes = {
  charFrequency: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  titleText: PropTypes.func.isRequired
}

export default TitleTextColor
