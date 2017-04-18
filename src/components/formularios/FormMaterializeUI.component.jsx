'use strict'
import React from 'react'
import { Row } from 'react-materialize'
import { TextField } from 'material-ui'

class FormMaterializeUI extends React.Component {
  render () {
    return (
      <Row>
        <TextField
          hintText='Hint Text'
          rows={6}
        />

        <TextField
          hintText='The hint text can be as long as you want, it will wrap.'
          rows={6}
        />
        <TextField
          id='text-field-default'
          defaultValue='Default Value'
        />
        <TextField
          hintText='Hint Text'
          floatingLabelText='Floating Label Text'
        />
        <TextField
          defaultValue='Default Value'
          floatingLabelText='Floating Label Text'
        />
        <TextField
          hintText='Hint Text'
          floatingLabelText='Fixed Floating Label Text'
          floatingLabelFixed
        />
        <TextField
          hintText='MultiLine with rows: 2 and rowsMax: 4'
          multiLine
          rows={2}
          rowsMax={4}
        />
        <TextField
          hintText='Message Field'
          floatingLabelText='MultiLine and FloatingLabel'
          multiLine
          rows={2}
        />
        <TextField
          hintText='Full width'
          fullWidth
        />
      </Row>
    )
  }
}
module.exports = FormMaterializeUI
