import React from 'react'
import {render} from 'react-dom'
import Routers from './router.jsx'
import './index.scss'
import 'font-awesome/scss/font-awesome.scss'
import '../node_modules/materialize-css/sass/materialize.scss'

(() => {
  var div = document.createElement('div')
  div.setAttribute('id', 'container')
  document.body.prepend(div)
})()

render(
  <Routers />,
  document.getElementById('container')
)
