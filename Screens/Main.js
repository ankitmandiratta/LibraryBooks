import { View, Text,SafeAreaView } from 'react-native'
import React,{useState,useEffect} from 'react'
import {SignIn,SignInNavigation} from './authScreens'
import HomeScreen from './HomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Main = () => {
  
  useEffect(()=>{
User()  
  })
  
  const [isUserSignedIn,setIsUserSignedIn] =useState(false)
  const User =async()=>{
    var uid =  await AsyncStorage.getItem('userId')
      if(uid){
        setIsUserSignedIn(true)
      }  
    }
  
    return (
    <SafeAreaView style={{flex:1}}>
   {isUserSignedIn?<HomeScreen />:<SignInNavigation />}
    </SafeAreaView>
  )}
export default Main