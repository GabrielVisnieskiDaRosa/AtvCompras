import { Alert, FlatList, FlatListComponent, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Produto } from "../../componentes";

export default function Home(){

    const [produtos, setProdutos] = useState <String[]> ([]);
    const [nomeProdutos, setNomeProdutos] = useState ('')

    function handleprodutoAdd(){
        if (nomeProdutos.trim().length > 0){

            if(produtos.includes(nomeProdutos)){
                setNomeProdutos('')
                return Alert.alert("Problema", "Produto já adicionado")
            }

            setProdutos([...produtos, nomeProdutos.trim()])
            setNomeProdutos('')
        }else{
            Alert.alert("Problema ao adicionar o participante", "Nome está vazio")
        }

    }

    function handleprodutoRemove(nome: String){
        Alert.alert('Remover', `Deseja remover o participante? ${nome}`,
       [
        {text: 'Sim', onPress:() => setProdutos(prevState => prevState.filter(prod => prod != nome))},
        {text: 'Não', style:'cancel'}
    ])
    }
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Lista de compras</Text>
            <Text style = {styles.data}>Quarta, 23 de Agosto de 2024.</Text>

            <View style = {styles.form}>
                <TextInput
                    style = {styles.input}
                    placeholder="Nome do produto"
                    placeholderTextColor={'#fff'}
                    onChangeText={setNomeProdutos}
                    value={nomeProdutos}
                />

                <TouchableOpacity style = {styles.button} onPress={handleprodutoAdd}>
                    <Text style = {styles.textButton}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <Text style = {styles.title}>Produtos</Text>
            
        <FlatList
            data={produtos}
            keyExtractor={item => item}
            renderItem={({item}) =>(
                <Produto key={item} nome={item} onRemove={() => handleprodutoRemove(item)}/>
            )}
            showsVerticalScrollIndicator ={false}
            ListEmptyComponent={() =>
            <Text style={styles.listaVazia}>Sem produto</Text>
            }/>


        </View>
        
    )
}