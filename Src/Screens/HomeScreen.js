import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, useState } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const Homescreen = ({navigation}) =>{
  const [active,setActive]=useState ('All');
  const tabs = ['All','Women','Men','kids'];

}

const Index = ({navigation}) => {
    return(
        <View style={styles.container}>

         <View style={{flexDirection:'row',gap:255,width:70}}>
            <Text style={{color:'#953545',fontSize:20,fontWeight:'500'}}>Welcome Back!</Text>
            <Ionicons onPress={()=> navigation.navigate()} name="notifications" size={25} color="#953545" />
         </View>

         <Text style={{fontWeight:'500'}}>Edward Banjo</Text>

         <TouchableOpacity onPress={() => navigation.navigate()} style={{width:370,height:40,borderRadius:20,backgroundColor:'#CCCCCC',marginTop:10,flexDirection:'row',alignItems:'center',padding:10}}>
          <AntDesign name="search1" size={20} color="black"  />
          <TextInput placeholder='Search' style={{ fontSize:15,color:'black',marginHorizontal:10,flex:1}}></TextInput>
          <FontAwesome name="microphone" size={20} color="black" />
         </TouchableOpacity>
        
         <View style={{width:'100%',height:'27%',backgroundColor:'#953545',borderRadius:15,marginTop:10,padding:10,flexDirection:'row',gap:50,alignItems:'center'}}>
          <Text style={{color:'white',fontWeight:'500',fontSize:22,width:120,}}>Nothing beats a jet2holiday, Save 50% per person</Text>
          <Image source={require('../assets/images/src-removebg-preview.png')} style={{width:170,height:170,}}></Image>
         </View>
         </View>
    )};
         
        const header = () => {
          return(
         <View style={{flexDirection:'row',marginTop:20}}>
          {tabs.Map((tab,index) =>(
            <TouchableOpacity key={tab}
            style={[general.tabButton,active = tab &general.activeTab]}
            onPress={()=> setActive(tab)}>
              <Text style={[general.tabText,active = tab & general.activeText]}>
                {tab}</Text>
            </TouchableOpacity>
          ))}
          
         </View>
          )}

export default Index;

const styles= StyleSheet.create ({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'#FFFFFF11'
    }
});