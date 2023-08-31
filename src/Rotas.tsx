import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastro from './Cadastro';
import Login from './Login';
import TelasNavegacao from './telas';

const Telas = createNativeStackNavigator();

const telasScren =
[
  {
    id:1,
    name: 'Login',
    component: Login,

  },
  {
    id:2,
    name: 'Cadastro',
    component: Cadastro,

  },
  {
    id:3,
    name: 'Tela',
    component: TelasNavegacao,

  },
]

export default function Rotas () {
    return (
      <NavigationContainer>
        <Telas.Navigator>
          {telasScren.map((tel) => (
            <Telas.Screen
            key={tel.id}
              name={tel.name}
              component={tel.component}
              options={{
                headerShown: false,
              }}
            />
          ))}
        </Telas.Navigator>
      </NavigationContainer>
    );
}