'use strict'
import './about.scss'

import React from 'react'
import {Helmet} from 'react-helmet'
import imagen from '../../static/images/disney-logo.jpg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class About extends React.Component {
  render () {
    return (
      <div className='container'>
        <Helmet
          title={'About Practica React Webpack'}
          meta={[
            {'name': 'about description', 'content': 'About Helmet application'}
          ]}
        />
        <ReactCSSTransitionGroup
          transitionName='animate'
          transitionAppear
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false} >
          <h1 className='about-title'>Página Acerca</h1>
          <img src={imagen} />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
module.exports = About
