'use strict'
import React from 'react'
import Scroll from 'react-scroll'
import { MenuItem } from 'material-ui'
import {styles} from './navigation.component.jsx'

const ScrollLink = Scroll.Link

class DropDown extends React.Component {
  render () {
    return (
    [
      <MenuItem primaryText='Sección 1' style={styles.menuItem} containerElement={<ScrollLink activeClass='active' to='section1' spy smooth duration={500} />} />,
      <MenuItem primaryText='Sección 2' style={styles.menuItem} containerElement={<ScrollLink activeClass='active' to='section2' spy smooth duration={500} />} />,
      <MenuItem primaryText='Sección 3' style={styles.menuItem} containerElement={<ScrollLink activeClass='active' to='section3' spy smooth duration={500} />} />,
      <MenuItem primaryText='Sección 4' style={styles.menuItem} containerElement={<ScrollLink activeClass='active' to='section4' spy smooth duration={500} />} />
    ]
    )
  }
}
console.log(DropDown)
module.exports = DropDown
