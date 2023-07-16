import { ScrollView, VStack, Image} from "native-base"
import { CaixaPesquisa } from "../components/CaixaPesquisa"
import { Titulo } from "../components/Titulo"
import { CardConsulta } from "../components/CardConsulta"

import Logo from "../assets/Logo.png"
import Depoimentos from "../components/Depoimentos"


const depoimentos = [
    {
        id: 1,
        texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        nome: "Yago Gomes",
        idade: "24", 
        localidade: "Guarda/PT",
    },
    {
        id: 2,
        texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        nome: "Yago Gomes",
        idade: "24", 
        localidade: "Guarda/PT",
    },
    {
        id: 3,
        texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        nome: "Yago Gomes",
        idade: "24", 
        localidade: "Guarda/PT",
    },
    {
        id: 4,
        texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        nome: "Yago Gomes",
        idade: "24", 
        localidade: "Guarda/PT",
    },
] 

export default function Principal(){
    return(
        <ScrollView p={5}>
            <Image source={Logo} alt="Logo Voll" />
            <VStack>
                <Titulo textAlign="left" color="blue.500">Boas Vindas</Titulo>
            </VStack>
            <CaixaPesquisa />
            <Titulo color="blue.800" mt="5">Depoimentos</Titulo>

            {depoimentos.map((depoimento) => (
                <Depoimentos key={depoimento.id} nome={depoimento.nome} texto={depoimento.texto} idade={depoimento.idade} localidade={depoimento.localidade}/>
            ))
        }
            
            
        </ScrollView>

    )
}