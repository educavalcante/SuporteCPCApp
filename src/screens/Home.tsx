import { useState } from 'react';
import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';
import { Center, FlatList, Text, VStack } from 'native-base';

export function Home() {
    const [groups, setgroups] = useState(["tarefas", "agenda", "chamados", "Rats"]) 
    const [groupSelected, setGrouSelected] = useState('tarefas');

    return (
        <VStack flex={1}>
           <HomeHeader/>
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({item})=>(
                    <Group 
                    name={item}
                    isActive={groupSelected === item} 
                    onPress={()=> setGrouSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 6 }}   
                my={10}
                maxH={10}
            />

        </VStack>
    )
}