import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: string
}

const CircleButton = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 40,

    // iOSのための影のスタイル
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // Androidのための影のスタイル
    elevation: 10
  },
  circleButtonLabel: {
    color: '#FFFFFF',
    fontSize: 40
  }
})

export default CircleButton
