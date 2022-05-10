import styled from "styled-components";

export const AppDad = styled.div`
    display: flex;
    flex-direction: column;
`


// ESTILIZAÇÕES DO HEADER
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 10vh;
    background-color: #3D2941;
    padding: 2% 5%;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 25%;
    }
    img {
        max-height: 100%;
        width: auto;
    }
    h2 {
        color: white;
    };
`



// ESTILIZAÇÕES DO BODY
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #816486;
`

export const SectionFiltros = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90vw;
    width: 100%;
`

export const DivInput = styled.div` //configurações dos inputs
    display: flex;
    flex-direction: column;

    p {
        color: darkgray;
        font-weight: bold;
    }
`

export const SectionProdutos = styled.div`

`



// ESTILIZAÇÕES DO FOOTER
export const Footer = styled.div`
    display: flex;
    justify-content: center;
    height: 10vh;
    background-color: #3D2941;
    color: white;
`

