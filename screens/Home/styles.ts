import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:24,
        backgroundColor:'#131016'
    },

    title:{
        color:'#fff',
        fontSize: 24,
        fontWeight:'bold',
        marginTop:48
    },

    data:{
        color:'#7c7b7b',
        fontSize:15
    },

    form:{
        flexDirection:'column',
        height:120,
        marginTop:24,
        gap:10
    },
    
    input:{
        height:56,
        backgroundColor: '#1F1E25',
        color:'#fff',
        paddingLeft:16,
        borderRadius:15,
        fontSize:15,
        flex:1
    },

    button:{
        width:362,
        height:56,
        borderRadius:5,
        backgroundColor:'#31cf67',
        alignItems:'center',
        justifyContent:'center'
    },

    textButton:{
        fontSize:28,
        color:'#fff'
    },


    listaVazia:{
        color: '#fff',
        fontSize:14,
        textAlign: 'center'
      }
})