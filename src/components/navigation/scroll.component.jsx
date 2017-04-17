'use strict'

import React from 'react'
import Scroll from 'react-scroll'

// Datos
import data from '../../data/navigation.data'

// Secciones
import Seccion1 from '../home/sections/section1.jsx'
import Seccion2 from '../home/sections/section2.jsx'
import Seccion3 from '../home/sections/section3.jsx'
import Seccion4 from '../home/sections/section4.jsx'

const Element = Scroll.Element
const scroll = Scroll.animateScroll
const scrollSpy = Scroll.scrollSpy

class Section extends React.Component {
  componentDidMount () {
    scrollSpy.update()
  }
  scrollToTop () {
    scroll.scrollToTop()
  }
  render () {
    return (
      <div>

        <Element name={data.dropdownMenuScrollSections.item1.name} className='element' >
          <Seccion1 title='Sección 1' />
        </Element>

        <Element name={data.dropdownMenuScrollSections.item2.name} className='element' >
          <Seccion2 />
        </Element>

        <Element name={data.dropdownMenuScrollSections.item3.name} className='element' >
          <Seccion3 />
        </Element>

        <Element name={data.dropdownMenuScrollSections.item4.name} className='element' >
          <Seccion4 />
        </Element>

        <a onClick={this.scrollToTop}>To the top!</a>

      </div>
    )
  }
}
module.exports = Section
