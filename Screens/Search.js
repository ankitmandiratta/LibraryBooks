import { View, Text,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { Header } from '../components'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {TitleSearch,AuthorSearch,DocKeySearch} from './search'
import BookDetails from './Books/BookDetails'
const Stack = createStackNavigator();
const Search = () => {

  return (
 
//  <ScrollView>
// <Header title="Search " />



<Stack.Navigator>

<Stack.Screen name="Author" component={AuthorSearch}  options={{headerShown:false}}/>
<Stack.Screen name="Title" component={TitleSearch} options={{headerShown:false}}  />
<Stack.Screen name="Accession No." component={DocKeySearch} options={{headerShown:false}} />
<Stack.Screen name="BookDetails" component={BookDetails} options={{headerShown:false}} />

</Stack.Navigator>



//        <Text style={{fontSize:55}}>Searchg</Text>

//  </ScrollView>
  )
}

export default Search