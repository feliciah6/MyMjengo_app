import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements'

 
export default class Landing extends Component{
 
 constructor(props)
 {
   super(props);
 
   this.state = { GridViewItems: [
     {key: 'My account'},
     {key: 'Market'},
     {key: 'Activity'}
     
    
   ]}
 }
 
 GetGridViewItem (item) {
  
 Alert.alert(item);
 
 }
 
 
 render() {
   return (
    <ScrollView>
 
<View style={styles.MainContainer}>
 
      <FlatList
      
         data={ this.state.GridViewItems }
 
         renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
 
            <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>

 <CheckBox
  center
  title='Click Here'
  checked={this.state.checked}
/>
            
            </View>}
 
         numColumns={1}
 
        />


         <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("Checkout")}
            >
              <Text style={styles.buttonText}>CHECK OUT</Text>
            </TouchableOpacity>
   
   
</View>
 </ScrollView>
           
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
 buttonContainer: {
    backgroundColor: "#7B4040",
    paddingVertical: 15
  },

 buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "700"
  },
 
GridViewBlockStyle: {
 
  justifyContent: 'center',
  flex:1,
  alignItems: 'flex-start',
  height: 200,
  margin: 3,
  backgroundColor: '#ccc'
 
}
,
 
GridViewInsideTextItemStyle: {
 
   color: '#000000',
   fontSize: 18,
   justifyContent: 'center',
   alignItems:'flex-start'
   
 },
 
});
 
AppRegistry.registerComponent('Lists', () => Lists);