'use strict'

import React from 'react'
import {Helmet} from 'react-helmet'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Anime from 'react-anime'

// Estáticos
import './blog.scss'

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
            translateY={'1rem'}
            delay={(e, i) => i * 1000}
            >
            <h1 className='blog-title titulo'>Contáctame</h1>
          </Anime>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolorem mollitia, quam pariatur vero quia tempore minus, nam,
          esse quidem perferendis totam iste saepe soluta reprehenderit
          consectetur iusto. Praesentium, dolore, minima?</p>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

module.exports = Blog
