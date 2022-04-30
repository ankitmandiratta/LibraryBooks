import {StyleSheet} from "react-native"
import { COLORS, SIZES } from "../constants"

const styles = StyleSheet.create({

    starting:{
        backgroundColor:COLORS.white,
        marginHorizontal:10
    },
    center:{
    justifyContent:'center',    
    alignContent:'center',
    alignItems:'center',
    flex:1
    },
    header_view:{
        backgroundColor:COLORS.mitti,
        height:SIZES.height*0.06
    },
    header_text:{
        
        color:COLORS.white,
        fontSize:SIZES.h2,
        padding:5,
        alignSelf:'center'

    },
    textinput_view:{
        marginVertical:5,

    },
    textinput_text:{
        backgroundColor:COLORS.white,
        borderWidth:1,
        borderRadius:5,
        borderColor:COLORS.brown,
        width:SIZES.width*0.80,
        padding:5
       },
       btn_view:{
           justifyContent:'center',
           alignContent:'center',
           alignItems:'center',
           backgroundColor:COLORS.mitti,
           padding:10,
           margin:20,
           borderRadius:10,
           
       },
       btn_text:{
           fontSize:SIZES.h3,
           fontWeight:'bold',
           color:COLORS.white
       },
       booklist_view:{
           marginTop:5,
           borderWidth:1,
           borderColor:COLORS.gray,
           padding:8,
           borderRadius:10
       },
       booklist_title:{
           color:COLORS.brown,
           fontSize:SIZES.h3,
           fontWeight:'bold',
           marginLeft:5
       },
       booklist_author:{
        color:COLORS.black,
        fontSize:SIZES.h4,
        marginLeft:10
    },
    booklist_publisher:{
    color:COLORS.black,
    fontSize:SIZES.h4,
    marginLeft:10
},
bookdetails_view:{
    flexDirection:'row',
    marginVertical:10
},
bookdetails_label:{
    color:COLORS.black,
    fontSize:SIZES.h3
},
bookdetails_text:{
    color:COLORS.mitti,
    fontSize:SIZES.h3
},
signInUp_text:{
    backgroundColor:COLORS.mitti,
    paddingVertical:5,
    paddingHorizontal:15,
    borderRadius:5,
    color:COLORS.white
}


})

export default  styles