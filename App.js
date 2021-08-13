import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

export default class App extends Component { 
  render(){
    return(
      <View>
        <View 
          style={{ width:200 , height:100, marginTop:200, marginLeft:100}}>
          <Button 
            title="Charles Babbage"  
            color = "red"
            onPress={() => Alert.alert('The father of computing.')} />
        </View>
        
        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:100}}>
          <Button 
            title="Mahatma Gandhi"  
            color = "blue"
            onPress={() => Alert.alert('The father of nation.')} />
        </View>

        <View
          style={{ width:200 , height:100, marginTop:20, marginLeft:100}}>
          <Button 
            title="Nelson Mandela"  
            color = "purple"
            onPress={() => Alert.alert("The first black president of South Africa. ")} />
        </View>
        <View 
          style={{ width:200 , height:100, marginTop:20, marginLeft:100}}>
          <Button 
            title="Mother Teresa"  
            color = "green"
            onPress={() => Alert.alert("saint teresa of culcutta.")}
            
             />
        </View>
      </View>
    )
  }
}