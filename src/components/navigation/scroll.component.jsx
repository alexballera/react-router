'use strict'

import React from 'react'
import Scroll from 'react-scroll'

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

        <Element name='section1' className='element' >
          <Seccion1 />
        </Element>

        <Element name='section2' className='element' >
          <Seccion2 />
        </Element>

        <Element name='section3' className='element' >
          <Seccion3 />
        </Element>

        <Element name='section4' className='element' >
          <Seccion4 />
        </Element>

        <a onClick={this.scrollToTop}>To the top!</a>

      </div>
    )
  }
}
module.exports = Section
