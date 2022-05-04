import { View, Text,TextInput,TouchableOpacity,Modal,Alert } from 'react-native'
import React,{useState,useContext} from 'react'
import { styles } from '../../style'
import { COLORS } from '../../constants'
import auth, { firebase } from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Add from '../Add'
import { AuthContext } from '../../components/context'

const SignIn = (props) => {
const {navigation} = props

const {signIn} = useContext(AuthContext)

  const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')  
  
   

  const chekDetails_email=async()=>{
    if(email =='' && password==''){
      alert('Please Enter Email and Password');
    }
    else if(password.length <6){
      alert("Password must be atleast 6 alphanumeric")
    }
    else{
           console.log("Authenticae process") 
           signIn(email,password)

    //    firebase.auth().signInWithEmailAndPassword(email,password)
    //    .then((user)=>{
    //      if(user.user.emailVerified){
    //  var uid =user.user.uid
    //    Astorage(uid)
    //   }
    //      else{
    //        Alert.alert('Email verification Failed','Email is not verified.Please open your email account and verify')
    //      }
 // })
       

    }
  }

  const Astorage =async(uid)=>{
    await AsyncStorage.setItem('userId',uid)
    navigation.navigate('S')
  }
  return (
    <View style={styles.center}>

<View>
<TextInput placeholder="Email Address" style={styles.textinput_text} value={email} onChangeText={(value)=>{setEmail(value)}}  />
<View style={{margin:5}}></View>
<TextInput placeholder="Password "  style={styles.textinput_text} value={password} onChangeText={(value)=>{setPassword(value)}}  />
</View>
<View></View>
<View style={styles.btn_view}>
    <TouchableOpacity onPress={()=>{chekDetails_email()}}>
        <Text style={styles.btn_text}>Login</Text>
    </TouchableOpacity>
</View>
<TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}><Text>Not Registered!!!!</Text>
<Text style={{color:COLORS.mitti,fontWeight:'bold'}}>Click here to SignUp</Text></TouchableOpacity>


<View style={{marginTop:50}}><Add /></View>
</View>
  )
}

export default SignIn