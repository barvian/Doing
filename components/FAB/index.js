import React, { PureComponent } from 'react'
import { MaskedViewIOS, View, Image  } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles'
import { withTheme } from 'styled-components/native'

@withTheme
export default class FAB extends PureComponent {
  render() {
    const { theme, style } = this.props

    return (
      <View style={[styles.wrapper, style]}>
        <View style={[styles.shadow, {
            backgroundColor: theme.shadow,
            shadowColor: theme.shadow
          }]}
        />
        <View style={styles.button}>
          <MaskedViewIOS
            style={styles.icon}
            maskElement={
              <Image style={styles.icon} source={require('./plus.png')} />
            }
          >
            <LinearGradient
              style={styles.icon}
              start={{ x: 0.25, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={theme.gradient}
            />
          </MaskedViewIOS>
        </View>
      </View>
    )
  }
}
