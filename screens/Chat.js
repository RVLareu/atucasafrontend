
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button
} from 'react-native';

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
      ],
        name_address: '',
        id: 0,
        replies: [
            {date:"9:50 am", type:'in', message: "Buenas tardes, en qué te ayudo?"},
            {date:"9:52 am", type:'in', message: "Si, por supuesto, agende una cita tranquilo maestro!"},
            {date:"9:52 am", type:'in', message: "De nada!"}
        ]

    };
  }

  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }


  render() {

    return (
      <View style={styles.container}>

        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            )
          }}/>
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                ref={input => { this.textInput = input }} 
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                onChangeText={(name_address) => {
                    this.setState({name_address})}
                }/>
          </View>

            <TouchableOpacity 
                style={styles.btnSend}
                onPress={() => {                    
                    this.setState({name_address: ''});
                    this.textInput.clear()
                    
                    this.setState({
                        data: [
                            ...this.state.data,
                            {id: this.state.id, date:"9:50 am", type:'out', message: this.state.name_address}]
                    })

                    this.state.id += 1
                    return new Promise(() =>
                        setTimeout(() => { 
                            this.setState({
                            data: [
                                ...this.state.data,
                                {...this.state.replies[this.state.id == 1 ? 0 : this.state.id == 3 ? 1 : 2], id: this.state.id }]
                            })
                            this.state.id += 1 
                        }, 1500)
                    );
                }
                    
            }>
              <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#14546c",
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#0e3748',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#1bb3ca",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    margin: 15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
}); 