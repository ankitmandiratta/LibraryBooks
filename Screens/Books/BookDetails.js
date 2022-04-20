import { View, Text,ScrollView,TextInput } from 'react-native'
import React,{useState} from 'react'
import { styles } from '../../style'
import {Header,TextInputt,Btn} from '../../components'
import { Provider } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES } from '../../constants'

const BookDetails = (props) => {
  const {route} = props
const data= route.params.data
  const [accNo,setAccNo] = useState(data.dockey)
    const [author,setAuthor] =useState(data.AUTHOR)
    const [title,setTitle] =useState(data.TITLE)
    const [publisher,setPublisher] =useState(data.PUBLISHER)
    const [year,setYear] =useState(data.YEAR)
    const [source,setSource] =useState(data.SOURCE)
    const [subject,setSubject] =useState(data.SUBJECT)
    const [location,setLocation] =useState(data.PLACE)
    const [issuedTo,setIssuedTo] = useState('')
        return (

<ScrollView style={{backgroundColor:COLORS.white}}>
  <Header title={title} />
  <View style={styles.starting}>

  <View style={{marginTop:15}}></View>

<View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
  <Text style={{fontSize:20,color:COLORS.mitti,fontWeight:'bold',textDecorationLine:'underline'}}>Details of the Book</Text>
</View>
<View style={{marginTop:30}}></View>

<View style={{marginHorizontal:10}}>
    <View style={styles.bookdetails_view}>
      <Text style={styles.bookdetails_label}>Book Title : </Text>
      <Text style={styles.bookdetails_text}>{title}</Text>
    </View>
   
    <View style={styles.bookdetails_view}>
      <Text style={styles.bookdetails_label}>Author of Book : </Text>
      <Text style={styles.bookdetails_text}>{author}</Text>
    </View>

    <View style={styles.bookdetails_view}>
      <Text style={styles.bookdetails_label}>Publisher of Book : </Text>
      <Text style={styles.bookdetails_text}>{publisher}</Text>
    </View>

    <View style={styles.bookdetails_view}>
      <Text style={styles.bookdetails_label}> Book Publishing Year : </Text>
      <Text style={styles.bookdetails_text}>{year}</Text>
    </View>

    <View style={styles.bookdetails_view}>
      <Text style={styles.bookdetails_label}> Book Source City Name : </Text>
      <Text style={styles.bookdetails_text}>{source}</Text>
    </View>

    <View style={styles.bookdetails_view}>
      <Text style={styles.bookdetails_label}> Book Location In Library : </Text>
      <Text style={styles.bookdetails_text}>{location}</Text>
    </View>

    </View>

   </View>

    </ScrollView>



  )
}

export default BookDetails