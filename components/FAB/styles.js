import { StyleSheet } from 'react-native'

export const BUTTON_SIZE = 64
export const ICON_SIZE = 22

export default StyleSheet.create({
  wrapper: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE
  },
  shadow: {
    borderRadius: BUTTON_SIZE,
    bottom: 6,
    left: 6,
    right: 6,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    position: 'absolute',
    top: 8
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: BUTTON_SIZE / 2,
    height: BUTTON_SIZE,
    justifyContent: 'center',
    width: BUTTON_SIZE
  },
  icon: {
    height: ICON_SIZE,
    width: ICON_SIZE
  }
})
