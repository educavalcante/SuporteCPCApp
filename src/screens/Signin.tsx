import { VStack, Image, Text, Center } from 'native-base'

import LogoSvg from '@assets/logo.svg';

export function SignIn() {
    return (
        <VStack flex={1} bg="gray.700">
            <Center my={20}>
                <LogoSvg />

            </Center>
        </VStack>
    );
}