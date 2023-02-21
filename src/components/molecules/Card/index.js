import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const index = ({title,imageSource}) => {
  return (
    <View>
      <Image source={imageSource} style={{width:100,height:100}}/>
      <Text>{title}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})