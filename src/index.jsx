import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import 'modernizr'

/**
 * Fuentes y estilos
 * https://github.com/typekit/webfontloader
 */
import './index.scss'
import WebFont from './static/js/WebFont'

// Materialize
import '../node_modules/materialize-css/sass/materialize.scss'
import '../node_modules/materialize-css/dist/js/materialize.js'

// Components
import Routers from './router.jsx'
import CustomDOM from './static/js/custom-dom'
import Loading from './components/spinner/spinner.component.jsx'

(() => {
  injectTapEventPlugin()
  CustomDOM()
  WebFont()
})()

/* const App = () => (
  <MuiThemeProvider>
    <Routers />
  </MuiThemeProvider>
) */
class App extends React.Component {
  componentWillMount () {
    console.log('Se ejecuta antes de inyectar el DOM, estoy en navigation.component')
    Loading()
  }

  componentDidMount () {
    console.log('Se ejecuta luego de inyectar el DOM, ideal para AJAX y agregar JQuery')
  }

  render () {
    return (
      <MuiThemeProvider>
        <Routers />
      </MuiThemeProvider>
    )
  }
}

setTimeout(() => {
  render(
    <App />,
    document.getElementById('app')
  )
}, 1000)
