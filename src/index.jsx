import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

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

class Navigation extends Component {
  render () {
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/car'>Cars</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    )
  }
}

render(
  <Router>
    <div>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route path='/car' component={Car} />
      <Route path='/about' component={About} />
    </div>
  </Router>,
  document.getElementById('container')
)
