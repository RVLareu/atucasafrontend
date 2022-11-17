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
  ImageBackground,
  FlatList
} from 'react-native';

export default class Buscador extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, icon:"https://img.icons8.com/material/512/hammer.png", description: "Juan Perez - Carpintero", rating: 3.3, km: 0.9},
        {id:2, icon:"https://img.icons8.com/material/512/plumbing.png", description: "Enrique Romero - Plomero", rating: 3.9, km: 1.1},
        {id:3, icon:"https://img.icons8.com/material/512/electricity.png", description: "Román Vázquez - Informática", rating: 4.7, km: 0.6}, 
        {id:4, icon:"https://img.icons8.com/material/512/electricity.png", description: "Lucas Monk - Electricista", rating: 4.3, km: 0.8},
        {id:5, icon:"https://img.icons8.com/material/512/electricity.png", description: "Mariano Correa - Electricista", rating: 4.0, km: 1.5},
        {id:6, icon:"https://img.icons8.com/material/512/electricity.png", description: "Pablo Martinez - Electricista", rating: 3.8, km: 1.2},

      ],
      dataToShow: [
        {id:1, icon:"https://img.icons8.com/material/512/hammer.png", description: "Juan Perez - Carpintero", rating: 3.3, km: 0.9},
        {id:2, icon:"https://img.icons8.com/material/512/plumbing.png", description: "Román Vázquez - Informática", rating: 4.7, km: 0.6},
        {id:3, icon:"https://img.icons8.com/material/512/electricity.png", description: "Lucas Monk - Electricista", rating: 4.3, km: 0.8}, 


      ],
    };
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
    >
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
                    <Text style={styles.distance}>{item.km} Km</Text>
                    <Text style={styles.icon}>{item.rating}</Text>
                    <Image style={styles.star}source={{uri: "https://img.icons8.com/ios/512/christmas-star.png"}}/>



              </View>
            )}}/>
      </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderColor: 'black',
    broder: '2px',
    flexDirection: 'row',
    borderRadius:10,
    boxShadow: '5px 5px 2px lightblue'
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
    background: {
      width: '100%',
      height: '100%'
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
