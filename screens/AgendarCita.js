import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
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
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>Electricista / Plomero</Text>
            </View>
        </View>
   
        <br/>  
        <Text style={styles.datePicker}>Seleccione una fecha</Text>
        
        <DatePicker
          onSelectedChange={date => this.state.selectedDate=date}
        />
        
       /* <Button
          title="Aceptar"
        />*/
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
    fontWeight: "600",
    marginTop:40,
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
