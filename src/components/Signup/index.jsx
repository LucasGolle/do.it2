import { Link } from "react-router-dom";
import {
  Button,
  AnimationContainer,
  Background,
  Container,
  Content,
} from "./styles";
import Input from "../Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
// import { useForm } from "react-hook-form";
// import * as yup from "yup"
// import { yupResolver } from "@hookform/resolvers/yup"

export const Signup = () => {

  // const schema = yup.object().shape({
  //   name: yup.string().required('Campo obrigatório!'),
  //   email: yup.string().email('Email inválido').required('Campo obrigatório!'),
  //   password: yup
  //   .string()
  //   .min(8, "Mínimo 8 dígitos")
  //   .required('Campo obrigatório!'),
  //   passwordConfirm: yup.string().oneOf([yup.ref("password")], "Senhas diferentes").required('Campo obrigatório!')
  // })

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input icon={FiUser} lable="Nome" placeholder="Seu nome" />
            <Input icon={FiMail} lable="Email" placeholder="Seu melhor email" />
            <Input
              icon={FiLock}
              lable="Senha"
              placeholder="Uma senha bem segura"
              type="password"
            />
            <Input
              icon={FiLock}
              lable="Confirmação da senha"
              type="password"
              placeholder="Confirmação de senha"
            />
            <Button>Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/link">login</Link>{" "}
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
