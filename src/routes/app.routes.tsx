import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

import { Home } from '@screens/Home';
import { Jobs } from '@screens/Jobs';
import { MyTasks } from '@screens/MyTasks';
import { RatDay } from '@screens/RatDay';
import { Profile } from '@screens/Profile';

type AppRoutes = {
    home: undefined;
    jobs: undefined;
    mytasks: undefined;
    ratday: undefined;
    profile: undefined;
}
export type AppTabNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>; //exportar a tipagem AppRoutes

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>(); // desistruturar o createBottomNavigator

export function AppRoutes() {
    const { sizes, colors } = useTheme();  //importar o tehma
    const iconSize = sizes[6];    //criar uma constante pros icones pois todos serao do mesmo tamnanho

    return (
        <Navigator screenOptions={{
            headerShown: false,  //remover o Header de todas as telas na navegacao
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle: {
                backgroundColor: colors.gray[600],
                borderTopWidth: 0,
                height: Platform.OS === "android" ? 'auto' : 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6],
            }
        }}>
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSvg fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />
            <Screen
                name='mytasks'
                component={MyTasks}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HistorySvg fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />
            <Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <ProfileSvg fill={color} width={iconSize} height={iconSize} />
                    )
                }}
            />
            <Screen
                name='ratday'
                component={RatDay}
                options={{ tabBarButton: () => null }}
            />
            <Screen
                name='jobs'
                component={Jobs}
                options={{ tabBarButton: () => null }}
            />

        </Navigator>
    )
}