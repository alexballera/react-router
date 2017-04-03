'use strict'
import React from 'react'
import './home.scss'

class Home extends React.Component {
  render () {
    if (this.props.children) {
      return this.props.children
    } else {
      return (
        <div className='home'>
          <h1>Página Home</h1>
        </div>
      )
    }
  }
}
module.exports = Home
