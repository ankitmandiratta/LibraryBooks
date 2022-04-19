import { Text, View,TouchableOpacity,TextInput,Alert } from 'react-native'
import React,{useState} from 'react';
import { styles } from '../../style';
import { firebase } from '@react-native-firebase/firestore';
const AuthorSearch = () => {
    const [search,setSearch] = useState('power')

    const checkDetails =()=>{
      if(search !=''){
        console.log("data is on the way1" + search)
       
        const db= firebase.firestore()
        console.log(search)
        db.collection("books").where('TITLE','>=',search).where('TITLE','<=',search + '\uf8ff').get().then((querySnapshot)=>{
          console.log("data is on the way 3")  
          querySnapshot.forEach((doc)=>{
              console.log("data is on the way 2")
              console.log(doc.data()) 
            })
        }).catch((error)=>{console.log("Erro Getting documents :",error)

        })
        console.log(search)
      }
      else{
       Alert.alert("No Value Entered","Enter Author or Title or Accession Number for search") 
      }
    }
  return (
    <View style={styles.center}>
      <TextInput placeholder='Author/Title/Accession Number of Book' style={styles.textinput_text}
      value={search} onChangeText={(value)=>{setSearch(value)}}
       />
    <TouchableOpacity style={styles.btn_view} onPress={()=>checkDetails()}>
    <Text style={styles.btn_text}> Search Book</Text>
    </TouchableOpacity>
    </View>
  )}
export default AuthorSearch