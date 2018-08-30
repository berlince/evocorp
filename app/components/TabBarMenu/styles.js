import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: "#115E54", 
        elevation: 4, 
        marginBottom: 6
    },

    conteudo: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },

    tituloView: {
        height: 50, 
        justifyContent: 'center'
    },

    titulo: {
        color: '#FFF', 
        fontSize: 20, 
        marginLeft: 20
    },

    opcoesView: {
        flexDirection: 'row', 
        marginRight: 20
    },

    addContato: {
        width: 50, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    sairView: {
        justifyContent: 'center'
    },

    sairText: {
        fontSize: 20, 
        color: '#FFF'
    },

    tabBar: {
        backgroundColor: '#115E54', 
        elevation: 0
    }
})

export default styles