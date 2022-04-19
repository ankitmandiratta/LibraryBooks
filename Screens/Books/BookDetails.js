import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { styles } from '../../style'
import {Header,TextInputt,Btn} from '../../components'
import { Provider } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const BookDetails = (props) => {
    const [accNo,setAccNo] = useState('')
    const [author,setAuthor] =useState('')
    const [title,setTitle] =useState('')
    const [publisher,setPublisher] =useState('')
    const [year,setYear] =useState('')
    const [source,setSource] =useState('')
    const [subject,setSubject] =useState('')
    const [location,setLocation] =useState('')
    const [issuedTo,setIssuedTo] = useState('')
    


    
 
    return (
<PaperProvider>
<ScrollView>
  <Header title="Book Details" />
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

    </ScrollView>
    </PaperProvider>


  )
}

export default BookDetails