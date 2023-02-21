import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Background } from '../../../assets'

const index = ({title}) => {
  return (
    <View>
      <Image source={Background} style={{width:100,height:100}}/>
      <Text>{title}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})