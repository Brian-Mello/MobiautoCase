import styled from 'styled-components';

export const HomePageContainer = styled.div `
    width: 100%;
    min-width: 300px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Manrope', sans-serif;
`

export const MainContainer = styled.div `
    width: 100%;
    height: 100vh;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media(max-width: 900px){
        height: auto;
        min-height: 100vh;
    }
`

export const MainContainerHeader = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #c6c6c6;
`

export const MainContainerFiltersSection = styled.section `
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 900px){
        min-width: 50%;
        min-height: 360px;
        flex-direction: column;
    }
`

export const MainContainerDetalhesSection = styled.section `
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 900px){
        min-width: 50%;
        min-height: 550px;
        flex-direction: column;
    }
`

export const SearchFormComponent = styled.div `
    min-width: 600px;
    height: 100px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px #b3b3b3;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media(max-width: 900px){
        min-width: 30%;
        min-width: 300px;
        height: 300px;
        flex-direction: column;
    }
`

export const Title = styled.h1 `
    color: #000000;
    font-size: 35px;
`