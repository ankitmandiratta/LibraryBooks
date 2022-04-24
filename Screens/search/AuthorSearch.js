import { Text, View,TouchableOpacity,TextInput,Alert } from 'react-native'
import React,{useState} from 'react';
import { styles } from '../../style';
import LogOut from '../../components/LogOut';
import { firebase } from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { COLORS,SIZES } from '../../constants';
const AuthorSearch = (props) => {
  const {navigation} = props
  const [search,setSearch] = useState('')

    const checkDetails =()=>{
      if(search !=''){
        const db= firebase.firestore()
        db.collection('books').doc(search).get()
        .then((doc)=>{
          if(doc.exists){
            navigation.navigate('BookDetails',{data:doc.data()})
            console.log(doc.data()) 
          }
          else{
Alert.alert('No Book Found','There is no book with this Accession number')
          }
          }).catch((error)=>{console.log("Erro Getting documents :",error)

        })
        console.log(search)
      }
      else{
       Alert.alert("No Value Entered","Enter Author or Title or Accession Number for search") 
      }
    }
  return (

<View style={{flex:1}}>  
<LogOut />
<View style={{...styles.center}}>
      <TextInput placeholder='Searchh Book by Accession Number' style={styles.textinput_text}
      value={search} onChangeText={(value)=>{setSearch(value)}}
       />
    <TouchableOpacity style={styles.btn_view} onPress={()=>checkDetails()}>
    <Text style={styles.btn_text}> Search Book </Text>
    </TouchableOpacity>

    <TouchableOpacity style={{}} onPress={()=>navigation.navigate('Title')}>
    <Text style={{}}> Search By Title</Text>
    </TouchableOpacity>

    </View>
    </View>
  )}
export default AuthorSearch