'use strict'
import './about.scss'

import React from 'react'
import {Helmet} from 'react-helmet'
import imagen from '../../static/images/disney-logo.jpg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Anime from 'react-anime'

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
          <div className='titulo'>
            <Anime
              opacity={[0, 1]}
              translateY={'2rem'}
              delay={(e, i) => i * 3000}
              >
              <div className='"titulo'>
                <h1 className='about-title'>Página Acerca</h1>
              </div>
            </Anime>
            <img src={imagen} />
          </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
module.exports = About
