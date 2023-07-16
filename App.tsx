import {NativeBaseProvider, StatusBar} from 'native-base'
import { TEMAS } from './src/estilos/temas';
import Rotas from './src/Rotas';
import { LogBox } from "react-native"

LogBox.ignoreLogs([
  'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
  ])

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}




