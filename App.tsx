
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';
import { SignIn } from './src/screens/Signin';


import { THEME } from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });
  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}

