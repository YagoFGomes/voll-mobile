import { VStack, Text, Divider} from "native-base";

interface DepoimentosProps {
    texto: string;
    nome: string;
    idade: string; 
    localidade: string;
}

export default function Depoimentos({texto, nome, idade, localidade}:DepoimentosProps){
    return(
        <VStack>
            <Text w="100%" p={"5"} >
                {texto}
            </Text>
            <Text w="100%" px={"5"} textAlign={"center"} bold color={"gray.500"}>
                {nome}, {idade} anos, {localidade}
            </Text>
            <Divider mt={"5"} mb={5}/>
        </VStack>
    )
}