import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Else from './Else'
import ElseIf from './ElseIf'

class If extends Component {
  render() {
    const { children, condition } = this.props

    var block = null
    var c = condition
    var stop = false

    React.Children.forEach(children, (child) => {
      if(stop) return
      
      if (child.type === ElseIf) {
        c = child.props.condition
      } else if (child.type === Else) {
        c = !c
      } else {
        if(c) {
          block = child
          stop = true
        }
      }
    })

    return block
  }
}

If.propTypes = {
  children:   PropTypes.any.isRequired,
  condition:  PropTypes.bool.isRequired,
}

export default If
