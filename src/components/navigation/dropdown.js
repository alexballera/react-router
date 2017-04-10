'use strict'
import $ from 'jquery'

export default () => {
  $(document).ready(() => {
    const wraper = $('.nav-wrapper')
    const dropdownButton = wraper.find('.dropdown-button')
    dropdownButton.removeClass('active')
    wraper.find('.brand-logo').removeClass('active')
    var dropdownUl = dropdownButton.siblings('#dropdown1')
    dropdownButton.hover(() => {
      dropdownUl.addClass('active')
      dropdownUl.css({
        display: 'block',
        width: '109px',
        position: 'absolute',
        top: '64px',
        left: '1037.34px',
        opacity: 1
      })
    })
    $('body').click(() => {
      dropdownUl.css('display', 'none')
      dropdownUl.removeClass('active')
    })
  })
}
