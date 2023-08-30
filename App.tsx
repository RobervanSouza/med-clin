
import {NativeBaseProvider, StatusBar } from 'native-base';
import { STYLES } from './src/styles/styles';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={STYLES} >
      <StatusBar backgroundColor={STYLES.colors.blue3[500]} />
      {/* <Login/> */}
      <Rotas/>
    </NativeBaseProvider>
  );
}
