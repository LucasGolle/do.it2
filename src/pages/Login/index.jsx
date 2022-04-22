import { Link } from "react-router-dom";
import {
  Button,
  AnimationContainer,
  Background,
  Container,
  Content,
} from "./styles";
import Input from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo 8 dígitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory()

  const onSubmitFunction = ({ name, email, password }) => {
    const user = { name, email, password }

    api.post("/user/register", user).then((_) => {
      toast.success("Conta criada com sucesso");
      return history.push('/login');
    })
    .catch((err) => toast.error("Erro ao criar a conta, verifique todos os campos"));

  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
            <Input
              register={register}
              name="email"
              icon={FiMail}
              lable="Email"
              placeholder="Seu melhor email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              icon={FiLock}
              lable="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              error={errors.password?.message}
            />
            <Button type="submit">Enviar</Button>
            <p>
              Não tem uma conta? Faça seu <Link to="/signup">cadastro</Link>{" "}
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
