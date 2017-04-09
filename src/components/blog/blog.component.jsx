'use strict'

import React from 'react'
import './blog.scss'
import {Helmet} from 'react-helmet'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Blog extends React.Component {
  render () {
    return (
      <div>
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
          <h1 className='blog-title'>Página Blog</h1>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

module.exports = Blog
