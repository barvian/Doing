import React from 'react'
import { withTheme } from 'styled-components/native'
import MultiLinePlaceholderInput from '../MultiLinePlaceholderInput'
import styles from './styles'

@withTheme
export default class IntentionInput extends React.Component {
  render() {
    const { theme, style, ...props } = this.props

    return (
      <MultiLinePlaceholderInput
        style={[styles.input, style]}
        selectionColor="#fff"
        placeholderTextColor={theme.placeholder}
        {...props}
      />
    )
  }
}
