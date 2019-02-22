import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
 
export default class Product extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: true
    };
  }
 
  static navigationOptions = {
    headerStyle: {
    
      elevation: null
    },
    headerTitleStyle: {
      color: "#000000",
      fontFamily: "Montserrat-Regular",
      fontSize: 25,
      textAlign: "left",
      alignSelf: "center",
      width: "100%",
      justifyContent: "center"
    },
    headerTintColor: "#fff"
  };
   
 
  componentDidMount() {
    this.makeRemoteRequest();
  }
 
  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({
      loading: true
    });
 
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
 
  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
 
  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
 
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
          marginRight: "14%"
        }}
      />
    );
  };
 
  renderFooter = () => {
    if (!this.state.loading) return null;
 
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
 
  render() {
    return (
      <View behavior="padding" style={styles.container}>
 
        <FlatList
          data={this.state.data}
          numColumns={2}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "flex-start",
                marginRight: 2,
                marginLeft: 2,
                marginTop: 2,
                padding: 5
              }}
            >
              <Image
                source={{
                  uri:
                    "https://img.purch.com/o/aHR0cDovL3d3dy5sYXB0b3BtYWcuY29tL2ltYWdlcy93cC9sYXB0b3Atc2xpZGVzaG93LzMxOTk1My5qcGc=`"
                }}
                style={styles.imageView}
              />
 
              <Text style={styles.textView}>Building materials</Text>
              <Text style={styles.textView}>ksh 3,500</Text>
               <Text style={styles.textView}>Add to Cart</Text>
            </View>
          )}
          keyExtractor={item => item.email}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF"
  },
  imageView: {
    width: "100%",
    height: 200,
    margin: 7,
    padding: 10,
    borderRadius: 7
  },
  textView: {
    width: "100%",
    textAlignVertical: "center",
    padding: 5,
    color: "#000"
  },
  list: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
 
AppRegistry.registerComponent("Product", () => Product);