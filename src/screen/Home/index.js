import { StyleSheet, Text, TouchableOpacity, View,Image, ImageBackground } from 'react-native'
import React from 'react'
import { Card } from '../../components'
import { Background, ImgProfile } from '../../assets'

const Home = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => navigation.navigate('Detail')}>
                <Text>Button</Text>
            </TouchableOpacity>
            <Card title='forest' imageSource={Background}/>
            <Card title='forests' imageSource={ImgProfile}/>
            <Card title='foresat' imageSource={Background}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    body:{
        paddingVertical:50,
    }
})