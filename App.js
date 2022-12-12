import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from "@material-native-ui/theme-provider";
import Chat from './screens/Chat';
import Home from "./screens/Home";
import Perfil from "./screens/Perfil";
import Calificaciones from './screens/Calificaciones';
import Buscador from './screens/Buscador';
import AgendarCita from './screens/AgendarCita';
import Pago from './screens/Pago';
import Calificar from './screens/Calificar';
import Citas from './screens/Citas';
import Registrarse from './screens/Registrarse';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Registrarse"
            component={Registrarse}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Perfil"
            component={Perfil}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
          />
          <Stack.Screen
            name="Calificaciones"
            component={Calificaciones}
          />
          <Stack.Screen
            name="Buscar"
            component={Buscador}
          />    
          <Stack.Screen
            name="AgendarCita"
            component={AgendarCita}
          />  
          <Stack.Screen
            name="Pago"
            component={Pago}
          />
          <Stack.Screen
            name="Calificar"
            component={Calificar}
          />
          <Stack.Screen
            name="Citas"
            component={Citas}
          />
          
                         
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
