import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../style'

const Btn = ({onPress,title}) => {
  return (
    <View>
<TouchableOpacity onPress={onPress} style={styles.btn_view}>
    <Text style={styles.btn_text}>{title}</Text>
</TouchableOpacity>

    </View>
  )
}

export default Btn