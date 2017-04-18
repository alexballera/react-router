'use strict'
import React from 'react'
import { Input } from 'react-materialize'

class FormMaterializeReact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fname: '',
      lname: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const target = event.target
    const name = target.name
    this.setState(
      {
        [name]: target.value
      }
      )
  }

  handleSubmit (event) {
    console.log('Submited: ' + this.state.value + this.state.value)
    event.preventDefault()
  }
  render () {
    return (
      <form className='row' onSubmit={this.handleSubmit}>
        <Input s={6} label='First Name' type='text' name='fname' required value={this.state.fname} onChange={this.handleChange} />
        <Input s={6} label='Last Name' type='text' name='lname' value={this.state.lname} onChange={this.handleChange} />
        <Input s={12} label='Email' type='email' />
        <Input s={12} type='submit' value='Send' />
      </form>
    )
  }
}

module.exports = FormMaterializeReact
