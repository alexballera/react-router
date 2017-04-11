'use strict'
import $ from 'jquery'

export default () => {
  $(document).ready(() => {
    const body = $('body')
    const wraper = body.find('.nav-wrapper')
    const dropdownButton = wraper.find('.dropdown-button')
    const dropdownUl = dropdownButton.siblings('#dropdown1')

    const buttonCollapse = wraper.find('.button-collapse')
    const sideNav = wraper.find('.side-nav')

    // Dropdown
    dropdownButton.removeClass('active')
    dropdownButton.hover(() => {
      dropdownUl.addClass('active')
      dropdownUl.css({
        display: 'block',
        position: 'absolute',
        top: '64px',
        opacity: 1
      })
    })

    // Side Nav
    buttonCollapse.hover(() => {
      sideNav.css({
        left: '300px',
        transition: 'all 1s ease'
      })
    })
    body.click(() => {
      dropdownUl.css('display', 'none')
      sideNav.css('left', 0)
    })
  })
}
