'use strict'
/**
 * https://github.com/typekit/webfontloader
 */
import WebFont from 'webfontloader'

export default () => {
  WebFont.load({
    google: {
      families: ['Roboto:300,400,500,700', 'Material Icons']
    }
  })
}
