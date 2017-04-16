'use strict'
import React from 'react'
import { MenuItem } from 'material-ui'
import Scroll from 'react-scroll'
import styles from './styles.jsx'
import data from '../../data'

const ScrollLink = Scroll.Link

const DropDownMenu = [
  <MenuItem
    primaryText={data.dropdown.item1}
    style={styles.menuItem}
    containerElement={
      <ScrollLink activeClass='active' to='section1' spy smooth duration={500} />
      }
    />,
  <MenuItem
    primaryText={data.dropdown.item2}
    style={styles.menuItem}
    containerElement={
      <ScrollLink activeClass='active' to='section2' spy smooth duration={500} />
      }
    />,
  <MenuItem
    primaryText={data.dropdown.item3}
    style={styles.menuItem}
    containerElement={
      <ScrollLink activeClass='active' to='section3' spy smooth duration={500} />
      }
    />,
  <MenuItem
    primaryText={data.dropdown.item4}
    style={styles.menuItem}
    containerElement={
      <ScrollLink activeClass='active' to='section4' spy smooth duration={500} />
      }
    />
]
module.exports = DropDownMenu
