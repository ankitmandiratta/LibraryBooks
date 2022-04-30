import { Text, View,TouchableOpacity,TextInput,Alert } from 'react-native'
import React,{useState} from 'react';
import { styles } from '../../style';
import { firebase } from '@react-native-firebase/firestore';
import LogOut from '../../components/LogOut';
import { NavigationContainer } from '@react-navigation/native';
import Add from '../Add';
const TitleSearch = (props) => {
  const {navigation} = props
  const [search,setSearch] = useState('')

    const checkDetails =()=>{
      if(search !=''){
        const db= firebase.firestore()
        db.collection('books').where("TITLE" ,'==',search).get()
        .then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
                navigation.navigate('BookDetails',{data:doc.data()})
               })   

          }).catch((error)=>{console.log("Erro Getting documents :",error)
 })
             }
      else{
       Alert.alert("No Value Entered","Enter Author or Title or Accession Number for search") 
      }
    }
  return (
<View style={{flex:1}}>
<LogOut />
<View style={styles.center}>
      <TextInput placeholder='Search  Book By Title' style={styles.textinput_text}
      value={search} onChangeText={(value)=>{setSearch(value)}}
       />
    <TouchableOpacity style={styles.btn_view} onPress={()=>checkDetails()}>
    <Text style={styles.btn_text}> Search Book</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate('Author')}>
    <Text > Search By Accession Number</Text>
    </TouchableOpacity>


    </View>
    <Add />
    </View>
  )}
export default TitleSearch