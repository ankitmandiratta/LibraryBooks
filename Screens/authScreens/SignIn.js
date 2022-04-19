import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { styles } from '../../style'
import auth from '@react-native-firebase/auth'
const SignIn = () => {

  const [mob,setMob] = useState('')
  const [confirm,setConfirm] = useState(null)
  const [code,setCode] = useState('')
  
  
    const chekDetails=async()=>{

if(mob.length >9 && mob.length <11){
const confirmation=  await auth().signInWithPhoneNumber(mob)
setConfirm(confirmation)    
}
    else{
        console.log('Mobile no error')
    }
  }

  if(!confirm){
    console.log('Phone Number uthentication done')
  }
  
  
  
  return (
    <View style={styles.center}>
<View>
<TextInput placeholder="Mobile Number" keyboardType='numeric' style={styles.textinput_text} value={mob} onChangeText={(value)=>{setMob(value)}}  />
</View>

<View style={styles.btn_view}>
    <TouchableOpacity onPress={()=>{chekDetails()}}>
        <Text style={styles.btn_text}>SEND OTP</Text>
    </TouchableOpacity>
</View>


    </View>
  )
}

export default SignIn