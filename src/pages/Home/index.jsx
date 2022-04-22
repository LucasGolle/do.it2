import { motion } from "framer-motion";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Content, Button } from "./styles";

export const Home = ({authenticated}) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated){
    return <Redirect to="/dashboard"/>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Content>
          <h1>
            do<span>.</span>it
          </h1>
          <span>Organize-se de forma fácil e efetiva</span>
          <div>
            <Button whiteSchema onClick={() => handleNavigation("/signup")}>
              Cadastre-se
            </Button>
            <Button onClick={() => handleNavigation("/login")}>Login</Button>
          </div>
        </Content>
      </Container>
    </motion.div>
  );
};
