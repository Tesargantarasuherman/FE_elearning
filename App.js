import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

const App = () => {
  return (
    <NavigationContainer>
    
     {/* <Splash /> */}
      <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})