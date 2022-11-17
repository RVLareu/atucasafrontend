import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';


export default class Pago extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  title: "Efectivo",      color:"#0f3648", image:"https://img.icons8.com/office/512/cash-in-hand.png"},
        {id:2,  title: "Crédito",     color:"#0f3648", image:"https://img.icons8.com/office/512/visa.png"},
        {id:3,  title: "Crypto",     color:"#0f3648", image:"https://img.icons8.com/office/512/blockchain.png"},
        {id:4,  title: "Débito",     color:"#0f3648", image:"https://img.icons8.com/office/512/insert-card.png"},
      ],
      showAlert: false,
      showAlert2: false 
    };
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

  setShowAlert2 = () => {
    this.setState({
      showAlert2: true
    });
  };

  setHideAlert2 = () => {
    this.setState({
      showAlert2: false
    });
  };



  render() {
  
    const {showAlert} = this.state;
    const {showAlert2} = this.state;
  
    return (
    
      <View style={styles.container}>
        <br/>
        
        <View style={styles.header}>
            <ImageBackground
              source={require('../assets/background.png')}
              style={styles.background}
            ></ImageBackground>
          </View>
        <br/>
        <Text style={styles.title}>Elija un método de pago</Text>
        
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} 
                  onPress={() => {this.setShowAlert()}
                         }>
                
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={[styles.title, {color:'#f2f3f2'}]}>{item.title}</Text>
                  </View>
                </View>
                
              </View>
            )
          }}/>
          
          <AwesomeAlert
                  show={showAlert}
                  showProgress={false}
                  title="Confirmación de pago"
                  message="Desea efectuar el pago?"
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showCancelButton={true}
                  showConfirmButton={true}
                  cancelText="Cancelar"
                  confirmText="Confirmar"
                  confirmButtonColor='#54b6e9'
                  onCancelPressed={() => {
                   this.setHideAlert();
                   }}
                  onConfirmPressed={() => {
                   this.setHideAlert();
                   this.setShowAlert2();
                   }}
                  />
                  
            <AwesomeAlert
                  show={showAlert2}
                  showProgress={false}
                  title="Su pago ha sido realizado com éxito"
                  message="La cita con el profesional ha sido confirmada"
                  closeOnTouchOutside={true}
                  closeOnHardwareBackPress={false}
                  showCancelButton={false}
                  showConfirmButton={true}
                  confirmText="Aceptar"
                  confirmButtonColor="#90ee90"
                  onConfirmPressed={() => {
                   this.setHideAlert2();
                   this.props.navigation.navigate("Citas");
                   }}
                />      
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0a0a1a',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#0a0a1a",
  },
  listContainer:{
    alignItems:'center'
  },

  
  /******** card **************/
  card:{
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor:"#e2e2e2",
    //flexBasis: '42%',
    width:120,
    height:120,
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center'
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 50,
    width: 50,
    alignSelf:'center',
    filter: 'invert(50%) brightness(150%)'
  },
  header:{
    height:200,
  },
  background: {
    width: '100%',
    height: 200
  },
  title:{
    fontSize:24,
    flex:1,
    alignSelf:'center',
    fontWeight:'bold',
    color: "#00CED1"
  },
  
});     
