import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  shadow: {
    bottom: 6,
    left: 8,
    right: 8,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    position: 'absolute',
    top: 11
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingVertical: 20,
    paddingHorizontal: 16
  },
  label: {
    color: '#071F31',
    fontSize: 17
  }
})
