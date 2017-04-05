import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Home from './home/home.component.jsx'
import Blog from './blog/blog.component.jsx'
import About from './about/about.component.jsx'
import './index.scss'

(() => {
  var div = document.createElement('div')
  div.setAttribute('id', 'container')
  document.body.prepend(div)
})()

class Navigation extends Component {
  render () {
    return (
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
      </ul>
    )
  }
}

const Topics = ({ match }) => (
  <div>
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
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

render(
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/topics' component={Topics} />
      <Route path='/blog' component={Blog} />
      <Route path='/about' component={About} />
    </div>
  </Router>,
  document.getElementById('container')
)
