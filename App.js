import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Chat from './screens/Chat';
import Home from "./screens/Home";
import Perfil from "./screens/Perfil";
import Calificaciones from './screens/Calificaciones';
import Buscador from './screens/Buscador';
import AgendarCita from './screens/AgendarCita';
import Pago from './screens/Pago';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
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
                         
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
