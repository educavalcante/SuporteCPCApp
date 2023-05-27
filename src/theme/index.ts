import { extendTheme } from 'native-base'

export const THEME = extendTheme(
    {
        colors: {
            green: {
                900: '#38B2AC',
                800: '#81E6D9',
                700: '#00875F',
                600: '#008898',
                500: '#00B37E',

            },
            gray: {
                700: '#121214',
                600: '#202024',
                500: '#29292E',
                400: '#323238',
                300: '#7C7C8A',
                200: '#C4C4CC',
                100: '#E1E1E6'
            },
            white: '#FFFFFF',
            red: {
                500: '#F75A68'
            }
        },
        fonts: {
            heading: 'Roboto_700Bold',
            body: 'Roboto_400Regular',
        },
        fontSizes: {
            ss: 8,
            xs: 10,
            sm: 12,
            mm: 14,
            md: 16,
            lg: 18,
            xl: 20,
        },
        sizes: {
            14: 56,
            33: 148
        }
    }
)