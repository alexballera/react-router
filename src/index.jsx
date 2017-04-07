import React from 'react'
import {render} from 'react-dom'
import Routers from './router.jsx'
window.jQuery = require('jquery')
window.$ = require('jquery')
import './index.scss'
import 'font-awesome/scss/font-awesome.scss'
import '../node_modules/materialize-css/sass/materialize.scss'
import 'materialize-css'
import prueba from './static/js/jquery.prueba'

(() => {
  var div = document.createElement('div')
  div.setAttribute('id', 'app')
  document.body.prepend(div)

  prueba()
})()

render(
  <Routers />,
  document.getElementById('app')
)
