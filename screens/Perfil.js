import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Perfil extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Trabajos</Text>
              <Text style={styles.count}>200</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Calificación</Text>
              <Text style={styles.count}>3.3</Text>
            </View>
          </View>


          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>Electricista / Plomero</Text>
              <Text style={styles.description}>Trabajador Responsable comprometido con el trabajo del lorem ipsum lorem ipsum</Text>
              
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate("Chat")}>
              <Image style={styles.icon} source={{uri: "https://img.icons8.com/ios-glyphs/512/filled-sent.png"}}/>
                <Text>Enviar Mensaje</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
              <Image style={styles.icon} source={{uri: "https://img.icons8.com/ios-filled/512/calendar-11.png"}}/>
                <Text>Agendar Cita</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate("Calificaciones")}>
              <Image style={styles.icon} source={{uri: "https://img.icons8.com/material/512/christmas-star.png"}}/>
                <Text>Ver Calificaciones</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#0a0a1a",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:5,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:10,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  icon:{
    width: 20,
    height: 20,
    marginRight: 20
  },


  profileDetail:{
    marginTop:70,
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
    color: "#00CED1"
  },
  count:{
    fontSize:18,
  },
});
