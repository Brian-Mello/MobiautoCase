import styled from 'styled-components';

export const VeiculoCardComponent = styled.div `


    min-width: 500px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 0 10px #b3b3b3;
    @media(max-width: 900px){
        min-width: 90%;
        height: 500px;
    }
`

export const VeiculoCardHeader = styled.header `
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #63CCA7;
    border-radius: 15px 15px 0 0;
    color: black;
    font-size: 18px;
    @media(max-width: 900px){
        height: 10%;
    }
`

export const VeiculoCardBody = styled.main `
    width: 100%;
    min-height: 60%;
    padding:0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width: 900px){
        min-width: 80%;
        min-height: 80%;
    }
`

export const VeiculoCardFooter = styled.footer `
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding:0 20px;
    border-radius: 0 0 15px 15px;
    @media(max-width: 900px){
        height: 10%;
    }
`

export const VeiculoCardItemsRows = styled.div `
    min-width: 100%;
    height:20%;
    display: flex;
    border-bottom: 1px solid #b3b3b3;
    @media(max-width: 900px){
        flex-direction: column;
        border-bottom: none;
        justify-content: space-evenly;
    }
`

export const VeiculoCardMarca = styled.div `
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    @media(max-width: 900px){
        width: 100%;
        border-bottom: 1px solid #b3b3b3;
    }
`

export const VeiculoCardModelo = styled.div `
    min-width: 70%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    @media(max-width: 900px){
        width: 100%;
        border-bottom: 1px solid #b3b3b3;
    }
`

export const VeiculoCardCombutivel = styled.div `
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    @media(max-width: 900px){
        width: 100%;
        border-bottom: 1px solid #b3b3b3;
    }
`

export const VeiculoCardCombustivelSigla = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    @media(max-width: 900px){
        width: 100%;
        border-bottom: 1px solid #b3b3b3;
    }
`

export const VeiculoCardAno = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    @media(max-width: 900px){
        width: 100%;
        border-bottom: 1px solid #b3b3b3;
    }
`

export const VeiculoCardCodigoFipe = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    @media(max-width: 900px){
        width: 100%;
        border-bottom: 1px solid #b3b3b3;
    }
`

export const VeiculoCardMesReferencia = styled.div `
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    @media(max-width: 900px){
        width: 100%;
        border-bottom: 1px solid #b3b3b3;
    }
`

export const VeiculoCardTipo = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    @media(max-width: 900px){
        width: 100%;
        border-bottom: 1px solid #b3b3b3;
    }
`

export const VeiculoCardValor = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media(max-width: 900px){
        width: 100%;
    }

`

export const Text = styled.p `
    margin: 0 0 0 10px;
    padding: 0;
`