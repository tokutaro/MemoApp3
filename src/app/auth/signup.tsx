import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Link, router } from 'expo-router'

const handlePress = (): void => {
  // 会員登録
  router.push('/memo/list')
}

const signUp = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>SignUPPPP</Text>
        <TextInput style={styles.input} value='email' />
        <TextInput style={styles.input} value='password' />

        <Button label='signup' onPress={handlePress} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registerd?</Text>

          <Link href='/auth/login' asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>log in  here</Text>
            </TouchableOpacity>
          </Link>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default signUp
