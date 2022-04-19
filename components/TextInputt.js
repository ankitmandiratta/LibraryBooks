import { View, Text, } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { styles } from '../style'
const TextInputt = ({placeholder,value,onChangeText,keyboardType}) => {
  return (
    <View style={styles.textinput_view}>
<TextInput label={placeholder} onChangeText={onChangeText} value={value} 
keyboardType={keyboardType} style={styles.textinput_text}
/>
    </View>
  )
}

export default TextInputt