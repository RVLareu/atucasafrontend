import Api from "../components/Session";
import * as React from 'react';
import { Component } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import { useState } from 'react';
import swal from 'sweetalert2';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';


const PWD_ERROR = "At least 8 characters long and contain at least one number, one uppercase letter, and one lowercase letter."
const USER_ERROR = "Username must be at least 3 characters long and contain only letters and numbers."
const PWD_MATCH_ERROR = "Passwords do not match."

const USER_REGEX = /^[A-z][A-z0-9-_@].{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register/';



export default class Registrarse extends Component {

  constructor(props) {
    super(props);
    this.state = {
             user: '',
             pwd: '',
             matchPwd: '',
             errorPwd: false,
             errorUser: false,
             errorMatch: false 
           }
 
   }
   
   handleClose = () => {
     this.props.setOpen()
   }
   
   handleUserChange = (event) => {
        USER_REGEX.test(event.target.value) ? this.setState({errorUser: false}) : this.setState({errorUser: true});
        this.setState({user: event.target.value});
    }
    
    handlePwdChange = (event) => {
        PWD_REGEX.test(this.state.pwd) ? this.setState({errorPwd: false}) : this.setState({errorPwd: true});
        this.setState({pwd: event.target.value})
    }
    
    handleMatchPwdChange = (event) => {
        event.target.value === this.state.pwd ? this.setState({errorMatch: false}) : this.setState({errorMatch: true});
        this.setState({matchPwd: event.target.value});
    }
   
   handleRegister = () => {
        if (this.state.errorUser || this.state.errorPwd || this.state.errorMatch) {
            console.log("Error");
            return;           
        }
        Api.post(REGISTER_URL,
            JSON.stringify({ 'username':this.state.user, 'password':this.state.pwd }),
            {
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(() => {
            //this.props.setOpen(false);
            swal.fire({title: "Exito", text:"Te registraste exitosamente!", icon: "success"})
            
        }).catch((err) => {
            swal.fire({title: "Error", text:`Error registrandose: "${(err.response ? err.response.data.detail : err)}"`, icon: "error"})
        });
    }
   
   
   
  render() {
    return (
      <ImageBackground
        source={require('../assets/background.png')}
      >
        <View onClose={() => {this.handleClose}}>
            <Box>
                <Stack direction="column" spacing={2} sx={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <br/>
                    <Text style={[{color:'#f2f3f2'}]}>Unite a ATuCasa</Text>
                    <br/>
                    <TextField error={this.state.errorUser}  required id="outlined-basic" label="Usuario" variant="outlined" onChange={(event) => {this.handleUserChange(event)}} helperText={this.state.errorUser ? USER_ERROR : ''}/>
                    <TextField error={this.state.errorPwd} required id="outlined-basic" label="Contraseña" variant="outlined" type="password" onChange={(event) => {this.handlePwdChange(event)}} helperText={this.state.errorPwd ? PWD_ERROR : ''}/>
                    <TextField error={this.state.errorMatch} required id="outlined-basic" label="Confirmar Contraseña" variant="outlined"  type="password" onChange={(event) => {this.handleMatchPwdChange(event)}} helperText={this.state.errorMatch ? PWD_MATCH_ERROR : ''}/>
                <Button variant="contained" onClick={() => {this.handleRegister(); this.props.navigation.navigate("Login")}}>Registrarse</Button>
                <br/>
                </Stack>
            </Box>
        </View>
      </ImageBackground>
   );
   
   }

}

