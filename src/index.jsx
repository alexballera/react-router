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
// import Routers from './router-ghpages.jsx'
import Routers from './router.jsx'
import CustomDOM from './static/js/custom-dom'

(() => {
  injectTapEventPlugin()
  CustomDOM()
  WebFont()
})()

const App = () => (
  <MuiThemeProvider>
    <Routers />
  </MuiThemeProvider>
)

render(
  <App />,
  document.getElementById('app')
  )
