import React, {Component} from 'react'

export default class TitleTextColor extends Component {

  _mapped() {
    const {charFrequency, titleText, colors} = this.props
    // set each char to match the color of the char in charFrequency
    return titleText.split('').map((char, i) => {
      const fill = charFrequency[char] ? charFrequency[char].fill : 'white'
      return <span key={i} style={{color: fill}}>{char}</span>
    })
  }

  render() {
    return (
      <h1 className='text-center'>{this._mapped()}</h1>
    )
  }
}
