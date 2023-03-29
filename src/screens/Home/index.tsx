import { Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home() {

    function handleLoginApi() {
        console.log('voce clicou no botão de acessar')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}>
                Entrar
            </Text>
            <View style={styles.containerlogin}>
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
            </View>
        </View>
    );
}