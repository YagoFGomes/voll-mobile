import { VStack, Text } from "native-base"
import { Botao } from "../components/Botao"
import { EntradaTexto } from "../components/EntradaTexto"

export function CaixaPesquisa(){
    return(
    <VStack w="100%" alignSelf={"center"} bg="white" p={5} borderRadius={"lg"} shadow={2} mt={5}>
        <VStack flexDir="column">
            <EntradaTexto placeholder={"Digite a especialidade"} />
            <EntradaTexto placeholder={"Digite a localização"} />
        </VStack>
        <Botao mt={4}>
            Buscar
        </Botao>
    </VStack>
    )
}