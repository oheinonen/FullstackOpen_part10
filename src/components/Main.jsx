import { StyleSheet, View } from 'react-native'
import { NativeRouter } from 'react-router-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'

import theme from '../theme'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.white,
  },
})

const Main = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <AppBar />
        <RepositoryList />
      </View>
    </NativeRouter>
  )
}
export default Main
