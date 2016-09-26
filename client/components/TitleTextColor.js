import React, {Component} from 'react'

export default class TitleTextColor extends Component {

  _mapped(titleText, colors) {
    return titleText.split('').map((char, i) => {
      return <span key={i} style={{color: colors[i]}}>{char}</span>
    })
  }

  render() {
    const {charFrequency, titleText, colors} = this.props
    console.log(titleText,colors)
    // color: #00ff00;
    return (
      <h1 className='text-center'>{this._mapped(titleText, colors)}</h1>
    )
  }
}
