import { View, Text } from 'react-native'
import React from 'react'
import {styles} from '../style'
import { COLORS,SIZES,FONTS } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Header = ({title}) => {
  return (
    <View style={styles.header_view}>

      <View>
      <Text style={[styles.header_text]} >{title}</Text>
      </View>



<View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
<TouchableOpacity style={{justifyContent:'flex-end',marginTop:10}} onPress={()=>console.log('LogOut')}>
  <Text style={{color:COLORS.white,fontSize:15}}> LOG OUT</Text>
  </TouchableOpacity>


</View>      

    </View>
  )
}

export default Header