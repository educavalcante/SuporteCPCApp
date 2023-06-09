import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {  FlatList, Text, VStack, HStack, Heading } from 'native-base';

import { AppTabNavigatorRoutesProps } from '@routes/app.routes'; //! lembrando tipagem das rotas importadas para usar no navigation

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { TaskCard } from '@components/TaskCard';

export function Home() {
    const [groups, setgroups] = useState(["tarefas", "chamados", "Rats"]) 
    const [groupSelected, setGroupSelected] = useState('tarefas');
    const [tasks, setTasks] = useState(["Firebird 4.0", "Páginas Telemedicina", "Questionário WEB", "Rastreabilidade", "Onocologia"]) 
    const [taskSelected, setTaskSelected] = useState('Firebird 4.0');

    const navigation = useNavigation<AppTabNavigatorRoutesProps>();
    function handleOpenDetalheChamados(){
        navigation.navigate('chamadosdetail')
    }

    return (
        <VStack flex={1}>
           <HomeHeader/>
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({item})=>(
                    <Group 
                    name={item}
                    isActive={String(groupSelected).toLocaleUpperCase() === String(item).toLocaleUpperCase()} 
                    onPress={()=> setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 6 }}   
                my={10}
                maxH={10}
                minH={10}
            />
            <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="sm">
                        Tarefas
                    </Heading>
                    <Text color="gray.200" fontSize="sm">
                            {tasks.length}
                    </Text>
                </HStack>
                
                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <TaskCard 
                            onPress={handleOpenDetalheChamados}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                 />

            </VStack>

        </VStack>
    )
}