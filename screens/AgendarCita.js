import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  ImageBackground
} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
 

export default class AgendarCita extends Component {

  constructor(props) {
    super(props);
    this.state = {
            selectedDate:""       
        }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              source={require('../assets/background.png')}
              style={styles.background}
            ></ImageBackground>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg'}}/>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Román Vázquez</Text>
              <Text style={styles.info}>Informática</Text>
            </View>
          </View>
   
        <br/>  
        <Text style={styles.textSelect}>Seleccione una fecha</Text>
        <View style={styles.datePickerView}>
          <DatePicker style={styles.datePicker}
            onSelectedChange={date => this.state.selectedDate=date}
          />
        </View>
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate("Pago")}>
            <Text style={styles.text}>Aceptar</Text>  
          </TouchableOpacity>        
          <TouchableOpacity style={styles.buttonContainerCancel} onPress={()=>this.props.navigation.navigate("Perfil")}>
            <Text style={styles.text}>Cancelar</Text>  
          </TouchableOpacity>        
        </View>
        
      </ScrollView>
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
  buttonContainerCancel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
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

  textSelect: {
    fontSize: 27,
    color: 'white',
    marginTop: '4%',
    textAlign: 'center'

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
    fontSize:30,
    color:"#FFFFFF",
    fontWeight: "600",
    marginTop:50,
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10,
  },
  datePicker:{
    fontSize:18,
    color: "#ffffff",
  },
  container: {
      backgroundColor: "#0a0a1a",
      height: '100%',

  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0a0a1a",
    marginTop: '-10'
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

  datePickerView:{

    backgroundColor: "#0a0a1a",

    
  }
  
});
