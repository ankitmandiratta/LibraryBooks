import { View, Text,TextInput,TouchableOpacity,Modal } from 'react-native'
import React,{useState} from 'react'
import { styles } from '../../style'
import auth from '@react-native-firebase/auth'
const SignIn = () => {

  const [mob,setMob] = useState('+91 7740971201')
  const [confirm,setConfirm] = useState(null)
  const [code,setCode] = useState('')
  
  

  const signInWithPhone=async()=>{
    const confirmation=  await auth().signInWithPhoneNumber(mob)
    setConfirm(confirmation)    
  }

  const checkDetails_otp=async()=>{
    if(code != ''){

      try{
        await confirm.confirm(code)
      alert("Signed In successfully")
      }
      catch(error){
        Alert.alert("Invalid Code","The must be some error .Please try again later")
      }
      console.log(code)

      }
    else {
        Alert.alert('Missing OTP','Enter the OTP to proceed further')
    }
}

    const chekDetails=async()=>{  
    if(mob.length != 0){
    signInWithPhone()
}
    else{
        console.log('Mobile no error')
    }
  }

  if(confirm){
    return(
      <View>
<Modal>
<View style={styles.center}>
    <View>
    <TextInput placeholder="Enter OTP received on SMS" keyboardType='numeric' style={styles.textinput_text} value={code} onChangeText={(value)=>{setCode(value)}}  />
    </View>
    
    <View style={styles.btn_view}>
        <TouchableOpacity onPress={()=>{console.log(code),checkDetails_otp()}}>
            <Text style={styles.btn_text}>Confirm OTP</Text>
        </TouchableOpacity>
    </View>
    </View>



</Modal>
</View>
    ) }
  
  
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