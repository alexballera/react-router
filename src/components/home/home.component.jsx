'use strict'
import React from 'react'
import './home.scss'
import imagen from '../../static/images/disney-logo.jpg'
import {Helmet} from 'react-helmet'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Componente1 from './components/component1.jsx'

class Home extends React.Component {
  render () {
    if (this.props.children) {
      return this.props.children
    } else {
      return (
        <div className='container' >
          <Helmet
            title={'Practica React Webpack'}
            meta={[
                {'name': 'home description', 'content': 'Home Helmet application'}
            ]}
            />
          <ReactCSSTransitionGroup
            transitionName='animate'
            transitionAppear
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}>
            <div className='titulo cssgradients'>
              <h1>Pagina Home</h1>
              <i className='fa fa-telegram' />
              <h2 className='sub-titulo' >Subtitulo agregando estilo</h2>
              <img src={imagen} />
            </div>
            <Componente1 />
          </ReactCSSTransitionGroup>
        </div>
      )
    }
  }
}
module.exports = Home
