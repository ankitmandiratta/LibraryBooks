import {  Text, View,ScrollView,FlatList,Image,TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import { firebase } from '@react-native-firebase/firestore'
import { Header } from '../../components'
import { styles } from '../../style'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES } from '../../constants'

const BookList = (props) => {

useEffect(()=>{

 db_book_entry()

},[])

const {navigation} = props
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

<TouchableOpacity onPress={()=>{navigation.navigate('BookDetails',{data:item})}}>

  <Text style={styles.booklist_title} >{item.TITLE}</Text>
<Text style={styles.booklist_author}>Author : {item.AUTHOR}</Text>
<Text style={styles.booklist_publisher}>Publisher : {item.PUBLISHER}</Text>
<Text style={styles.booklist_publisher}>Location : {item.PLACE}</Text>
</TouchableOpacity>
</View>


)}

const Data =()=>{
  return(
    <View>
<FlatList
  data={book}
  renderItem={renderBook}
  />
    </View>
  )
}

const NoData=()=>{
  return(
    <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',height:SIZES.height*1}}>
      <ActivityIndicator size={"large"} color={COLORS.mitti} />

    </View>
  )
}
//main return 
  return (

<View>
  <Header title="Book List" />
  <View style={styles.starting}>
<View style={{marginVertical:10}}></View>

{book ==null ?NoData():Data()}
     </View>
   </View>
   )
}
export default BookList
