import {  Text, View,ScrollView,FlatList,Image,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { firebase } from '@react-native-firebase/firestore'
import { Header } from '../../components'
import { styles } from '../../style'
import { useNavigation } from '@react-navigation/native'
const BookList = (props) => {

useEffect(()=>{
    db_book_entry()
console.log('Book lIst Page')
},[])

const navigation = useNavigation();
const [book,setBook]= useState()
const db_book_entry = ()=>{
var data=[] ;
  firebase.firestore().collection('books').get().then((snapshot)=>{
    snapshot.forEach((doc)=>{
      data.push({...doc.data(),'id':doc.id})
    })
setBook(data)
})
  .catch((eroor)=>{
    console.log('Error',eroor)
  })
}
const renderBook=({item})=>{
return(
  <View style={styles.booklist_view}>

<TouchableOpacity onPress={()=>{console.log(item)}}>

  <Text style={styles.booklist_title} >{item.TITLE.toUpperCase()}</Text>
<Text style={styles.booklist_author}>Author : {item.AUTHOR}</Text>
<Text style={styles.booklist_publisher}>Publisher : {item.PUBLISHER}</Text>
<Text style={styles.booklist_publisher}>Location : {item.PLACE}</Text>
</TouchableOpacity>
</View>


)}
//main return 
  return (
<View>
  <Header title="Book List" />
  <View style={styles.starting}>
<View style={{marginVertical:10}}></View>
  <FlatList
  data={book}
  renderItem={renderBook}
  />
    </View>
   </View>
   )
}
export default BookList
