import { Text, View, TextInput } from 'react-native';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>

            <Text style={styles.eventName}>
                Entrar
            </Text>
            <View style={styles.containerlogin}>
                <TextInput
                    style={styles.input}
                    placeholder="Login"
                    placeholderTextColor="#6B6B6B"
                    keyboardType='email-address'
                />
                <Text>

                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#6B6B6B"
                    keyboardType='numeric'
                />
            </View>
        </View>
    );
}