'use strict'
import React from 'react'
// import { Input } from 'react-materialize'

class FormMaterializeReact extends React.Component {
  render () {
    return (
      <form name='formulario' className='formulario__section' id='formularioSeccion' action='sendMail.php' method='post' >
        <div id='nameSeccion-group'>
          <input type='text' placeholder='Nombre' name='nameSeccion' id='nameSeccion' />
        </div>
        <div id='lastnameSeccion-group' className='hide' >
          <input type='text' placeholder='Apellido' name='lastnameSeccion' id='lastnameSeccion' />
        </div>
        <div id='emailSeccion-group'>
          <input type='email' placeholder='Email' name='emailSeccion' id='emailSeccion' />
        </div>
        <div id='phoneSeccion-group'>
          <input type='tel' placeholder='Teléfono' name='phoneSeccion' id='phoneSeccion' />
        </div>
        <div id='msgSeccion-group'>
          <textarea cols='30' rows='10' placeholder='Mensaje' name='msgSeccion' id='msgSeccion' />
        </div>
        <p className='formulario__texto politicas'>
            Acepto políticas de tratamiento de datos personales
          </p>
        <div className='formulario__item'>
          <button type='submit' className='submit' id='submit'>Enviar</button>
        </div>
      </form>
    )
  }
}

module.exports = FormMaterializeReact
