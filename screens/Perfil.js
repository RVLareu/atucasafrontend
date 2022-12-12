import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default class Perfil extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              source={require('../assets/background.png')}
              style={styles.background}
            ></ImageBackground>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg'}}/>
          <br/> <br/>
          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Trabajos</Text>
              <Text style={styles.count}>37</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Calificación</Text>
              <Text style={styles.count}>4.3</Text>
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Lucas Monk</Text>
              <Text style={styles.info}>Electricista</Text>
              <Text style={styles.description}>Electricista matriculado en CABA</Text>
              <br/> <br/> <br/>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate("Chat")}>
              <Image style={styles.icon} source={{uri: "https://img.icons8.com/ios-glyphs/512/filled-sent.png"}}/>
                <Text style={styles.text}>Enviar Mensaje</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate("AgendarCita")}>
              <Image style={styles.icon} source={{uri: "https://img.icons8.com/ios-filled/512/calendar-11.png"}}/>
                <Text style={styles.text}>Agendar Cita</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate("Calificaciones")}>
              <Image style={styles.icon} source={{uri: "https://img.icons8.com/material/512/christmas-star.png"}}/>
                <Text style={styles.text}>Ver Calificaciones</Text> 
              </TouchableOpacity>
              <br/> <br/> <br/>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height:200,
  },
  background: {
    width: '100%',
    height: 200
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:5,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:30,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop: 0,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:4,
  },
  info:{
    fontSize:22,
    color: "#00BFFF",
    marginTop:5
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:5,
    textAlign: 'center'
  },
  container: {
    backgroundColor: "#0a0a1a",
    height: '100%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#54b6e9',
    color: 'black',
    width: 350,
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: "2%",
    marginTop: '4%'

  },
  text: {
    fontSize: 27
  },
  icon:{
    width: 20,
    height: 20,
    marginRight: 20
  },


  profileDetail:{
    marginTop:20,
    flex:1,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#ffffff"
  },
  count:{
    fontSize:18,
    color: "#ffffff"
  },
});
