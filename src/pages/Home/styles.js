import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;

`
export const Content = styled.div`
    max-width:400px;
    h1{
        text-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
        font-size: 2.5rem;
        span{
            color: #c85311;
        }
    }

    div{
        flex: 1;
        display: flex;
        margin-top: 1rem;

        button + button {
            margin-left: 1rem;
        }

        span{
            margin-bottom: 2rem;
            font-size: 1.8rem;
            flex-wrap: wrap;
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