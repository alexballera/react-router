'use strict'

import React from 'react'
import {
  NavLink,
  Link
} from 'react-router-dom'
import {
  Drawer,
  MenuItem,
  Paper,
  IconButton,
  FlatButton,
  AppBar
} from 'material-ui'
import { Row } from 'react-materialize'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
// import './navigation.scss'
import imagen from '../../static/images/disney-logo.jpg'
import Dropdown from './dropdown.component.jsx'
const style = {
  menuItem: {
    display: 'inline-block',
    height: '48px',
    lineHeight: '48px'
  },
  customWidth: {
    width: 200
  },
  ButtonStyle: {
    color: '#fff',
    height: '64px',
    lineHeight: '64px'
  }
}

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  render () {
    return (
      <Paper>
        <Row className='contenedor'>
          <AppBar
            title={<img src={imagen} />}
            className='navbar-container'
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementLeft={<IconButton><MenuIcon /></IconButton>}
            style={{height: '64px'}}
            iconElementRight={
              <div className='navbar-desktop'>
                <Dropdown />
                <FlatButton label='Home' style={style.ButtonStyle} containerElement={<Link to='/' />} />
                <FlatButton label='Topics' style={style.ButtonStyle} containerElement={<NavLink to='/topics' />} />
                <FlatButton label='About' style={style.ButtonStyle} containerElement={<NavLink to='/about' />} />
                <FlatButton label='Blog' style={style.ButtonStyle} containerElement={<NavLink to='/blog' />} />
              </div>
            }
          />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <Dropdown />
            <MenuItem onTouchTap={this.handleClose} primaryText='Home' style={style.menuItem} containerElement={<NavLink to='/' />} />
            <MenuItem onTouchTap={this.handleClose} primaryText='Topics' style={style.menuItem} containerElement={<NavLink to='/topics' />} />
            <MenuItem onTouchTap={this.handleClose} primaryText='About' style={style.menuItem} containerElement={<NavLink to='/about' />} />
            <MenuItem onTouchTap={this.handleClose} primaryText='Blog' style={style.menuItem} containerElement={<NavLink to='/blog' />} />
          </Drawer>
        </Row>
      </Paper>
    )
  }
}
export default Navigation
