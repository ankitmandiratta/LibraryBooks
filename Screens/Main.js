import { View, Text,SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import {SignIn,SignInNavigation} from './authScreens'
import HomeScreen from './HomeScreen'
const Main = () => {
    const [isUserSignedIn,setIsUserSignedIn] =useState(false)
  return (
    <SafeAreaView style={{flex:1}}>
        {isUserSignedIn?<HomeScreen />:<SignInNavigation />}
    </SafeAreaView>
  )}
export default Main