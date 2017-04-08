import React from 'react'
import {render} from 'react-dom'

// Jquery
window.jQuery = require('jquery')
window.$ = require('jquery')

// Fuentes, estilos y optimizacion
import './index.scss'
import 'font-awesome/scss/font-awesome.scss'
import '../node_modules/materialize-css/sass/materialize.scss'
import 'materialize-css'
import 'modernizr'

// Components
import Routers from './router.jsx'
import prueba from './static/js/jquery.prueba'
import customDom from './static/js/custom-dom'

(() => {
  customDom()
  prueba()
})()

render(
  <Routers />,
  document.getElementById('app')
)
