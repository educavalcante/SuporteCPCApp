import { HStack, Heading, Text, VStack } from "native-base";

export function ChamadosCard(){
    return(
        <HStack w="full" px={5} py={4} mb={3} bg="gray.600" rounded="md"
            alignItems="center" justifyContent="space-between">
                <VStack mr={5}>
                    <Heading color="white" fontSize="sm" textTransform="capitalize">
                        Eduardo
                    </Heading>
                    <Text color="gray.100" numberOfLines={1} fontSize="sm">
                        Agendada visita técnica medico coordenador anestesia
                    </Text>
                </VStack>
                <Text color="gray.300" fontSize="sm">
                    08:56
                </Text>
        
        </HStack>
    );
}