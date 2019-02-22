import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';
 
export default class Checkout extends Component{
 
 constructor(props)
 {
   super(props);
 
   this.state = { GridViewItems: [
     {key: 'MPESA'},
     {key: 'VISA'},
     {key: 'Pesalink'},
     {key: 'Airtel Money'}
     
    
   ]}
 }


 
 GetGridViewItem (item) {
  
 Alert.alert(item);
 
 }
 
 
 render() {
   return (
 
<View style={styles.MainContainer}>


      <Text style={styles.buttonText}>Total= ksh 20,000</Text>
      <Text style={styles.buttonText}>Delivery= ksh 300</Text>
      <Text style={styles.buttonText}>Payment= ksh 500</Text>
      <FlatList
      
         data={ this.state.GridViewItems }
 
         renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
 
            <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
            
            </View>}
 
         numColumns={2}
 
        />
   
   
</View>
           
   );
 }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS) === 'ios' ? 20 : 0
 
},
buttonText: {
    fontSize: 20,
    alignSelf: "flex-start",
    textAlign: "center",
    color: "#000",
    fontWeight: "700"
  },
 
GridViewBlockStyle: {
 
  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 200,
  margin: 5,
  backgroundColor: '#ccc'
 
}
,
 
GridViewInsideTextItemStyle: {
 
   color: '#000',
   padding: 10,
   fontSize: 18,
   justifyContent: 'center',
   
 },
 
});
 
AppRegistry.registerComponent('Checkout', () => Checkout);