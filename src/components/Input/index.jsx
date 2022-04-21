import {Container, InputContainer} from "./styles"

function Input({lable, icon: Icon, ...rest}){
  return (
      <Container>
          <div>{lable}</div>

          <InputContainer>
            {Icon && <Icon size={20} />}
            <input {...rest}/>
          </InputContainer>
      </Container>
  )
}

export default Input