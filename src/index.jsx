import React from 'react'
import {render} from 'react-dom'
import Routers from './router.jsx'
import './index.scss'
import './static/fonts/darkenstone/darkenstone-fonts.scss'
import 'font-awesome/scss/font-awesome.scss'

(() => {
  var div = document.createElement('div')
  div.setAttribute('id', 'container')
  document.body.prepend(div)
})()

render(
  <Routers />,
  document.getElementById('container')
)
