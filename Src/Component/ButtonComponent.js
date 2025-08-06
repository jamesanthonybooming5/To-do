import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ButtonComponent = ({navigation}) => {
   return(
      <View style={styles.container}>
        <TouchableOpacity style={{width:130,height:35,borderRadius:20,padding:2,backgroundColor:'10s 20srgb(182, 61, 13)'}}>
         <Text onPress={() => navigation.navigate('Sign In')} style={{color:'white',fontSize:20,textAlign:'center'}}>Continue</Text>
        </TouchableOpacity>
      </View>
   )
}

   export default ButtonComponent;

   const styles= StyleSheet.create({
      container:{
         flex:1,
      }
   })