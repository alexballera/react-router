'use strict'
import React from 'react'
import { DropDownMenu, MenuItem } from 'material-ui'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: 2}
  }
  componentDidMount () {
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

  handleChange (event, index, value) {
    this.setState({value})
  }
  render () {
    return (
      <DropDownMenu
        className='DropDown'
        value={this.state.value}
        onChange={this.handleChange}
      >
        <MenuItem value={1} label='Home' primaryText='Home' className='DropDownItem' containerElement={<NavLink to='/' />} />
        <MenuItem value={2} label='Topics' primaryText='Topics' className='DropDownItem' containerElement={<NavLink to='/topics' />} />
        <MenuItem value={3} label='About' primaryText='About' className='DropDownItem' containerElement={<NavLink to='/about' />} />
        <MenuItem value={4} label='Blog' primaryText='Blog' className='DropDownItem' containerElement={<NavLink to='/blog' />} />
      </DropDownMenu>
    )
  }
}
module.exports = Dropdown
