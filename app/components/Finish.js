import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Picker,
  Alert,       
  Button,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";

import { StackNavigator } from "react-navigation";
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Dropdown } from 'react-native-material-dropdown';
import md5 from 'md5';
import base64 from 'base-64';


// the second part that completes the registration
export default class Finish extends Component {
  // the constructor
  constructor(props) {
    super(props);
    // fields from the other screen
    const name = this.props.navigation.getParam('name', undefined);
    const login = this.props.navigation.getParam('login', undefined);
    const email = this.props.navigation.getParam('email', undefined);
    const data = this.props.navigation.getParam('data', undefined);
    const pass = this.props.navigation.getParam('pass', undefined);
    const pass_safe = md5(pass);


  
// register state object
    this.state = {
      name: name,
      login: login,
      email: email,
      data : data,
      password: pass_safe,
      address:'',
      phone:'',
      county:'',
      town:'',
      dropdownData: []

      
    };
  }



// methods for rendering input
onTxtAddressChanged = (text) => {
    this.setState({ address: text });
  };
onTxtPhoneChanged = (text) => {
    this.setState({ phone: text });
  };
  
  onTxtCountyChanged = (text) => {
    this.setState({ county: text });
  };
  
  onTxtTownChanged = (text) => {
    this.setState({ town: text });
  };
  



// method to process registration
onFinishPress = () =>
  {
    // check fields for validations
    if (this.state.address == '' || this.state.phone == '' || this.state.county == ''  || this.state.town == '')
    {
      // alert about fields
      Alert.alert('My Mjengo', 'Please fill out all fields!', [{text: 'OK'}, ],);
    }
    else
    {
      // methods to get county names
      for (i = 0; i < global.counties.length; i++)
      {
        if (global.counties[i][0] === this.state.county)
        {
          this.state.county = global.counties[i][1];
        }
      }
      var uriString = '';
      if (this.state.data === 'Client')
      {
        uriString = 'clients/registration';
      }
      else
      {
        uriString = 'vendors/registration';
      }


      // making the call to the API
      return fetch('http://162.144.151.204:9321/mymjengo/' + uriString,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + base64.encode('makomeki:simiti19')
        },
        body: JSON.stringify(this.state),
      })
      .then((response) => response.json())
      .then((responseJson) =>
      {
        Alert.alert('My Mjengo', responseJson.udaku.ResultDesc, [{text: 'OK'}]);
        if (responseJson.udaku.Error === false)
        {
          this.props.navigation.navigate('Login');
        }
      })
      .catch((error) =>
      {
        console.error(error);
        Alert.alert('My Mjengo', error, [{text: 'OK'}]);
      });
    }
  };
// method for fetching counties
 componentDidMount() {

      
        fetch('http://162.144.151.204:9321/mymjengo/counties/list', 
        {  
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + base64.encode('makomeki:simiti19')
          },
        })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.udaku.Error === false)
          {
            // get counties list

            global.counties = responseJson.udaku.Data;
            ddlist = [];

            // create a list of dict objects
            for (i = 0; i < global.counties.length; i++)
              {

             ddlist.push({value: global.counties[i][0]}); 
            }
            this.setState({dropdownData: ddlist});

          }

        else
      {
       dropdownData = [];
        Alert.alert('My Mjengo', responseJson.udaku.ResultDesc, [{text: 'OK'}]);
      }  
      
        })
        .catch((error) => {
          console.error(error);
          dropdownData = [];
        });
      }
 

 

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "",
      elevation: null
    }
  };

// The screen layout methods and its styles   

  render() {
   
     
  return (
      <ScrollView>
      <View behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("./one.png")} />
         
        </View>

        <KeyboardAvoidingView style={styles.keyboard}>


         <View style={styles.window}>
          <TextInput
            value={this.state.address}
            keyboardType = 'email-address'
            onChangeText={address => this.setState({ address  })}
            ref={input => (this.addressInput = input)}
            value={this.state.address}
            style={styles.input}
            placeholder="Location"
            placeholderTextColor="#C0C0C0"
            returnKeyType="next"
            onSubmitEditing={() => this.phoneInput.focus()}
          />
          </View>

        <View style={styles.window}>
          <TextInput
            value={this.state.phone}
            keyboardType = 'numeric'
            onChangeText={phone => this.setState({ phone })}
            ref={input => (this.phoneInput = input)}
            value={this.state.phone}
            maxLength={14}
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="#C0C0C0"
            returnKeyType="next"
            onSubmitEditing={() => this.countyInput.focus()}
          />
          </View>


            


      

            <View style={styles.window1}>
                    
                  <Dropdown
                  itemColor='#000000'
                  label='Enter your county'
                  onChangeText={county  => this.setState({ county })}
                  data={this.state.dropdownData}
                />
                
              
            </View>


        <View style={styles.window}>
          <TextInput
            value={this.state.town}
            keyboardType = 'email-address'
            onChangeText={town=> this.setState({ town  })}
            ref={input => (this.townInput = input)}
            value={this.state.town}
            maxLength={20}
            style={styles.input}
            placeholder="Town or city"
            placeholderTextColor="#C0C0C0"
            returnKeyType="next"
            onSubmitEditing={() => this.townInput.focus()}
          />
          </View>


           

          

           

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onFinishPress.bind(this)}
            >
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>

          <TouchableHighlight style={styles.buttonCont} onPress={() => this.props.navigation.navigate("Market")}>
            <Text style={styles.texts}>Already have an account? Login here.</Text>
        </TouchableHighlight>
   
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
 
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
   MainContainer: {
   flex: 1,
   justifyContent: 'center',
   
  marginBottom: 15,
  backgroundColor: "#ffffff"
   
 },
 buttonCont: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 5
  },
  texts:{
    color:"#000"
  },
  logo: {
    width: 280,
    height: 150
  },
  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#000000",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#7B4040",
    paddingVertical: 15
  },
  button: {
    height: 50,
    backgroundColor: "#7B4040",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch",
   
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "700"
  },
   window: {
    marginBottom: 15,
    backgroundColor: "#ffffff"

  },
  window1: {
    marginBottom: 12,
    color:"#000000",
    backgroundColor: "#ffffff"

  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20
  }
});

AppRegistry.registerComponent("Finish", () => Finish);