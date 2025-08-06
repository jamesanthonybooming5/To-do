import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



const SignIn =({navigation}) =>{
    return (
    <View style={styles.container}>
        <Text style={{textAlign:'center',fontWeight:'400',fontSize:'30',color:'#95354',marginTop:200}}>Sign In</Text>

      <View style={{marginTop:23,gap:25}}>
        <View style={{width:390,height:45,borderRadius:8,backgroundColor:'#CCCCCC'}}>
         <TextInput placeholder='Name' style={{ fontSize:15,color:'black',marginHorizontal:10,flex:1}}></TextInput>
        </View>
        <View style={{width:390,height:45,borderRadius:8,backgroundColor:'#CCCCCC'}}>
         <TextInput placeholder='Enter your email' style={{ fontSize:15,color:'black',marginHorizontal:10,flex:1}}></TextInput>
        </View>
        <View style={{width:390,height:45,borderRadius:8,backgroundColor:'#CCCCCC'}}>
         <TextInput placeholder='Enter your password' secureTextEntry={true} style={{ fontSize:15,color:'black',marginHorizontal:10,flex:1}}></TextInput>
        </View>
      </View>

      <View style={{flexDirection:'row',gap:10,alignItems:'center',alignSelf:'center',marginTop:20}}>
        <View style={{width:165,height:1,backgroundColor:'black'}}></View>
         <Text style={{fontSize:15,fontWeight:'300'}}>OR</Text>
        <View style={{width:165,height:1,backgroundColor:'black'}}></View>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',gap:70,marginTop:10}}>
       <Image onPress={() => navigation.navigate()} source={require('../assets/images/google.webp')} style={{width:25,height:25,borderRadius:25}}></Image>
       <Image onPress={() => navigation.navigate()} source={require('../assets/images/facebook.webp')} style={{width:40,height:40,borderRadius:40}}></Image>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate()} style={{width:390,height:45,borderRadius:20,padding:2,backgroundColor:'#953545',marginTop:100}}>
        <Text style={{color:'white',fontSize:18,marginTop:5,textAlign:'center'}}>Sign In</Text>
      </TouchableOpacity>

      <View style={{flexDirection:'row',gap:10,alignSelf:'center',marginTop:30}}>
        <Text style={{fontWeight:'400'}}>Don't have an account?</Text>
        <Text onPress={() => navigation.navigate()} style={{color:'#953545'}}>Sign Up</Text>
      </View>
    </View>
    )
}

export default SignIn;

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:10
    }
});