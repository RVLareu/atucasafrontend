import Api from "../components/Session";
import { useRef, useState, useEffect } from 'react';
//import useAuth from '../hooks/useAuth';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Component } from 'react';
import Registrarse from '../screens/Registrarse';
import Stack from '@mui/material/Stack';
import { Button, Divider, Typography, TextField } from '@mui/material';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';


const LOGIN_URL = '/login/';


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
       //setAuth: useAuth(),
       error: false,
       open: false,
       //const location = useLocation();
       //const from = location.state?.from?.pathname || "/";

       //const userRef = useRef();
       //const errRef = useRef();

       user: '',
       pwd: '',
       errMsg: ''
    }
    
    this.handleOpen = this.handleOpen.bind(this, false);
    this.handleUser = this.handleUser.bind(this, '');
    this.handlePsw = this.handlePsw.bind(this, '');
 
   }
   
   
   handleOpen = () => {
     this.setState({open: true})
    };
   
   
   handleUser = e => {
     this.setState({user: e.target.value})
    };


   handlePsw = e => {
     this.setState({psw: e.target.value})
    };
 

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    /*useEffect(() => {
        setErrMsg('');
    }, [this.state.user, this.state.pwd])*/

    handleSubmit = e => {
        //e.preventDefault();

        try {
            const response = Api.post(LOGIN_URL,
                JSON.stringify({ 'username': this.state.user, 'password': this.state.pwd }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(JSON.stringify(response));
            //const accessToken = response?.data?.accessToken;
            //const roles = response?.data?.roles;
            //setAuth({ user, pwd, roles, accessToken });

            window.localStorage.setItem("username", this.state.user)
            //navigate(from, { replace: true });
            window.location.href = from;
        } catch (err) {
            setError(true)
            if (!err?.response) {
                setErrMsg('El servidor no responde');
            } else if (err.response?.status === 401) {
                setErrMsg('Contraseña o usuario incorrecto');
            } else if (err.response?.status === 402) {
                setErrMsg('No tiene autorización');
            } else {
                setErrMsg('El ingreso ha fallado');
            }
            errRef.current.focus();
        }
    }
 
     
  
  render() {
    return (
      <ImageBackground
        source={require('../assets/background.png')}
      >
        <ThemeProvider theme={theme}>
            <Registrarse setOpen={() => this.handleOpen} handleOpen={() => this.handleOpen} open={this.state.open}/>
            <Stack direction="row" spacing={15} sx={{flex: '1', alignItems:'center', justifyContent: 'center', mt: 3}}> 
                <Stack direction="column" spacing={5} sx={{flex:1, alignItems:'center', maxWidth: '50%'}}>
                    <Typography color="#0000ff" variant="h3" >
                        ATuCasa
                    </Typography>
                    //<img src={Image} height='90%' width='90%'/>
                    <Typography color="#dc9c13" variant="subtitle1"> 
                        Ingresá a ATuCasa
                    </Typography>
                </Stack>    
                <Stack direction="column" spacing={3}> 
                    <TextField error={this.state.error} label="Usuario o Email" variant="outlined" onChange={(e) => this.handleUser} />    
                    <TextField error={this.state.error} type="password" label="Contraseña" variant="outlined" onChange={(e) => this.handlePsw} helperText={this.state.error ? "Contraseña o usuario incorrecto" : ""}/>
                        <Button variant="contained" sx={{color: '#f2f3f2'}} onClick={() => {this.handleSubmit; this.props.navigation.navigate("Home")}}>
                            Iniciar Sesión  
                        </Button>
                    <Typography color="blue" variant='h8'>
                        ¿Olvidaste tu contraseña?
                    </Typography>
                    <Divider />
                    <Button variant="contained" sx={{color: '#f2f3f2', fontWeight: 'bold'}} onClick={() => this.handleOpen}>
                        Crear cuenta nueva
                    </Button>
                </Stack>
            </Stack>
        </ThemeProvider>
      </ImageBackground>  
   );
   
   }

}

const theme = createTheme({
    palette: {
        primary: {
          main: '#0000ff',
        },
        secondary:{
            main: '#0000ff',
        } 
      },
});

