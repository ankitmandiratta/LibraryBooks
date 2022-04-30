import { View, Text,TextInput,TouchableOpacity,Modal,Alert } from 'react-native'
import React,{useState} from 'react'
import { styles } from '../../style'
import auth, { firebase } from '@react-native-firebase/auth'
import { COLORS } from '../../constants'
import SignIn from './SignIn'
import Add from '../Add'

const SignUp = (props) => {
    const {navigation} = props
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
      auth().createUserWithEmailAndPassword(email,password)
        .then((response)=>{
          console.log('Account Created')
          response.user.sendEmailVerification().then(()=>{
            Alert.alert('Verify','Email has been sent on given email Id .Please Verify your account')
          })
          setEmail('')
          setPassword('')

        })
        .catch(error=>{
          console.log("Error",error)
        })
 
    }
  }
  return (
    <View style={styles.center}>
  

<View>

<TextInput placeholder="Email Address" style={styles.textinput_text} value={email} onChangeText={(value)=>{setEmail(value)}}  />
<View style={{margin:5}}></View>
<TextInput placeholder="Password "  style={styles.textinput_text} value={password} onChangeText={(value)=>{setPassword(value)}}  />
</View>

<View style={styles.btn_view}>
    <TouchableOpacity onPress={()=>{chekDetails_email()}}>
        <Text style={styles.btn_text}>Register</Text>
    </TouchableOpacity>
</View>
<TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}><Text>Already Registered.</Text>
<Text style={{color:COLORS.mitti}}>Click here to Sign In</Text></TouchableOpacity>
<View style={{marginTop:50}}><Add /></View>






</View>
  )


}

export default SignUp