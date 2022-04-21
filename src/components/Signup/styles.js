import styled, { keyframes } from "styled-components"
import SignupImage from "../../assets/signup.svg"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`
export const Background = styled.div`
    @media (min-width: 1024px){
        flex: 1;
        background: url(${SignupImage}) no-repeat, var(--black);
        background-size: contain;
    }

`

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 700px;
`

const appearFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px)
    }

    to{
        opacity: 1;
        transform: translateX(0px)
    }

`

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromRight} 1s;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
       
        h1{
            margin-bottom: 32px;
        }

        p{
            margin-top: 8px;
    
        }
        a{
            font-weight: bold;
            color: var(--orange);
        }
    }
    `

export const Button = styled.button`
background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#0c0d0d")};
color: ${(props) => (props.whiteSchema ? "#0c0d0d" : "#f5f5f5")};
height: 45px;
border-radius: 8px;
border: 2px solid var(--black);
font-family: 'Roboto Mono', monospace;
margin-top: 16px;
width: 100%;
transition: 0.5s;
:hover{
    border: 2px solid #c85311;
}
`