import { View, Text } from 'react-native'
import React from 'react'
import { BannerAd,BannerAdSize,TestIds } from '@react-native-firebase/admob';
import { COLORS } from '../constants';
const Add = () => {

    const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6000168815258678/8846886326';
    return (
    <View style={{marginBottom:10}}>
    <BannerAd unitId={adUnitId} size={BannerAdSize.FULL_BANNER} />
    </View>
  )
}

export default Add