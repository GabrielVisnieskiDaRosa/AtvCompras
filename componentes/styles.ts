import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 10,
        alignItems:'center',
        marginTop: 10
    },

    nome:{
        color: '#fff',
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },

    botao:{
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor:'#E23C44',
        alignItems:'center',
        justifyContent:'center'
        
    },

    textoBotao:{
        fontSize:28,
        color:'#fff'
    }
})