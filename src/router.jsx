'use strict'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  browserHistory
} from 'react-router-dom'

// Componentes
import Navigation from './components/navigation/navigation.component.jsx'

// Data
import data from './data/navigation.data'

// Vistas
import Home from './components/home/home.component.jsx'
import Topics from './components/topics/topic.component.jsx'
import About from './components/about/about.component.jsx'
import Contactame from './components/blog/blog.component.jsx'
import NotFound from './components/NotFound/NotFound.component.jsx'

class Routers extends React.Component {
  render () {
    return (
      <Router history={browserHistory} >
        <div>
          <Navigation />
          <Switch>
            <Route path={data.menu.item1.url} component={Home} exact />
            <Route path={data.menu.item2.url} component={Topics} />
            <Route path={data.menu.item3.url} component={About} />
            <Route path={data.menu.item4.url} component={Contactame} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Routers
