'use strict'

// Dependencias
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Scroll from 'react-scroll'
import {
  Divider,
  Drawer,
  IconButton,
  MenuItem
} from 'material-ui'

// Datos
import data from '../../data/navigation.data'

// Estáticos
import ArrowForward from 'material-ui/svg-icons/navigation/chevron-right'
import styles from './styles.jsx'
import './styles.scss'

const ScrollLink = Scroll.Link
const scrollSpy = Scroll.scrollSpy

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      value: 1
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.displayHome = this.displayHome.bind(this)
  }

  componentDidMount () {
    scrollSpy.update()
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  handleChange () {
    this.setState({value: 2})
  }

  displayHome () {
    this.setState({value: 1})
  }

  render () {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
        onChange={this.handleChange}
      >
        { this.state.value < 2 ? (
          <MenuItem
            primaryText={data.menu.item1.title}
            style={styles.menuItem}
            rightIcon={<IconButton><ArrowForward /></IconButton>}
            menuItems={
            [
              <MenuItem
                onTouchTap={this.handleClose}
                primaryText={data.dropdownMenuScrollSections.item1.title}
                style={styles.menuItem}
                containerElement={
                  <ScrollLink activeClass='active'to='section1' spy smooth duration={500} />
                  }
                />,
              <MenuItem
                onTouchTap={this.handleClose}
                primaryText={data.dropdownMenuScrollSections.item2.title}
                style={styles.menuItem}
                containerElement={
                  <ScrollLink activeClass='active' to='section2' spy smooth duration={500} />
                  }
                />,
              <MenuItem
                onTouchTap={this.handleClose}
                primaryText={data.dropdownMenuScrollSections.item3.title}
                style={styles.menuItem}
                containerElement={
                  <ScrollLink activeClass='active' to='section3' spy smooth duration={500} />
                  }
                />,
              <MenuItem
                onTouchTap={this.handleClose}
                primaryText={data.dropdownMenuScrollSections.item4.title}
                style={styles.menuItem}
                containerElement={
                  <ScrollLink activeClass='active' to='section4' spy smooth duration={500} />
                  }
                />
            ]
            }
            />
          ) : (
            <MenuItem
              onTouchTap={this.handleClose}
              primaryText={data.menu.item1.title}
              style={styles.menuItem}
              containerElement={<Link to={data.menu.item1.url} />}
              onClick={this.displayHome}
              />
          )}
        <Divider />
        <MenuItem
          onTouchTap={this.handleClose}
          onClick={this.handleChange}
          primaryText={data.menu.item2.title}
          style={styles.menuItem}
          containerElement={<NavLink to={data.menu.item2.url} />}
          />
        <Divider />
        <MenuItem
          onTouchTap={this.handleClose}
          onClick={this.handleChange}
          primaryText={data.menu.item3.title}
          style={styles.menuItem}
          containerElement={<NavLink to={data.menu.item3.url} />}
          />
        <Divider />
        <MenuItem
          onTouchTap={this.handleClose}
          onClick={this.handleChange}
          primaryText={data.menu.item4.url}
          style={styles.menuItem}
          containerElement={<NavLink to={data.menu.item4.url} />}
          />
        <Divider />
      </Drawer>
    )
  }
}
export default Navigation
