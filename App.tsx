
import { NativeBaseProvider } from 'native-base';
import { SignIn } from './src/screens/Signin';

import { THEME } from './src/theme'

export default function App() {

  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn />
    </NativeBaseProvider>
  );
}

