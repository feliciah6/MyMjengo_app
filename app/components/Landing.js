import React, { Component } from 'react';
import { Icon } from 'react-native-elements'
 
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';
 
export default class Landing extends Component{
 
 constructor(props)
 {
   super(props);
 
   this.state = { GridViewItems: [
     {key: 'My account'},
     {key: 'Market'},
     {key: 'My Products'},
     {key: 'Purchase'},
     {key: 'Sales'},
     {key: 'Activity'}
     
    
   ]}
 }
 
 GetGridViewItem (item) {
  
 Alert.alert(item);
 
 }
 
 
 render() {
   return (
 
<View style={styles.MainContainer}>
 
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
 
GridViewBlockStyle: {
 
  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 100,
  margin: 5,
  backgroundColor: '#7B4040'
 
}
,
 
GridViewInsideTextItemStyle: {
 
   color: '#fff',
   padding: 10,
   fontSize: 18,
   justifyContent: 'center',
   
 },
 
});
 
AppRegistry.registerComponent('Landing', () => Landing);