import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Fuentes, estilos y optimizacion
import './index.scss'
import 'font-awesome/scss/font-awesome.scss'

// Materialize
import '../node_modules/materialize-css/sass/materialize.scss'
import '../node_modules/materialize-css/dist/js/materialize.js'
// import 'materialize-css'

import 'modernizr'

// Components
import Routers from './router.jsx'
import customDom from './static/js/custom-dom'

(() => {
  customDom()
  injectTapEventPlugin()
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
