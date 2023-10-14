import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo APPP</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      <View>

      <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>かいものりすと</Text>
            <Text style={styles.memoListItemDate}>2023年10月4日 11:23</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>かいものりすと</Text>
            <Text style={styles.memoListItemDate}>2023年10月4日 11:23</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>＋</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255,255,255,0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  memoListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
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

export default Index
