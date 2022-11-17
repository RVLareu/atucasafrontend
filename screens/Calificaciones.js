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

export default class Calificaciones extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name:"Frank Odalthh",    comment:"Estoy bastante conforme con el servicio prestado.", calificacion: 4},
        {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"John DoeLink",     comment:"Respondió rápidamente a la convocatoria, y su trato fue excelente.", calificacion: 4.2},
        {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"March SoulLaComa", comment:"Resolvió el problema con buena predisposición y rapidez.", calificacion: 4.2},
        {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"Finn DoRemiFaso",  comment:"Realizó el trabajo de manera efectiva, le faltó un poco de puntualidad.", calificacion: 3},
        {id:5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name:"Maria More More",  comment:"Aunque el precio me pareció un poco alto, cumplió bien con la tarea.", calificacion: 3.1},
        {id:6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name:"Clark June Boom!", comment:"Al poco tiempo de realizado el trabajo volvió a presentar una falla.", calificacion: 2},
        {id:7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name:"The googler",      comment:"Excelente servicio y precio. Realizó el trabajo en un día feriado. Recomendable.", calificacion: 4.9},
      ]
    }
  }

  render() {
    return (
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
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{uri: Notification.image}}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{Notification.name}</Text>
                  <Text style={styles.time}>
                    9:58 am
                  </Text>
                </View>
                <Text style={styles.comment} rkType='primary3 mediumLine'>{Notification.comment}</Text>
                <Text style={styles.calificacion}>{Notification.calificacion}</Text>
                <Image style={styles.star}source={{uri: "https://img.icons8.com/material/512/christmas-star.png"}}/>
              </View>
            </View>
          );
        }}/>
        
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#f3f3f2",
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
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
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
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
