'use strict'
import React from 'react'
import {BrowserRouter as Router, Route, Switch, browserHistory} from 'react-router-dom'

// Componentes
import About from './components/about/about.component.jsx'
import Blog from './components/blog/blog.component.jsx'
import Home from './components/home/home.component.jsx'
import Navigation from './components/navigation/navigation.component.jsx'
import Topics from './components/topics/topic.component.jsx'
import NotFound from './components/NotFound/NotFound.component.jsx'

var UrlGit = '/react-webpack-materialize/'

class Routers extends React.Component {
  render () {
    return (
      <Router history={browserHistory} >
        <div>
          <Navigation />
          <Switch>
            <Route exact path={UrlGit} component={Home} />
            <Route path="{UrlGit} + 'topics'" component={Topics} />
            <Route path="{UrlGit} + 'blog'" component={Blog} />
            <Route path="{UrlGit} + 'about'" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Routers
