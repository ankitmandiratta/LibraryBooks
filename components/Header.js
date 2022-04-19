import { View, Text } from 'react-native'
import React from 'react'
import {styles} from '../style'
import { COLORS,SIZES,FONTS } from '../constants'
const Header = ({title}) => {
  return (
    <View style={styles.header_view}>

      <Text style={[styles.header_text]} >{title}</Text>
    </View>
  )
}

export default Header