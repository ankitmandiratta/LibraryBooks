import * as  React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import trial from '../trial'
import { BookList,AddBook } from './Books'
import Search from './Search'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const HomeScreen = () => {

          
     return (
<NavigationContainer>
    <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon:({focused,color=COLORS.mitti,size})=>{
                let iconName;
                if(route.name =='Books'){
                    iconName=focused?'ios-information-circle':'ios-information-circle-outline'
                }
                else if(route.name=="Search"){
                        iconName =focused?'search':'search-outline'
                }
                else if(route.name=='Add Book' ){
                    iconName =focused?'add-circle':'add-circle'
                }
    return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor:COLORS.brown,
            tabBarInactiveTintColor:COLORS.black

    })}
    
    >
        <Tab.Screen name="Search" component={Search} options={{headerShown:false}} />
        <Tab.Screen name="Books" component={BookList} options={{headerShown:false}} />

{true &&  <Tab.Screen name="Add Book" component={AddBook} options={{headerShown:false}} />
}
    </Tab.Navigator>
</NavigationContainer>

)}

export default HomeScreen