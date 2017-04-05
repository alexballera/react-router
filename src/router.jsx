'use strict'
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navigation from './components/navigation/navigation.component.jsx'
import Home from './components/home/home.component.jsx'
import Blog from './components/blog/blog.component.jsx'
import About from './components/about/about.component.jsx'
import Topics from './components/topics/topic.component.jsx'

class Routers extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Navigation />
          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/topics' component={Topics} />
          <Route path='/blog' component={Blog} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}
export default Routers
