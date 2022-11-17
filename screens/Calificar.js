import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ImageBackground
} from 'react-native';
import { Rating } from 'react-native-ratings';
import AwesomeAlert from 'react-native-awesome-alerts';
 

export default class Calificar extends Component {

  constructor(props) {
    super(props);
    this.state = {
            starCount: 3.5,
            showAlert: false   
        }
  }
  
  setShowAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  setHideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  
  ratingCompleted(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
  
    const {showAlert} = this.state;
    
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <ImageBackground
              source={require('../assets/background.png')}
              style={styles.background}
            ></ImageBackground>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg'}}/>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Lucas Monk</Text>
              <Text style={styles.info}>Electricista</Text>
            </View>
          </View>
   
          <br/>  
          <Text style={styles.name}>Por favor ingrese su calificación</Text>
        <View style={styles.ratingContainer}>
          <Rating
           type='custom'
           ratingColor='#3498db'
           ratingBackgroundColor='#c8c7c8'
           ratingCount={5}
           imageSize={30}
           onFinishRating={this.setState}
           style={{ paddingVertical: 10 }}
           />
        </View>
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.setShowAlert()}>
            <Text style={styles.text}>Aceptar</Text>  
          </TouchableOpacity>        
          <TouchableOpacity style={styles.buttonContainerCancel} onPress={()=>this.props.navigation.navigate("Citas")}>
            <Text style={styles.text}>Cancelar</Text>  
          </TouchableOpacity>        
        </View>
        
        <AwesomeAlert
                  show={showAlert}
                  showProgress={false}
                  title="Calificación realizada"
                  message="Gracias por su opinión!"
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showCancelButton={false}
                  showConfirmButton={true}
                  confirmText="Aceptar"
                  confirmButtonColor="#90ee90"
                  onConfirmPressed={() => {
                   this.setHideAlert();
                   this.props.navigation.navigate("Home");
                   }}
                />
                 
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
  text: {
    fontSize: 27
  },  
  ratingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a1a'
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0a0a1a",
    marginTop: '-10'
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
  textSelect: {
    fontSize: 27,
    color: 'white',
    marginTop: '4%',
    textAlign: 'center'

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
    textAlign: 'center'

  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10,
  },
  datePicker:{
    fontSize:18,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
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
  container: {
    backgroundColor: "#0a0a1a",
    height: '100%',

},
  
});
