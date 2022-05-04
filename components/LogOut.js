import { Text, View,TouchableOpacity,TextInput,Alert } from 'react-native'
import React,{useState,useContext} from 'react';
import { COLORS,SIZES } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './context';
const LogOut = (props) => {
const {navigation} = props
const {signOut} = useContext(AuthContext) 
const Loggout =async()=>{
        await AsyncStorage.clear()
        
    }
    return (

    <View style={{marginTop:20}}>
    <TouchableOpacity style={{justifyContent:'flex-end',alignItems:'flex-end',marginRight:10}} 
     onPress={()=>{signOut()}}>
    <Text style={{color:COLORS.white,padding:5,fontSize:15,backgroundColor:COLORS.mitti}}> LOG OUT</Text>
    </TouchableOpacity>
    </View>
  
  )}

export default LogOut

