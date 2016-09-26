import React, {Component} from 'react'

export default class TitleTextColor extends Component {

  _mapped() {
    const {charFrequency, titleText, colors} = this.props
    // set each char to match the color of the char in charFrequency
    return titleText.split('').map((char, i) => {
      let color = charFrequency.filter(ele => ele.label[0] === char.toLowerCase())
      color = color.length ? color[0].fill : 'white'
      return <span key={i} style={{color}}>{char}</span>
    })
  }

  render() {
    return (
      <h1 className='title text-center'>{this._mapped()}</h1>
    )
  }
}
