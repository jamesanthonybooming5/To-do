import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View,FlatList } from "react-native";


const Cart= ({navigation})=> {
  const renderItem={(item)} =>(
    <ScrollView style={StyleSheet.container}>

      <View style={{gap:120,flexDirection:'row',alignItems:'center',marginHorizontal:10,marginBottom:10}}>
        <AntDesign name="left" size={30}  color="black" />
        <Text style={{fontWeight:'600',fontSize:35}}>Carts</Text>
      </View>
    </ScrollView>
  )
  return (
  <View style={general.container}>
      <Header title='Carts'/>
     <FlatList
     data={clothingData}
     renderItem={renderItem}
     showsVerticalScrollIndicator={false}
     />
    </View>
  )
}

export default Cart;

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:'white'
  }
});