import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <View>
        <View>
          <Text>Memo APPP</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>かいものりすと</Text>
          <Text>2023年10月4日 11:23</Text>
        </View>
        <View>
          <Text>×ボタン</Text>
        </View>

        <View>
          <Text>かいものりすと</Text>
          <Text>2023年10月4日 11:23</Text>
        </View>
        <View>
          <Text>×ボタン</Text>
        </View>

        <View>
          <Text>かいものりすと</Text>
          <Text>2023年10月4日 11:23</Text>
        </View>
        <View>
          <Text>×ボタン</Text>
        </View>
      </View>

      <View>
        <Text>＋</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index
