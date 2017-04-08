'use strict'

export default () => {
  var div = document.createElement('div')
  div.setAttribute('id', 'app')
  document.body.prepend(div)

  var head = document.head
  var linkStyle = head.querySelector('link[href="style.css"]')
  var linkIcon = document.createElement('link')
  linkIcon.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons')
  linkIcon.setAttribute('rel', 'stylesheet')
  head.insertBefore(linkIcon, linkStyle)
}
