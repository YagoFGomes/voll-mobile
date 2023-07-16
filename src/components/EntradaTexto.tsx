import { Input, FormControl } from "native-base"

interface EntradaProps {
    label?: string;
    placeholder: string;
}

export function EntradaTexto({ label, placeholder, ...rest }:EntradaProps){
    return(
        <FormControl mt={3} {...rest}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input placeholder={placeholder} size="lg" w="100%" borderRadius={"lg"} bgColor={"gray.100"} shadow={3}/>

            
        </FormControl>
    )
}
