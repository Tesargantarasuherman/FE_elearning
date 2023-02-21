import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Detail, Home } from '../screen';
const Stack = createNativeStackNavigator();

const index = () => {
  return (
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name="Home" component={Home} title="Home Page" options={{ headerShown: false }}/>
    <Stack.Screen name="Detail" component={Detail} title="Detail Page"/>
  </Stack.Navigator>
  )
}
// const navigator = createStackNavigator(
//     {
//         Home:Home,
//         Detail:Detail
//     },{
//         initialRouteName:'Home',
//         defaultNavigationOptions:{
//             title:'App'
//         }
//     }
// )
export default index

