'use strict'

// const baseUri = '/react-webpack-materialize/'
const baseUri = '/'
const data = {
  menu: {
    item1: {
      id: 1,
      title: 'Home',
      url: baseUri
    },
    item2: {
      id: 1,
      title: 'Topics',
      url: baseUri + 'topics'
    },
    item3: {
      id: 1,
      title: 'About',
      url: baseUri + 'about'
    },
    item4: {
      id: 1,
      title: 'Contáctame',
      url: baseUri + 'contactame'
    }
  },
  dropdownMenuScrollSections: {
    item1: {
      id: 1,
      title: 'Sección 1',
      url: 'section1',
      name: 'section1'
    },
    item2: {
      id: 1,
      title: 'Sección 2',
      url: 'section2',
      name: 'section2'
    },
    item3: {
      id: 1,
      title: 'Sección 3',
      url: 'section3',
      name: 'section3'
    },
    item4: {
      id: 1,
      title: 'Sección 4',
      url: 'section4',
      name: 'section4'
    }
  }
}
module.exports = data
