'use strict'
import $ from 'jquery'

export default () => {
  $(document).ready(() => {
    // $('.button-collapse').sideNav()
    console.log($('.dropdown-button'))
    $('.dropdown-button').dropdown(
      { hover: true }
    )
  })
}
