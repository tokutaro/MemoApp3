import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>かいものりすと</Text>
        <Text style={styles.memoDate}>2023年10月22日 12:34</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>都市の喧騒を離れ、山々に囲まれた小さな村に、彼は新たな生活の場を求めてやってきた。空気は清々しく、朝夕の鳥のさえずりや川のせせらぎが心地良いBGMとなっていた。村人たちは彼を暖かく迎え入れてくれた。初めての畑仕事は手探りだったが、隣家の老夫婦の手引きで、少しずつ成果を上げるようになった。彼は都会の喧噪や忙しさを忘れ、自然とともに過ごす毎日を満喫していた。</Text>
      </ScrollView>

      <CircleButton style={{ top: 160, bottom: 'auto' }}>
        <Feather name='check' size={40}/>
      </CircleButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#gray'
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    backgroundColor: '#467FD3',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22
  },
  memoDate: {
    backgroundColor: '#467FD3',
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24
  }
})

export default Detail
