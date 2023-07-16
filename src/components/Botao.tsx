import { Button, ITextProps } from "native-base"
import { ReactNode } from "react"

interface ButtonProps extends ITextProps{
    children: ReactNode
}

export function Botao({ children, ...rest }){
    return(
    <Button w="100%" bg="blue.800" mt={10} borderRadius="lg" {...rest}>
        { children }
    </Button>
            
    )
}