import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from './SignIn';
import GetOtp from './GetOtp';
import HomeScreen from '../HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const SignInNavigation = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Sign In" component={SignIn} options={{headerShown:false}} />
        <Stack.Screen name="Get OTP" component={GetOtp}  options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      </Stack.Navigator>


      </NavigationContainer>

  )
}

export default SignInNavigation