import { View, Text,SafeAreaView,ActivityIndicator,Alert } from 'react-native'
import React,{useState,useEffect,useMemo,useReducer} from 'react'
import {SignIn,SignInNavigation} from './authScreens'
import HomeScreen from './HomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../components/context'
import auth, { firebase } from '@react-native-firebase/auth'

const Main = () => {
  //const [isLoading,setIsLoading] = useState(true)
  //const [userToken,setUserToken] = useState(null)

const  initialLoginState ={
  isLoading:true, 
  userName:null,
  userToken:null
}

const loginReducer =(prevState,action)=>{
  switch(action.type){
    case 'RETRIEVE_TOKEN':
      return{
          ...prevState,
          userToken:action.token,
          isLoading:false
      }
    
  case 'LOGIN':
    return {
      ...prevState,
      userName:action.id,
      userToken:action.Token,
      isLoading:false
    };
  
  case 'LOGOUT':
        return{
            ...prevState,
            userName:null,
            userToken:null,
            isLoading:false
        }

  case 'REGISTER':
          return{
            ...prevState,
            userName:action.id,
            userToken:action.Token
          }
        }  
}

const [loginState,dispatch] = useReducer(loginReducer,initialLoginState) 

const authContext= useMemo(()=>({
  signIn :(email,password)=>{
         let userToken=null;
          firebase.auth().signInWithEmailAndPassword(email,password)
          .then(async(user)=>{
            if(user.user.emailVerified){
             userToken =user.user.uid
              try{
                await AsyncStorage.setItem('userToken',userToken)
              dispatch({type:'LOGIN',id:user.user.email,token:userToken})
              console.log('verified')
             }
             catch(e){
                 console.log(e)
              Alert.alert('Login Error','If you havenot signed Up then Sign Up ') 
            }
            }

             else{
               Alert.alert('Email verification Failed','Email is not verified.Please open your email account and verify')
             }
               })
               .catch((e)=>{
                console.log(e)
             Alert.alert('Login Error','Password Incorrect or You may  not have registered with us') 
           })
           

          },
  signOut:async()=>{
      try{
        await AsyncStorage.removeItem('userToken')
      }
      catch(e){

        Alert.alert('Error in Login',e)
        console.log(e)
      }

    dispatch({type:'LOGOUT'})
//    setUserToken(null)
  //  setIsLoading(false)
  },
    signUp:()=>{
    setUserToken('fgk')
    setIsLoading(false)
  },
}),[])

useEffect(()=>{
setTimeout(async()=>{
  let userToken =null;
try{
  userToken = await AsyncStorage.getItem('userToken')
}
catch(e)
{ 
 console.log(e) 
}
  dispatch({type:'RETRIEVE_TOKEN',token:userToken})
//  setIsLoading(false)
},1000)


},[])

if(loginState.isLoading){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  )}

return(
  <AuthContext.Provider value={authContext}>
    <SafeAreaView style={{flex:1}}>
   {/* {isUserSignedIn?<HomeScreen />:<SignInNavigation />} */}
{loginState.userToken !==null?<HomeScreen />:<SignInNavigation />}
    </SafeAreaView>
    </AuthContext.Provider>
)
}
export default Main


