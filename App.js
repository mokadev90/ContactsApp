import {StyleSheet} from 'react-native'
import GlobalProvider from './src/context/Provider'
import AppNavContainer from './src/navigations'

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  )
}

const styles = StyleSheet.create({})

export default App
