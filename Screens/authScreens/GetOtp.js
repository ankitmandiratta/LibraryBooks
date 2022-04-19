import { View, Text,TextInput,TouchableOpacity,Alert } from 'react-native'
import React,{useState} from 'react'
import { styles } from '../../style'

const GetOtp = () => {
    const [code,setCode] = useState('')

    const checkDetails=()=>{
        if(code != ''){
            console.log(code)
        }
        else {
            Alert.alert('Missing OTP','Enter the OTP to proceed further')
        }
    }


  return (
    <View style={styles.center}>
    <View>
    <TextInput placeholder="Enter OTP received on SMS" keyboardType='numeric' style={styles.textinput_text} value={code} onChangeText={(value)=>{setCode(value)}}  />
    </View>
    
    <View style={styles.btn_view}>
        <TouchableOpacity onPress={()=>{console.log(code),checkDetails()}}>
            <Text style={styles.btn_text}>Confirm OTP</Text>
        </TouchableOpacity>
    </View>
    </View>

    )
}

export default GetOtp