import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  static navigationOptions = {
    headerStyle: {
      elevation: null
    }
  };

  async ForgetPress() {
    const { name, email} = this.state;
    console.log(name);
    console.log(email);
    await AsyncStorage.setItem("name", name);
   L
    await AsyncStorage.setItem("email", email);
    this.props.navigation.navigate("Checkout");
  }

  onForgetPress() {
        this.props.navigation.navigate("Checkout");
  }
  render() {
    return (
      <View style={styles.container}>
       <KeyboardAvoidingView style={styles.keyboard}>
          <View style={styles.window}>
              <TextInput
                placeholder="Name"
                placeholderTextColor="#000000"
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.name}
                style={styles.input}
                onChangeText={name => this.setState({ name })}
              />
            </View>

       <View style={styles.window}>
              <TextInput
                placeholder="Email adress"
                placeholderTextColor="#000000"
                returnKeyType="next"
                onSubmitEditing={() => this.typeInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.email}
                style={styles.input}
                onChangeText={email => this.setState({ email })}
              />
            </View>
               
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onForgetPress.bind(this)}
        >
          <Text style={styles.buttonText}>Forget Password</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    
    padding: 20,
  },
   keyboard: {
    margin: 20,
    padding: 20,
    alignSelf: "stretch",
   
  },
   window: {
    marginBottom: 15,
    backgroundColor: "#ffffff"

  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#7B4040",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
});
