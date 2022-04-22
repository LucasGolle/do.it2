import { Container } from "./styled" 
import { FiClipboard, FiCalendar } from "react-icons/fi"
import { Button } from "../Signup/styles"

function Card ({title, date, onClick}){
    return(
        <Container>
            <span>
                <FiClipboard/> {title}
            </span>
            <hr/>
            <time>
                <FiCalendar/> {date}
            </time>
            <Button onClick={onClick}>Concluir</Button>
        </Container>
    )
} 

export default Card