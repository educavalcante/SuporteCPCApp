import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   backgroundColor: '#008898',
        backgroundColor: '#008898',
        //  alignItems: "center",
        paddingTop: '50%',
        marginTop: 20,
    },
    containerlogin: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        alignItems: 'center',
        margin: 10
    },
    eventName: {
        color: '#000000',
        fontSize: 28,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 5,

    },
    textLinkPass: {
        color: '#1F1E25',
        fontSize: 8,
        marginTop: 1,
        paddingLeft: 100,
        marginBottom: 20,
    },
    textLinkCadastrar: {
        color: '#1F1E25',
        fontSize: 8,
        marginTop: 1,
        paddingLeft: 10,
        marginBottom: 20,
    },
    input: {
        height: 56,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderColor: "#6B6B6B",
        borderWidth: 0.8,
        fontSize: 14,
        color: '#1F1E25',
        margin: 2,
        paddingLeft: 10,
        width: 310
    },
    buttonLogin: {
        height: 50,
        width: 310,
        backgroundColor: '#000000',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textButtonLogin: {
        color: '#FFFFFF',
        fontSize: 12,

    }
});
