import { VStack, Text, Center, Heading, View, ScrollView } from 'native-base';

import LogoSvg from '@assets/logomarcacpcbotom.svg';
import MarcaSvg from '@assets/marca.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <VStack flex={1} bg="gray.400" px={10}>
                <Center my={20}>
                    <MarcaSvg />
                </Center>
                <View bg="gray.100" borderRadius={15} px={6} >
                    <Center>
                        <Heading color="gray.700" mt={6} fontSize="lg" mb={6} fontFamily="heading">
                            Entrar
                        </Heading>
                        <Input
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCapitalize='none' //manter texto em minusculo
                        />
                        <Input
                            placeholder="Senha"
                            secureTextEntry  //nao mosrar o texto da senha 
                        />
                        <Text color="gray.700" fontSize="8" mb={10}>
                            Esqueci minha senha
                        </Text>
                        <Button title="Acessar" mb={10} />

                    </Center>
                </View>
            </VStack>
        </ScrollView>
    );
}