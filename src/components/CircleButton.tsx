import { View, Text, StyleSheet, type ViewStyle } from 'react-native'

interface Props {
  children: string
  style?: ViewStyle
}

const CircleButton = (props: Props): JSX.Element => {
  const { children, style } = props
  return (
    <View style={[styles.circleButton, style]}>
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
    bottom: 40,
    right: 40,
    position: 'absolute',

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
