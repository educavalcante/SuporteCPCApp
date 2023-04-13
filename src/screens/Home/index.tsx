import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { NativeBaseProvider, Center } from 'native-base';
import { styles } from './styles';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import LogoSvg2 from '@assets/logomarcacpcbotom.svg';
import LogoSvg from '@assets/logoteste.svg';
import { Loading } from '@components/Loading';

export function Home() {
    const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });
    function handleLoginApi() {
        console.log('voce clicou no botão de acessar')
    }

    return (
        <NativeBaseProvider>
            <StatusBar
                barStyle="light-content"
                //backgroundColor="transparent"
                translucent
            />


            <View style={styles.container}>

                {fontsLoaded ? <View /> : <Loading />}
                <View style={styles.containerlogin}>
                    <Center mt={2}>
                        <LogoSvg />
                    </Center>
                    <Text style={styles.eventName}>
                        Entrar
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Cnpj"
                        placeholderTextColor="#6B6B6B"
                        keyboardType='numeric'
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Login"
                        placeholderTextColor="#6B6B6B"
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#6B6B6B"
                    />
                    <TouchableOpacity>
                        <Text style={styles.textLinkPass}>
                            Esqueci minha senha
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonLogin} onPress={handleLoginApi}>
                        <Text style={styles.textButtonLogin}>
                            ACESSAR
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textLinkCadastrar}>
                            Não possui conta? Cadastrar
                        </Text>
                    </TouchableOpacity>
                </View>
                <Center>
                    <LogoSvg />
                </Center>
            </View>
        </NativeBaseProvider>
    );
}