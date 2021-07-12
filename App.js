
import React from "react";
import Card from "./components/card/card"
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 
import {
  Image,
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";

const Stack = createStackNavigator();


const First = ({navigation}) =>{
  return(
  <View style={{flex:1,justifyContent: "center",
  alignItems: "center",backgroundColor:"red"}}>
    
      <Text style={{ color:"white", fontSize:35, padding:20,fontWeight: 'bold' }}>
        Choose tree cards
      </Text>
      <Text style={{ color:"white",fontSize:20,padding:20,fontWeight: 'bold' }}>
        Past, Present and Future
      </Text>
    
      <TouchableOpacity
         style={{justifyContent: "center",
         alignItems: "center",height:40,width:200,borderRadius:20,backgroundColor:"blue"}}
         onPress={() => navigation.navigate('cards')}
      >
        <Text style={{ color:"white",fontSize:20,padding:20,fontWeight: 'bold' }}>Select Cards</Text>
      </TouchableOpacity>
  </View>
  )
};


const Result= ({route,navigation}) =>{
  return (<View style={{justifyContent: "center",borderRadius:50,
    alignItems: "center",flex:1,top:50,height:Dimensions.get('screen').height-100,backgroundColor: "red"}}>
                <Image
                            style={{width: 150, height: 200,borderRadius:20}}
                            source={route.params.list[0]}
                          />
                          <Image
                            style={{width: 150, height: 200,borderRadius:20}}
                            source={route.params.list[1]}
                          />
                          <Image
                            style={{width: 150, height: 200,borderRadius:20}}
                            source={route.params.list[2]}
                          />      
              
                <Button
        title="Go to Details"
        onPress={() =>{
          navigation.navigate('first')}}
      />
            </View>
  );
}



export default class App extends React.Component {
 


  render() {

    return (
      <NavigationContainer>{
        <Stack.Navigator initialRouteName="first">
          <Stack.Screen name="cards" component={Card} options={{headerShown: false}}/>
          <Stack.Screen name="first" component={First} options={{headerShown: false}}/>
          <Stack.Screen name="result" component={Result} options={{headerShown: false}}/>
        </Stack.Navigator>
      }</NavigationContainer>
    );
  }
}

