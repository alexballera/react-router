'use strict'
import $ from 'jquery'

export default () => {
  var DropDownFirst = $('.DropDown:first')
  var DropDownSecond = $('.DropDown').eq(1)
  DropDownFirst.css({
    height: '64px'
  })
  DropDownFirst.find('div:first div').css({
    color: 'white',
    textTransform: 'uppercase',
    lineHeight: '64px'
  })
  DropDownSecond.css({
    width: '100%'
  })
}
