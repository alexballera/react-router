'use strict'
import React from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Transition extends React.Component {
  render () {
    return (
      <ReactCSSTransitionGroup
        transitionName='animate'
        transitionAppear
        transitionAppearTimeout={3000}
        transitionEnter={false}
        transitionLeave={false} >
        this.props.content
      </ReactCSSTransitionGroup>
    )
  }
}
module.exports = Transition
