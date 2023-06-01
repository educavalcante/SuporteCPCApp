import { TouchableOpacity, TouchableOpacityProps  } from "react-native";
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { HStack, Heading, Icon, VStack, Text } from "native-base";


type Props = TouchableOpacityProps & {

};

export function  TaskCard({...rest}: Props ){
    return(
        <TouchableOpacity {...rest}>
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
                <Icon 
                    as={MaterialIcons}
                    name="check"
                    color="gray.200"
                    size={5}
                    m={4}                    
                />
                <VStack flex={1}>
                    <Heading fontSize="md" color="white" numberOfLines={1}>
                        Firebird 4.0 (HO)
                    </Heading>

                    <Text fontSize="ss" color="gray.200" numberOfLines={2}>
                        Elaborar projeto de migração e proposta comercial
                    </Text>
                </VStack>
                <Icon 
                    as={Entypo}  name="chevron-thin-right"  color="gray.300"
                           
                />
            </HStack>
        </TouchableOpacity>
    );
}