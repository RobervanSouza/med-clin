
import Login from './src/Login';
import {NativeBaseProvider, StatusBar } from 'native-base';
import { STYLES } from './src/styles/styles';
import Cadastro from './src/Cadastro';

export default function App() {
  return (
    <NativeBaseProvider theme={STYLES} >
      <StatusBar backgroundColor={STYLES.colors.blue3[500]} />
      {/* <Login/> */}
      <Cadastro/>
    </NativeBaseProvider>
  );
}
