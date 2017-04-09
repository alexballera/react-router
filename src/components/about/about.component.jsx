'use strict'
import './about.scss'

import React from 'react'
import {Helmet} from 'react-helmet'
import imagen from '../../static/images/disney-logo.jpg'

class About extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={'About Practica React Webpack'}
          meta={[
            {'name': 'about description', 'content': 'About Helmet application'}
          ]}
        />
        <h1 className='about-title'>Página Acerca</h1>
        <img src={imagen} />
      </div>
    )
  }
}
module.exports = About
