
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignIn } from '@screens/Signin';

type AuthRoutes = {
    signIn: undefined;
}
export type AuthNavigatorRoutesprops = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='signIn'
                component={SignIn}
            />
        </Navigator>
    )

}