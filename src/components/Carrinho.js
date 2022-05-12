import React from "react"
import { Cart, BotaoF, BotaoFCarrinho, FinalizarCompra, CarrinhoH2, CarrinhoText, UlStyled, Itens, Total, LiStyled } from '../styled'
import cart from '../imgs/cart.png';
import Popup from './Popup';


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
