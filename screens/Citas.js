import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';

export default class Citas extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:1, image: 'https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg',
         name:"Lucas Monk", comment:"Electricista" , date: "Fecha: jueves 24/11/22, 10:00 hs"},
      ]
    }
  }

  render() {
    return (
       <View style={styles.container}>
         <br/> <br/>
         <Text style={styles.title}>  Citas confirmadas  </Text>
         <br/> <br/>
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          return(
            <View style={styles.container}>
              <br/>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{uri: Notification.image}}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{Notification.name}</Text>
                  <Text style={styles.time}>Fecha: 24/11/22 10:00 am  </Text>
                </View>
                <Text style={styles.info} rkType='primary3 mediumLine'>{Notification.comment}</Text>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate("Calificar")}>
                  <Text style={styles.text}>Calificar</Text>  
                </TouchableOpacity>
              </View>
              <br/>
            </View>
          );
        }}/>
     </View>   
        
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#f3f3f2",
  },
  container:{
    flex:1,
    backgroundColor:'#0a0a1a',
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  title:{
    fontSize:20,
    color: "#ffffff"
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  time:{
    fontSize:22,
    color:"#808080",
  },
  name:{
    fontSize:22,
    fontWeight:"bold",
    color: "#ffffff"
  },
  info:{
    fontSize:22,
    color: "#00BFFF",
    marginTop:5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#54b6e9',
    color: 'black',
    width: 200,
    borderRadius: 15,
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: "2%",
    marginTop: '4%'
  },
  text: {
    fontSize: 27
  },
  calificacion:{
    // they will be bottom right
    position: 'absolute',
    right: 30,
    bottom: 5,
    fontWeight: "bold",
    },
    star:{
    // will be bottom right
    position: 'absolute',
    right: 0,
    bottom: 5,
    width: 20,
    height: 20,
    resizeMode: 'contain',
    },
    comment:{
    // will not surpass 3/4 of the screen
    width: '75%',
    },
    
}); 
