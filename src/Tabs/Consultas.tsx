import { VStack, Divider, ScrollView } from "native-base"
import { CardConsulta } from "../components/CardConsulta"
import { Titulo } from "../components/Titulo"
import { Botao } from "../components/Botao"

export default function Consultas(){
    return(
        <ScrollView p={5}>
            <Titulo color="blue.500" >Minhas Consultas</Titulo>
            <Botao mt={5} mb={5}> Agendar nova consulta</Botao>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
            <CardConsulta nome="Dr. Yago" especialidade="Gamer" foto="https://github.com/yagofgomes.png" data="16/07/2023" foiAgendado/>

            <Divider mt={5} />
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas Passadas</Titulo>

            <CardConsulta nome="Dr. Yago" especialidade="Gamer" foto="https://github.com/yagofgomes.png" data="16/07/2023" foiAtendido/>
            <CardConsulta nome="Dr. Yago" especialidade="Gamer" foto="https://github.com/yagofgomes.png" data="16/07/2023" foiAtendido/>
            <CardConsulta nome="Dr. Yago" especialidade="Gamer" foto="https://github.com/yagofgomes.png" data="16/07/2023" foiAtendido/>
        </ScrollView>
    )
}