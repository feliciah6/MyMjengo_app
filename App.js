/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from "./app/components/Login";
import Finish from "./app/components/Finish";
import ForgotPassword from "./app/components/ForgotPassword";
import Register from "./app/components/Register";
import Landing from "./app/components/Landing";
import Market from "./app/components/Market";
import Product from "./app/components/Product";
import Lists from "./app/components/Lists";
import Checkout from "./app/components/Checkout";

import { StackNavigator } from "react-navigation";
/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

class Home extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#000000",
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Finish: {
    screen: Finish,
    navigationOptions: {
      title: "Finish sign up"
    }
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      title: "Checkout"
    }
  },
   Lists: {
    screen: Lists,
    navigationOptions: {
      title: "pick items"
    }
  },
  Product: {
    screen: Product,
    navigationOptions: {
      title: "Products"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
    Market: {
    screen: Market,
    navigationOptions: {
      title: "Marketing"
    }
  },
  Landing: {
    screen: Landing,
    navigationOptions: {
      title: "Landing"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Sign up here"
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      title: "ForgetPassword"
    }
  },
  
  
 
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});  