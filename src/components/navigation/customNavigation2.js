'use strict'
import $ from 'jquery'

export default () => {
  $(document).ready(() => {
    const body = $('body')
    const wraper = body.find('.nav-wrapper')
    const dropdownButton = wraper.find('.dropdown-button')
    const dropdownContent = dropdownButton.siblings('#dropdown1')

    const buttonCollapse = wraper.find('.button-collapse')
    const sideNav = wraper.find('.side-nav')

    // Dropdown
    dropdownButton.removeClass('active')

    dropdownButton.hover(() => {
      Dropdown()
    })

    dropdownButton.click(() => {
      Dropdown()
    })

    var Dropdown = () => {
      dropdownContent.addClass('active')
      dropdownContent.css({
        position: 'absolute',
        top: '64px',
        opacity: 1,
        transition: 'all 1s ease'
      })
      dropdownContent.css('display', 'block')
    }

    dropdownContent.mouseleave(() => {
      dropdownContent.css('display', 'none')
    })

    // Side Nav
    buttonCollapse.hover(() => {
      sideNavbar()
    })

    buttonCollapse.click(() => {
      sideNavbar()
    })

    var sideNavbar = () => {
      sideNav.css({
        left: '300px',
        transition: 'all 1s ease'
      })
    }

    body.click(() => {
      dropdownContent.css('display', 'none')
      sideNav.css('left', 0)
    })
  })
}
