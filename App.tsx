
import { NativeBaseProvider } from 'native-base';
import { Home } from './src/screens/Home';
import { THEME } from './src/theme'

export default function App() {

  return (
    <NativeBaseProvider theme={THEME}>
      <Home />
    </NativeBaseProvider>
  );
}

