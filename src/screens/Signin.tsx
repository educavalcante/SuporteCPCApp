import { VStack, Image, Text, Center, Heading } from 'native-base';

import LogoSvg from '@assets/logomarcacpcbotom.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn() {
    return (
        <VStack flex={1} bg="green.600" px={10}>
            <Center my={20}>
                <LogoSvg />
                <Text color="gray.100" fontSize="sm">
                    www.cpcrbasil.com
                </Text>
            </Center>

            <Center>
                <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                    Ambiente de Suporte CPC
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
                <Button title="Acessar" />
            </Center>
        </VStack>
    );
}