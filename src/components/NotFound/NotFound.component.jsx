'use strict'
import React from 'react'

const NotFound = ({ location }) => (
  <div>
    <h3>No se encuentra <code>{location.pathname}</code></h3>
  </div>
)
module.exports = NotFound
