import {  Text, View,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { firebase } from '@react-native-firebase/firestore'
import { styles } from '../../style'
import {Header,TextInputt,Btn} from '../../components'
import { Provider as PaperProvider } from 'react-native-paper'
const AddBook = () => {
const [accNo,setAccNo] = useState('')
const [author,setAuthor] =useState('')
const [title,setTitle] =useState('')
const [publisher,setPublisher] =useState('')
const [year,setYear] =useState('')
const [source,setSource] =useState('')
const [subject,setSubject] =useState('')
const [location,setLocation] =useState('')
const [issuedTo,setIssuedTo] = useState('')

const db_book_entry = ()=>{
  firebase.firestore().collection('books').doc(accNo).set({
accNo :accNo,
author:author,
title:title,
publisher:publisher,
year:year,
source:source,
subject:subject,
location:location,
issuedTo:issuedTo
  }).then(()=>{
    alert("Book has been added in database succesfully")
     setAccNo(''),
     setAuthor(''),
     setTitle(''),
     setPublisher(''),
     setYear(''),
     setSource(''),
     setLocation(''),
     setIssuedTo('') 




  }).catch((eroor)=>{
    console.log('Error',eroor)
  })

}
const checkDetails =()=>{

   if(accNo =='' &&  author == '' && title =='' ){
    alert("Accession Number ,Author and Title is mandatory to fill ")
  }
  else{
    
    db_book_entry()
    
  }
}

//main return 
  return (
<PaperProvider>
<ScrollView>
  <Header title="ADD BOOK" />
  <View style={styles.starting}>
   <TextInputt placeholder="Accession Number" keyboardType={'numeric'}   value={accNo} onChangeText={(value)=>setAccNo(value)}/> 
   <TextInputt placeholder="Author"   value={author} onChangeText={(value)=>setAuthor(value)}/>  
   <TextInputt placeholder="Title(Book Name)"   value={title} onChangeText={(value)=>setTitle(value)}/>  
   <TextInputt placeholder="Publisher"   value={publisher} onChangeText={(value)=>setPublisher(value)}/>  
   <TextInputt placeholder="Year" keyboardType={'numeric'}   value={year} onChangeText={(value)=>setYear(value)}/>  
   <TextInputt placeholder="Source(City Name)"   value={source} onChangeText={(value)=>setSource(value)}/>  
   <TextInputt placeholder="Place where it is Kept"   value={location} onChangeText={(value)=>setLocation(value)}/>  
   <TextInputt placeholder="Issued To"   value={issuedTo} onChangeText={(value)=>setIssuedTo(value)}/>  
   </View>
<Btn title="ADD BOOK" onPress={()=>{console.log("Add the book"),checkDetails()}} />
    </ScrollView>
    </PaperProvider>
  )
}

export default AddBook
