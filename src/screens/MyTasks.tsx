import { useState } from 'react';
import { Heading, SectionList, Text, VStack } from 'native-base';

import { ScreensHeader } from '@components/ScreensHeader';
import { HistoricoCard } from '@components/HistoricoCard';


export function MyTasks() {
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
        <VStack flex={1}>
            <ScreensHeader title='Histórico de Tarefas'/>
            <SectionList 
                sections={tarefas}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <HistoricoCard />
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
    )
}