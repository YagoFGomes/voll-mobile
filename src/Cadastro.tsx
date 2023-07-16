import { VStack, Image, Text, Box, FormControl, Input, Link, Checkbox, ScrollView} from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo'
import { Botao } from './components/Botao';
import { EntradaTexto } from './components/EntradaTexto';
import { useState } from 'react';
import {secoes} from "./utils/CadastroEntradaTexto"
 

export default function Cadastro() {

  const [numeroSecao, setNumeroSecao] = useState(0);

  function avancarSecao(){
    if(numeroSecao < secoes.length -1 ){
      setNumeroSecao(numeroSecao+1)
    }
  }
  function retornarSecao(){
    if(numeroSecao > 0 ){
      setNumeroSecao(numeroSecao-1)
    }
  }

  return (
    <ScrollView flex={1}  padding={5} >
      <Image source={Logo} alignSelf={"center"} alt="Logo Voll" />
     <Titulo>
      {secoes[numeroSecao].titulo}
     </Titulo>
      
      <Box>
        {
          secoes[numeroSecao]?.entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id}/>
          })
        }
        {numeroSecao == 2 &&<Text color="blue.800" fontWeight={"bold"} fontSize={"md"} mt={2} mb={2}>Selecione o plano: </Text> }
        {
          
          secoes[numeroSecao]?.checkbox?.map(checkbox => {
            return <Checkbox value={checkbox.value} key={checkbox.id}>{checkbox.value} </Checkbox>
          })
        }
      </Box>

      {numeroSecao > 0 && <Botao bgColor="gray.400" mt={4} borderRadius="lg" onPress={() => retornarSecao()} >
        Voltar
      </Botao>}
      <Botao w="100%" bg="blue.800" mt={4} mb={20} borderRadius="lg" onPress={() => avancarSecao()}>
        Avançar
      </Botao>
      
    </ScrollView>
  );
}
