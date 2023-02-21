import { StyleSheet, Text, TouchableOpacity, View,Image, ImageBackground } from 'react-native'
import React from 'react'
import { Card } from '../../components'

const Home = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => navigation.navigate('Detail')}>
                <Text>Button</Text>
            </TouchableOpacity>
            <Card title='forest'/>
            <Card title='forests'/>
            <Card title='foresat'/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    body:{
        paddingVertical:50,
    }
})