
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme'
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });
  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}

