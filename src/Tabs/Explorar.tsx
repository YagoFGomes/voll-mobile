
import { ScrollView, VStack} from "native-base"
import { CaixaPesquisa } from "../components/CaixaPesquisa"
import { Titulo } from "../components/Titulo"
import { CardConsulta } from "../components/CardConsulta"

export default function Explorar(){
    return(
        <ScrollView p={5}>
            <CaixaPesquisa />
            <Titulo color="blue.500" mb="5">Resultado da busca</Titulo>

            <CardConsulta nome="Dr. Yago" especialidade="Gamer" foto="https://github.com/yagofgomes.png"  />
            <CardConsulta nome="Dr. Yago" especialidade="Gamer" foto="https://github.com/yagofgomes.png"  />
            <CardConsulta nome="Dr. Yago" especialidade="Gamer" foto="https://github.com/yagofgomes.png"  />
            <CardConsulta nome="Dr. Yago" especialidade="Gamer" foto="https://github.com/yagofgomes.png"  />
            <CardConsulta nome="Dr. Yago" especialidade="Gamer" foto="https://github.com/yagofgomes.png"  />
        </ScrollView>

    )
}