import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Text } from 'react-native'
import styles from './styles'

export default class MultiLinePlaceholderInput extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired
  }

  render() {
    const { value, placeholder, placeholderTextColor, style, ...props } = this.props

    return (
      <View>
        {value ? null : (
          <Text
            style={[styles.placeholder, style, { color: placeholderTextColor }]}
            accessible={false}
            selectable={false}
          >
            {placeholder}
          </Text>
        )}
        <View style={!value && styles.floatingWrapper}>
          <TextInput
            style={[style, !value && styles.floatingInput]}
            value={value || ''}
            {...props}
            multiline
          />
        </View>
      </View>
    )
  }
}
