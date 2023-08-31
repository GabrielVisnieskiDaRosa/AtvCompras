import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

type Props = {
    nome: String
    onRemove: () => void
}

export function Produto(props : Props){
    return(
        <View style ={styles.conteiner}>

            <Text style={styles.nome}>{props.nome}</Text>

            <TouchableOpacity style={styles.botao} onPress={props.onRemove}>

                <Text style={styles.textoBotao}>-</Text>    

            </TouchableOpacity>
        </View>
    )
}