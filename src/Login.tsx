import { VStack, Image, Text, Box, FormControl, Input, Link} from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import { Titulo } from './components/Titulo'
import { Botao } from './components/Botao';
import { EntradaTexto } from './components/EntradaTexto';


export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent={"center"} padding={5} >
      <Image source={Logo} alt="Logo Voll" />
     <Titulo color="blue.500">
      Faça login em sua conta
     </Titulo>
      
      <Box>
        <EntradaTexto label="Email" placeholder='Insira seu endereço de email'/>
        <EntradaTexto label="Senha" placeholder='Insira sua senha'/>
      </Box>
      <Botao onPress={()=> navigation.navigate('Tabs')}>
        Entrar
      </Botao>
      <Link href='https://github.com/yagofgomes' mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w={"100%"} flexDirection={"row"} justifyContent={"center"} mt={8}>
        <Text>Ainda não tem cadastro</Text>
        <TouchableOpacity>  
          <Text color={"blue.500"} onPress={() => { navigation.navigate("Cadastro")}}>Faça seu cadastro? </Text> 
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
