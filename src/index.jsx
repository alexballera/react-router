import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
require('./App.scss')

class Navigation extends Component {
  render () {
    return (
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/car'>Cars</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
      </ul>
    )
  }
}

class Home extends Component {
  render () {
    if (this.props.children) {
      return this.props.children
    } else {
      return (
        <div>
          <h1>Página Home</h1>
        </div>
      )
    }
  }
}

class Car extends Component {
  render () {
    return (
      <h1>Página Car</h1>
    )
  }
}

class About extends Component {
  render () {
    return (
      <h1>Página About</h1>
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
      <Route path='/car' component={Car} />
      <Route path='/about' component={About} />
      <Route path='/topics' component={Topics} />
    </div>
  </Router>,
  document.getElementById('container')
)
