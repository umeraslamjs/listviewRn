import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text, FlatList,Alert } from 'react-native';
import Api from './src/Api';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userList:[]
    }
  }
  componentDidMount() {
this.getUsers();
  }

  getUsers() {
    Api.instance()
    .getUsers()
    .then(data => {
      console.warn('=====>', data);
      this.setState({userList: data});
    })
    .catch(err => console.log(err))
    .finally(() => {
    });

  }

  getListViewItem = (item) => {  
    Alert.alert('Email:',item.email);  
}  
  render() {
    return (
      <View style={styles.container}>  
      <FlatList  
          data={this.state.userList}  
          renderItem={({item}) =>  
              <Text style={styles.item}  
                    onPress={this.getListViewItem.bind(this, item)}>{item.name}</Text>}  
          ItemSeparatorComponent={this.renderSeparator}  
      />  
  </View>  
    );
  }
  

}
const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
  },  
  item: {  
      padding: 10,  
      fontSize: 18,  
      height: 44,  
  },  
})  

export default App;
