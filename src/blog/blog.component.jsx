'use strict'

import React from 'react'
import './blog.scss'
import {Helmet} from 'react-helmet'

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
        <h1 className='blog-title'>Página Blog</h1>
      </div>
    )
  }
}

module.exports = Blog
