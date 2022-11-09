import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList
} from 'react-native';

export default class Buscador extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, icon:"https://img.icons8.com/material/512/hammer.png", description: "Juan Perez - Carpintero"},
        {id:2, icon:"https://img.icons8.com/material/512/plumbing.png", description: "Juan Perez - Plomero"},
        {id:3, icon:"https://img.icons8.com/material/512/electricity.png", description: "Juan Perez - Electricista"}, 
        {id:4, icon:"https://img.icons8.com/material/512/plumbing.png", description: "Juan Perez - Plomero"}, 
        {id:5, icon:"https://img.icons8.com/material/512/electricity.png", description: "Juan Perez - Electricista"}, 
        {id:6, icon:"https://img.icons8.com/material/512/hammer.png", description: "Juan Perez - - Carpintero"}, 
        {id:7, icon:"https://img.icons8.com/material/512/plumbing.png", description: "Juan Perez - Plomero"}, 
        {id:8, icon:"https://img.icons8.com/material/512/plumbing.png", description: "Juan Perez - Plomero"},
        {id:9, icon:"https://img.icons8.com/material/512/hammer.png", description: "Juan Perez - - Carpintero"},
      ],
      dataToShow: [
        {id:1, icon:"https://img.icons8.com/material/512/hammer.png", description: "Juan Perez - Carpintero"},
        {id:2, icon:"https://img.icons8.com/material/512/plumbing.png", description: "Juan Perez - Plomero"},
        {id:3, icon:"https://img.icons8.com/material/512/electricity.png", description: "Juan Perez - Electricista"}, 
        {id:4, icon:"https://img.icons8.com/material/512/plumbing.png", description: "Juan Perez - Plomero"}, 
        {id:5, icon:"https://img.icons8.com/material/512/electricity.png", description: "Juan Perez - Electricista"}, 
        {id:6, icon:"https://img.icons8.com/material/512/hammer.png", description: "Juan Perez - - Carpintero"}, 
        {id:7, icon:"https://img.icons8.com/material/512/plumbing.png", description: "Juan Perez - Plomero"}, 
        {id:8, icon:"https://img.icons8.com/material/512/plumbing.png", description: "Juan Perez - Plomero"},
        {id:9, icon:"https://img.icons8.com/material/512/hammer.png", description: "Juan Perez - - Carpintero"},

      ],
    };
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                ref={'txtPassword'}
                placeholder="Buscar"
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => {
                    this.setState({name_address})
                    // dataToShow will contain the items from data wich includes name_address in description
                    const dataToShow = this.state.data.filter(item => item.description.toLowerCase().includes(name_address.toLowerCase()))
                    this.setState({dataToShow})
                    }
                }/>
          </View>
        </View>

        <FlatList 
          style={styles.notificationList} 
          enableEmptySections={true}
          data={this.state.dataToShow}
          renderItem={({item}) => {
            return (
              <View style={styles.notificationBox}>
                <Image style={styles.image}
                  source={{uri: item.icon}}/>
                
                    
                    <Text style={styles.description} onPress={()=>this.props.navigation.navigate("Perfil")}>{item.description}</Text>
                    <Text style={styles.distance}>1.5 km</Text>
                    <Text style={styles.icon}>3.3</Text>
                    <Image style={styles.star}source={{uri: "https://img.icons8.com/ios/512/christmas-star.png"}}/>



              </View>
            )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a1a',
  },
  formContent:{
    flexDirection: 'row',
    marginTop:30,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:45,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  saveButton: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    width:70,
    alignSelf: 'flex-end',
    backgroundColor: '#40E0D0',
    borderRadius:30,
  },
  saveButtonText: {
    color: 'white',
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  notificationBox: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  image:{
    width:45,
    height:45,
  },
  description:{
    fontSize:18,
    color: "#3498db",
    marginLeft:10,
  },
  distance:{
    // must be bottom right
    position: 'absolute',
    right: 70,
    bottom: 10,
    fontSize:18,
    color: "#3498db",


    },
  icon:{
    // must be bottom right
    position: 'absolute',
    right: 25,
    bottom: 10,
    fontSize:18,
    color: "#3498db",
    },
    star:{
        // will be bottom right
        position: 'absolute',
        right: 0,
        bottom: 12,
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});