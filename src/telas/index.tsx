import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Consultas from "./Consultas";
import Ionicons from "react-native-vector-icons/Ionicons"
import Explorar from "./Explorar";
import Perfil from "./Perfil";


const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#0B3B60",
  },
  tabBarActiveTintColor: "#1e92ea",
  tabBarInactiveTintColor: "#FFF",
};

const navegacao = [
  {
    id: 1,
    name: "Home",
    components: Home,
    icone: "home",
  },
  {
    id: 2,
    name: "Consulta",
    components: Consultas,
    icone: "calendar",
  },
  {
    id: 3,
    name: "Explorar",
    components: Explorar,
    icone: "search",
  },
  {
    id: 4,
    name: "Perfil",
    components: Perfil,
    icone: "person",
  },

]

const Tela = createBottomTabNavigator()

export default function TelasNavegacao (){
    return (
      <Tela.Navigator screenOptions={screenOptions}>
        {navegacao.map((telas) => (
          <Tela.Screen
            key={telas.id}
            name={telas.name}
            component={telas.components}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={telas.icone} color={color} size={size} />
              ),
            }}
          />
        ))}
      </Tela.Navigator>
    );
}