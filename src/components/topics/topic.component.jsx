'use strict'

import React from 'react'
import {Route, NavLink} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

// Estáticos
import styles from './topic.style'

const Topics = ({ match }) => (
  <ReactCSSTransitionGroup
    transitionName='animate'
    transitionAppear
    transitionAppearTimeout={1000}
    transitionEnter={false}
    transitionLeave={false}>
    <div style={styles.contanier} className='container'>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink to={`${match.url}/rendering`}>
            Rendering with React
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/components`}>
            Components
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/props-v-state`}>
            Props v. State
          </NavLink>
        </li>
      </ul>
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route exact path={match.url} render={() => (
        <h3 style={styles.subtitulo}>Please select a topic.</h3>
      )} />
    </div>
  </ReactCSSTransitionGroup>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
module.exports = Topics
