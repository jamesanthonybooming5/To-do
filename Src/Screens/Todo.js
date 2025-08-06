import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View,Button } from "react-native";

const itemBar=[
    {name:"Buy groceries"},{name:"read a book"},{name:"Jet2Holiday"},{name:"solo Date"}
]
const Todo=({navigation})=> {
  return(
    <View style={styles.container}>

     <View style={{gap:130,flexDirection:'row',paddingHorizontal:10,marginBottom:15}}>  
       <Text style={{fontWeight:'600',fontSize:25}}>Todo-App</Text>
     <View style={{flexDirection:'row',gap:10}}>
       <TouchableOpacity style={{width:45,height:45,borderRadius:45,backgroundColor:'#954535',alignItems:'center',paddingTop:10}}><Feather name="sun" size={20} color="white" /></TouchableOpacity>
       <TouchableOpacity style={{width:45,height:45,borderRadius:45,backgroundColor:'#954535',alignItems:'center',paddingTop:5}}><EvilIcons name="trash" size={35} color="white" /></TouchableOpacity>
     </View>
     </View>

     <FlatList
     data={itemBar}
     renderItem={({item,}) =>{
        return(
            <View style={{
                width: 350,
                  height:55,
                  justifyContent:'space-between',
                  borderRadius:10,
                  marginBottom: 10,
                  flexDirection:'row',
                  padding:10,
                  marginHorizontal:8,
                  backgroundColor:'#f5f5f5'
            }}>
              <Text style={{fontSize:20,fontWeight:'500'}}>{item.name} </Text>
              <View style={{flexDirection:'row',alignSelf:'flex-end',gap:15}}>
                <TouchableOpacity><FontAwesome name="square-o" size={24} color="black" /></TouchableOpacity>
                <TouchableOpacity> <FontAwesome name="trash" size={24} color="black" /></TouchableOpacity>
              </View>
            </View>
        )
     }}
     />
     <View style={{flexDirection:'row',borderWidth: 1,
        marginVertical: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderColor: 'grey',
        borderRadius: 8,justifyContent:'space-between'
        }}>
     <TextInput placeholder='Userame'  
        />
        <TouchableOpacity>
          <Entypo name="plus" size={24} color="red" />
        </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default Todo;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingHorizontal:10,
  }
})