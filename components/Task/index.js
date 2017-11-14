import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { withTheme } from 'styled-components/native'
import styles from './styles'

@withTheme
export default class Task extends PureComponent {
  render() {
    const { task, style, theme } = this.props

    return (
      <View style={style}>
        <View style={[styles.shadow, { shadowColor: theme.shadow }]} />
        <View style={styles.box}>
          <Text style={styles.label}>{task.text}</Text>
        </View>
      </View>
    )
  }
}
