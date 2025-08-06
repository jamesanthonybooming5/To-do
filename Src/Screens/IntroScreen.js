import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const IntroScreen = ({navigation}) => {
   return(
         <ImageBackground source={require('../assets/images/src.jpeg')} style={{ backgroundSize:'100%',flex:1,paddingHorizontal:10}}>
          <View style={{marginTop:590}}>
           <Text style={{fontWeight:'500',fontSize:30,color:'#953545'}}>Home Of Fashion</Text>
           <Text style={{color:'#FFFFFF99',fontWeight:'400',lineHeight:17,marginTop:10,}}>Looking for the best deals in terms of fashion without maxing out of your credit card? Look no further.</Text>
          </View>

          <View style={{flexDirection:'row',alignItems:'center',gap:190,marginTop:20}}>
           <View style={{flexDirection:'row',gap:5}}>
             <View style={styles.circle}></View>
             <View style={styles.middle}></View>
             <View style={styles.circle}></View>
           </View>
          <TouchableOpacity onPress={() => navigation.navigate()} style={{width:110,height:33,borderRadius:20,padding:2,marginTop:5,backgroundColor:'10s 20srgb(169, 101, 78)'}}>
            <Text style={{color:'#FFFFFF99',fontSize:15,textAlign:'center',marginTop:5,}}>Continue</Text>
          </TouchableOpacity>
         </View>
         
         </ImageBackground>
   )
}

   export default IntroScreen;

   const styles= StyleSheet.create({
      circle:{
        width:25,
        height:25,
        borderRadius:25,
        backgroundColor:'#FFFFFF99'
      },
      middle:{
        width:25,
        height:25,
        borderRadius:25,
        backgroundColor:'10s 20srgb(169, 101, 78)'
      },

   })