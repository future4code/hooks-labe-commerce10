import React from "react"
import styled from 'styled-components';
import cart from '../imgs/cart.png';
import Popup from './Popup';

const Cart = styled.img`
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
 
`;

const BotaoF = styled.button`
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
`;


const BotaoFCarrinho = styled.button`
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
`;

const FinalizarCompra = styled.button`
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
`;

const CarrinhoH2 = styled.h2`
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
`;


const CarrinhoText = styled.p`
  font-size: medium;
  position: absolute;
  right: 100px;
  @media only screen and (max-width: 395px) {
    display: none;
  }
`;

const UlStyled = styled.ul`
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
`;

const Itens = styled.p`
  font-size: 15px;
  position: absolute;
  right:100px;
  top: 108px;
  @media only screen and (max-width: 395px) {
    position: absolute;
    right: 30px;
    margin-top: -21px;
  }
`;

const Total = styled.p`
  text-shadow: 2px 2px 5px darkgrey;
  margin-left: 25px;
  @media only screen and (max-width: 375px) {
    margin-bottom: 50px;
  }
`;

const LiStyled = styled.li`
  background: rgba(255, 255, 255, 0.1);
  text-shadow: 2px 2px 5px darkgrey;
`;

export class Carrinho extends React.Component {

  state = {
    cartItems: []
  }


  removerItemCarrinho = (product) => {
    const novoCarrinho = [...this.state.cartItems];
    const itemPos = this.state.cartItems.findIndex(
      (cartItem) => cartItem.product.id === product.product.id
    );

    if (novoCarrinho[itemPos].quantidade > 1) {
      novoCarrinho[itemPos].quantidade -= 1;
    } else {
      novoCarrinho.splice(itemPos, 1);
    }

    this.setState({
      cartItems: novoCarrinho
    });
    this.setState({ count: this.state.count - 1 });
  };


  renderTotal = () => {
    let total = this.state.cartItems.reduce(getTotal, 0);
    function getTotal(total, item) {
      return total + item.product.preco * item.quantidade;
    }
    return total;
  };

  toggleModal = () => {
    this.setState({ ...this.state, buttonPopup: !this.state.buttonPopup });
  };

  render() {
    return (
      <>
        <Cart src={cart} onClick={this.toggleModal}></Cart>
        <CarrinhoText>Meu Carrinho</CarrinhoText>
        <Itens>{this.state.count} produtos</Itens>
        <Popup trigger={this.state.buttonPopup}>
          <BotaoF onClick={this.toggleModal}>Fechar</BotaoF>
          <CarrinhoH2>Carrinho</CarrinhoH2>
          <UlStyled>
            {this.state.cartItems.map((product) => {
              return (
                <LiStyled>
                  x{product.quantidade} - {product.product.nome} R$
                  {product.product.preco * product.quantidade}{' '}
                  <BotaoFCarrinho
                    onClick={() => this.removerItemCarrinho(product)}
                  >
                    X
                  </BotaoFCarrinho>
                </LiStyled>
              );
            })}
            {
              <Total>
                Total: R${this.renderTotal()}{' '}
                <FinalizarCompra >
                  Finalizar Compra
                </FinalizarCompra>
              </Total>
            }
          </UlStyled>
        </Popup>
      </>
    )
  }
}
