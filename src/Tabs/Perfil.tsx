import { VStack, Text, ScrollView, Avatar, Divider} from "native-base"
import { Titulo } from "../components/Titulo"

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500"> Meu Perfil </Titulo>

                <Avatar size={"xl"} source={{uri: "https://github.com/yagofgomes.png"}} mt={5}/>
                <Titulo color="blue.500"> Informações Pessoais </Titulo>
                <Titulo fontSize="lg" mb={1}> Yago Ferreira </Titulo>
                <Text> 26/03/1999 </Text>
                <Text> Guarda - PT </Text>

                <Divider mt={5}/>

                <Titulo color="blue.500" mb={1}> Histórico Médico </Titulo>
                <Text> Tem nada n </Text>
                <Text> Muito bom, nota 2 </Text>
            </VStack>
        </ScrollView>
    )
}