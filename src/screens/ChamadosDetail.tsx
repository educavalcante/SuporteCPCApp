import { useState } from 'react';
import { VStack, Icon, HStack, Heading, Text, Input, Center, SectionList, ScrollView } from 'native-base';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import { AppTabNavigatorRoutesProps } from '@routes/app.routes';
import { Button } from '@components/Button';
import { ChamadosCard } from '@components/ChamadosCard';

export function ChamadosDetail() {
    const navigation = useNavigation<AppTabNavigatorRoutesProps>();
    function handleGoBack(){
        navigation.goBack();
    }

    const [tarefas, setTarefas] = useState([
        {
            title: "25.5.23",
            data: ["Manobra Base dados", "Tela Uti"]
        },
        {
            title: "26.5.23",
            data: ["Implantasr Rastreabilidade"]
        },
    ])
    return (
        <VStack flex={1} bg="gray.500" >
            <VStack px={8} bg="gray.700" pt={12} >
                <TouchableOpacity onPress={handleGoBack} >
                    <Icon as={Feather} name="arrow-left" size={6} color="green.500"/>
                </TouchableOpacity>
                <HStack justifyContent="space-between" mt={4} mb={8}>
                    <Heading color="gray.100" fontSize="md" flexShrink={1}>
                        Gráfico anestesista
                    </Heading>
                    <Text color="gray.300">
                        Melhoria
                    </Text>
                
                </HStack>
                <Text color="gray.100" fontSize="sm" flexShrink={1} mb={8}>
                        Elaboração de um impresso contendo o grafico da utilziação das medicações durante o atendimento do anestesita
                </Text>
                <Center mt={1} px={1} mb={5}>
                <Input 
                    placeholder='Adicionar evolução chamado'
                    bg="gray.500"
                    borderWidth={0}
                /> 
                <Button 
                    mt={2}
                    title="Atualizar Chamado"
                    bg="green.500"
                    _pressed={  // estilizar quando tiver pressionado
                        {
                            bg: "gray.600"
                        }
                    }
                />
                </Center>

            </VStack>
            <ScrollView contentContainerStyle={{paddingBottom: 36}}>
                <VStack   bg="gray.500" >     
                    <SectionList 
                        sections={tarefas}
                        keyExtractor={item => item}
                        renderItem={({item}) => (
                            <ChamadosCard />
                        )}
                        renderSectionHeader={({section}) => (
                            <Heading color="gray.200" fontSize="sm" mt={10} mb={3}>
                                {section.title}
                            </Heading>

                        )}  
                        px={6}
                        contentContainerStyle={tarefas.length === 0 && { flex: 1, justifyContent:'center'}}
                        ListEmptyComponent={() => (
                            <Text>
                                Não há tarefas registrados ainda. {'\n'}
                                Vamos analisar as demandas...
                            </Text>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                                    
                </VStack>      
            </ScrollView>
            <Center  px={8} >
                <Button px={4}
                    mt={2}
                    title="Finalizar Chamado"
                    bg="red.500"
                    _pressed={  // estilizar quando tiver pressionado
                        {
                            bg: "gray.600"
                        }
                    }
                />
            </Center>
        </VStack>
    )
}