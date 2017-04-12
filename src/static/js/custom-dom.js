'use strict'

export default () => {
  var div = document.createElement('div')
  div.setAttribute('id', 'app')
  document.body.prepend(div)
}
