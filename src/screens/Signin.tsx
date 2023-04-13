import { VStack, Image, Text, Center, Heading } from 'native-base';

import LogoSvg from '@assets/logomarcacpcbotom.svg';

import { Input } from '@components/Input';

export function SignIn() {
    return (
        <VStack flex={1} bg="green.600">
            <Center my={20}>
                <LogoSvg />
                <Text color="gray.100" fontSize="sm">
                    www.cpcrbasil.com
                </Text>
            </Center>

            <Center>
                <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                    Ambiente de Suporte
                </Heading>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
            </Center>
        </VStack>
    );
}