import styled from "styled-components";

export const AppDad = styled.div`
    display: flex;
    flex-direction: column;
`


//-----------ESTILIZAÇÕES DO HEADER
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



//-----------ESTILIZAÇÕES DO BODY
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #816486;
    h1 {
        color: white;
    }
`

//CARRINHO
export const Cart = styled.img`
  height: 50px;
  cursor: pointer;
  background-color: rgba(150, 163, 184, 0.4);
  color: black;
  border-radius: 50%;
  opacity: 1;
  position: absolute;
  padding: 10px;
  right: 40px;
  top: 78px;
`

export const BotaoF = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(80deg, #822406, #f4511e 50%);
  background-color: #54295B;
  color: #ffffff;
  font-size: small;
  cursor: pointer;
  padding: 5px;
`

export const BotaoFCarrinho = styled.button`
  border-radius: 40px;
  padding: 3px;
  position: absolute;
  right: 16px;
  border: none;
  background-image: linear-gradient(80deg, #822406, #f4511e 50%);
  background-color: #54295B;
  color: #ffffff;
  font-size: small;
  cursor: pointer;
`

export const FinalizarCompra = styled.button`
  width: 140px;
  right: 16px;
  border: 0;
  padding: 12px 10px;
  outline: none;
  color: black;
  background: linear-gradient(80deg, #14540d, rgb(65, 146, 69) 70%);
  border-radius: 6px;
  cursor: pointer;
  transition: width 0.5s;
  text-shadow: 2px 2px 5px darkgrey;
  color: white;
`

export const CarrinhoH2 = styled.h2`
  position: absolute;
  top: 16px;
  left: 16px;
  color: #ffffff;
  margin: 0;
  text-shadow: 2px 2px 5px darkgrey;
  @media only screen and (max-width: 375px) {
    position: absolute;
    margin: 0;
    border: none;
  }
`

export const CarrinhoText = styled.p`
  font-size: medium;
  position: absolute;
  right: 100px;
  @media only screen and (max-width: 395px) {
    display: none;
  }
`

export const UlStyled = styled.ul`
  position: absolute;
  width: 300px;
  margin: 100px auto 0;
  padding: 10px;
  box-sizing: border-box;
  list-style: none;
  @media only screen and (max-width: 375px) {
    position: absolute;
    width: 320px;
    margin: 100px auto 0;
    padding: 10px;
    box-sizing: border-box;
  }
`

export const Itens = styled.p`
  font-size: 15px;
  position: absolute;
  right:100px;
  top: 108px;
  @media only screen and (max-width: 395px) {
    position: absolute;
    right: 30px;
    margin-top: -21px;
  }
`

export const Total = styled.p`
  text-shadow: 2px 2px 5px darkgrey;
  margin-left: 25px;
  @media only screen and (max-width: 375px) {
    margin-bottom: 50px;
  }
`

export const LiStyled = styled.li`
  background: rgba(255, 255, 255, 0.1);
  text-shadow: 2px 2px 5px darkgrey;
`
//FIM CARRINHO


//POPUP
export const Popupone = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Popupinner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 850px;
  background-color: #B592BB;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  box-shadow: 2px 2px 5px darkgrey;
  border-radius: 10px;
  margin: 10px 27px;
  width: 15vw;
  height: 60vh;
`
//FIM POPUP


export const SectionFiltros = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 70vw;
    width: 100%;
`


//INPUTS
export const DivInput = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        color: white;
        font-weight: bold;
    }
    input {
        border-radius: 5px;
        padding: 5px 5px;
    }
    select {
        border: 1px solid black;    
        padding: 5px 5px;        
        border-radius: 5px;
    }
`
//FIM INPUTS


export const SectionProdutos = styled.div`
    max-width: 90vw;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    gap: 10px;
`

//CARDS
export const DivCard = styled.div`
    /* border: 1px solid red; */
    max-height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    margin-bottom: 15px;

    img {
        max-height: 245px;
        height: 70%;
    }
    h3 {
        color: white;
        font-weight: bold;
        margin: 3%;
        text-align: center; 
    }
    p {
        color: white;
        margin: 0;
    }
    button {
        padding: 10px;
        margin: 2%;
        max-width: 50%;
        border-radius: 5px;
        border: none;
        color: white;
        transition-duration: 0.4s;
        font-size: 1.2em;
        background-color: #54295B;
        align-self: center;
    }
    button:hover {
        padding: 10px;
        margin: 2%;
        max-width: 50%;
        border-radius: 5px;
        border: 1px solid #54295B;
        color: #54295B;
        font-size: 1.2em;
        background-color: white;
        align-self: center;
    }
`


//-----------ESTILIZAÇÕES DO FOOTER
export const Footer = styled.div`
    display: flex;
    justify-content: center;
    height: 10vh;
    background-color: #3D2941;
    color: white;
`

