import styled from "styled-components";

export const AppDad = styled.div`
    display: flex;
    flex-direction: column;
`


//-----------ESTILIZAÇÕES DO HEADER---------------
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 3vh;
    background-color: #3D2941;
    padding: 2% 5%;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 25%;

        img {
          width: 50px;
          margin: -10px;
        }
    }
    img {
        max-height: 100%;
        width: auto;
    }
    h2 {
      text-shadow: 2px 2px 5px darkgrey;
      position: absolute;
      padding-left: 50px;
      color: white;
    };
`

//-----------ESTILIZAÇÕES DO BODY------------------
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
  height: 38px;
  cursor: pointer;
  background-color: rgba(150, 163, 184, 0.4);
  color: black;
  border-radius: 50%;
  opacity: 1;
  position: absolute;
  padding: 10px;
  right: 40px;
  top: 12px;
`

export const BotaoF = styled.button`
 position: absolute;
  top: 23px;
  right: 18px;
  width: 90px;
  height: 35px;;
  border-radius: 10px;
  border: none;
  background-color: #54295B;
  color: #ffffff;
  font-size: small;
  cursor: pointer;
  padding: 5px;
  font-weight: bold;
`

export const BotaoFCarrinho = styled.button`
 border-radius: 50px;
  padding: 3px;
  position: absolute;
  right: 16px;
  border: none;
  height: 25px;
  width: 30px;
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
  background: linear-gradient(80deg, #14540d, rgb(65, 146, 69) 70%);
  border-radius: 6px;
  cursor: pointer;
  transition: width 0.5s;
  text-shadow: 2px 2px 5px darkgrey;
  color: white;
  font-size: 14px;
  font-weight: bold;
`

export const CarrinhoH2 = styled.h2`
  position: absolute;
  top: 24px;
  left: -5px;
  color: #ffffff;
  margin: 0;
  text-shadow: 2px 2px 5px darkgrey;
  font-size: 30px;
`

export const CarrinhoText = styled.p`
  font-size: medium;
  position: absolute;
  right: 110px;
  top: 10px;
  color: white;
`

export const UlStyled = styled.ul`
 position: absolute;
  width: 300px;
  margin: 100px auto 0;
  padding: 10px;
  box-sizing: border-box;
  list-style: none;
`

export const Itens = styled.p`
  font-size: 15px;
  position: absolute;
  right:110px;
  top: 28px;
  color: white;
  
`

export const Total = styled.p`
  text-shadow: 2px 2px 5px darkgrey;
  margin-left: 25px;
  color: white;
  font-size: 20px;
  margin-top: 15px;
 
`

export const LiStyled = styled.li`
  background: rgba(255, 255, 255, 0.3);
  text-shadow: 2px 2px 5px darkgrey;
  padding: 10px;
  font-size: 18px;
  color: white;
  border-radius: 4px;
`
//FIM CARRINHO


//POPUP
export const Popupone = styled.div`
  position: fixed;
  top: 50px;
  left: 600px;
  width: 100%;
  height: 70vh;
  background-color: #B592BB;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px darkgrey;
  border-radius: 10px; 
`

export const Popupinner = styled.div`
   margin-right: 250px;
  width: 15vw;
  height: 600vh;
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
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #FFFFFF;
    width: 95%;
    margin: 0 auto;
    padding: 2px;

    p {
        color: white;
        font-weight: bold;
        font-size: 18px;
    }
    input {
      /* border-radius: 5px;
      padding: 5px 5px; */
      margin-top: -5px;
      width: 8em;
      text-align: center;
      border-radius: 5px;
      margin-left: 5px;
      padding: 5px;
      width: 15em;
    }
    select {
      /* border: 1px solid black;    
      padding: 5px 5px;        
      border-radius: 5px; */
      margin-top: -5px;
      width: 15em;
      height: 28px;
      margin-left: -5px;
      padding: 4px;
      border-radius: 5px;
      border: none;
      background-color: white;
    }
`
//FIM INPUTS


export const SectionProdutos = styled.div`
    max-width: 90vw;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
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
    justify-content: center;
    box-shadow: 2px 2px 5px darkgrey;
    border-radius: 10px;
    background-color: rgba(150, 163, 184, 0.4);
    margin: 10px 55px;
    color: rgb(95, 19, 39);
    width: 20vw;
    height: 58vh;

    img {
      width: 100%;
      height: 72%;
      border-radius: 10px 10px 0 0;
    }
    h3 {
        color: white;
        font-weight: bold;
        margin: 3%;
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
        font-size: 1em;
        background-color: #54295B;
        align-self: center;
        cursor: pointer;
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
  padding-top: 5px;
`

