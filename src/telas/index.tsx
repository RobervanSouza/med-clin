import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Consultas from "./Consultas";
import Ionicons from "react-native-vector-icons/Ionicons"
import { STYLES } from './../styles/styles';
import { color } from 'native-base/lib/typescript/theme/styled-system';



const Tela = createBottomTabNavigator()

export default function TelasNavegacao (){
    return (
      <Tela.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#0B3B60",
          },
          tabBarActiveTintColor: "#1e92ea",
          tabBarInactiveTintColor: "#FFF",
        }}>
        <Tela.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="home" />,
          }}
        />
        <Tela.Screen
          name="Consultas"
          component={Consultas}
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="calendar" />,
          }}
        />
      </Tela.Navigator>
    );
}