import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  title: "Perfil",      color:"#0f3648", image:"https://img.icons8.com/windows/512/contacts.png"},
        {id:2,  title: "Buscar",     color:"#0f3648", image:"https://img.icons8.com/ios-glyphs/512/search.png"},
      ]
    };
  }



  render() {
    return (
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.background}
      >
        <View style={styles.container}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          >
          </Image>
          <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate("Buscar")}
          >
            <Text style={styles.buscar}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate("Vender")}
          >
            <Text style={styles.vender}>Vender</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>this.props.navigation.navigate("Perfil")}
          >
            <Text style={styles.perfil}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}








const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },


  background: {
    width: '100%',
    height: '100%'
  },
  logo:{
    width: 280,
    height: 280,
    marginTop: '5%'
  },

  buscar: {
    backgroundColor: 'white',
    color: '#3A59FF',
    width: 300,
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: "5%",
    fontSize:  27,
    marginTop: '20%'
  },

  vender: {
    backgroundColor: '#54b6e9',
    color: 'black',
    width: 300,
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: "5%",
    fontSize:  27,
    marginTop: '20%'
  },
  perfil: {
    backgroundColor: '#247180',
    color: 'white',
    width: 300,
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: "5%",
    fontSize:  27,
    marginTop: '20%'
  },
  
});     