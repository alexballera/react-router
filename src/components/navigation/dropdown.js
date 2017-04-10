'use strict'
import $ from 'jquery'

export default () => {
  $(document).ready(() => {
    const wraper = $('.nav-wrapper')
    const home = wraper.find('#home')
    home.removeClass('active')
    wraper.find('.brand-logo').removeClass('active')
    var dropdown = home.siblings('#dropdown1')
    home.hover(() => {
      dropdown.addClass('active')
      dropdown.css({
        display: 'block',
        width: '109px',
        position: 'absolute',
        top: '64px',
        left: '1037.34px',
        opacity: 1
      })
    })
    $('body').click(() => {
      dropdown.css('display', 'none')
    })
  })
}
