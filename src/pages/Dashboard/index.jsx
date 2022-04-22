import { Redirect } from "react-router-dom";
import { Container, InputContainer } from "./styles";
import Input from "../../components/Input"
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi"

export const Dashboard = ({authenticated}) =>{
    const { register,  handleSubmit } = useForm()
     
    if (!authenticated){
        return <Redirect  to="/login"/>;
      }


    return (
        <>
        <Container>
            <InputContainer>
            <time>22 de abril de 2022</time>
            <Input icon={FiEdit2} placeholder="Nova tarefa" register={register} name ="task"/>
            </InputContainer>
        </Container>
        </>
    )
}