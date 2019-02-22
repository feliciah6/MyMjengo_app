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
import { Dropdown } from 'react-native-material-dropdown';
import md5 from 'md5';
import base64 from 'base-64';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
      txtLogin: "",
      txtEmail: "",
      txtdata : "",
      txtPass: "",
      txtPass2: ""
      
    };
  }

  GetSelectedPickerItem=()=>{
 
    Alert.alert(this.state.PickerValueHolder);
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "",
      elevation: null
    }
  };



// methods for responding to input
  onTxtNameChanged = (text) => {
    this.setState({ txtName: text });
  };
  
  onTxtLoginChanged = (text) => {
    this.setState({ txtLogin: text });
  };
  
  onTxtEmailChanged = (text) => {
    this.setState({ txtEmail: text });
  };

  onTxtdataChanged = (text) => {
    this.setState({  txtdata: txtdata });
  };

  onTxtPassChanged = (text) => {      
    this.setState({ txtPass: text });
  };
  
  onTxtPass2Changed = (text) => {
    this.setState({ txtPass2: text });
  };


  // method to collect input and carry to next reg screen
  onRegisterPress = () =>
  {
    // check fields for validations
    if (this.state.txtName == '' || this.state.txtLogin == '' || this.state.txtEmail == ''  || this.state.txtdata == '' || this.state.txtPass == '' || this.state.txtPass2 == '')
    {
      // alert about fields
      alert('All fields are mandatory!', [{text: 'OK'}]);
    }
    else if (this.state.txtPass !== this.state.txtPass2)
    {
      // alert about matching passwords
      Alert.alert('My mjengo', 'The passwords must match!', [{text: 'OK'}]);
    }
    else
    {
      const formParams = { name: this.state.txtName, login: this.state.txtLogin, email: this.state.txtEmail, data:this.state.txtdata, pass: this.state.txtPass, pass2: this.state.txtPass2};
      this.props.navigation.navigate('Finish', formParams);
    }
  };

  // Screen layout and its styling


  

  render() {
    let data = [{
      value: 'Vendor',
    },  {
      value: 'Client',
    }];


    return (
      <ScrollView>
      <View behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("./one.png")} />
         
        </View>

         <KeyboardAvoidingView style={styles.keyboard}>
            <View style={styles.window}>
              <TextInput
                placeholder="Name"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.loginInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.name}
                style={styles.input}
                onChangeText={txtName => this.setState({ txtName })}
              />
            </View>


           
            <View style={styles.window}>
              <TextInput
                placeholder="User name"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.login}
                style={styles.input}
                onChangeText={txtLogin => this.setState({ txtLogin })}
              />
            </View>

            
            <View style={styles.window}>
              <TextInput
                placeholder="Email adress"
                placeholderTextColor="#C0C0C0"
                returnKeyType="next"
                onSubmitEditing={() => this.typeInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                style={styles.input}
                onChangeText={txtEmail => this.setState({ txtEmail })}
              />
            </View>

          <View style={styles.MainContainer}>
 
      <Dropdown
        label='Login  as:'
        onChangeText={txtdata => this.setState({ txtdata })}
        data={data}
      />
 
 
      
 
     </View>
      
     <View style={styles.window}> 
      <TextInput
            value={this.state.password}
            onChangeText={txtPass => this.setState({ txtPass })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#C0C0C0"
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            secureTextEntry
          />
          </View>
          <View style={styles.window}> 
          <TextInput
            value={this.state.password_confirmation}
            onChangeText={txtPass2 => this.setState({ txtPass2 })}
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#C0C0C0"
            returnKeyType="go"
            secureTextEntry
            ref={input => (this.passwordInput = input)}
          />
          </View>

           

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onRegisterPress.bind(this)}
            >
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
   
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
    paddingTop: 10
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
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20
  }
});

AppRegistry.registerComponent("Register", () => Register);