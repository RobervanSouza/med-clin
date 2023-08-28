
import Login from './src/Login';
import {NativeBaseProvider, StatusBar } from 'native-base';
import { STYLES } from './src/styles/styles';

export default function App() {
  return (
    <NativeBaseProvider theme={STYLES} >
      <StatusBar backgroundColor={STYLES.colors.blue3[500]} />
      <Login/>
    </NativeBaseProvider>
  );
}
