'use strict'

import React from 'react'
import './blog.scss'
import {Helmet} from 'react-helmet'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Anime from 'react-anime'

class Blog extends React.Component {
  render () {
    return (
      <div className='container'>
        <Helmet
          title={'Blog Practica React Webpack'}
          meta={[
            {'name': 'blog description', 'content': 'Blog Helmet application'}
          ]}
        />
        <ReactCSSTransitionGroup
          transitionName='animate'
          transitionAppear
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false} >
          <Anime
            opacity={[0, 1]}
            translateY={'2rem'}
            delay={(e, i) => i * 3000}
            >
            <h1 className='blog-title titulo'>Página Blog</h1>
          </Anime>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

module.exports = Blog
