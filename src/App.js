import React from 'react';
import GlobalStyle from './GlobalStyles';
import { AppDad, Body, Footer, Header, SectionFiltros, SectionProdutos } from './styled';
import { Cart, BotaoF, BotaoFCarrinho, FinalizarCompra, CarrinhoH2, CarrinhoText, UlStyled, Itens, Total, LiStyled } from './styled'
import { CardsProdutos, ImgSatelites, InformacoesCard, CardsTitulos, Preco, Button, TituloHeader, TitleProduct, ContainerPrincipal } from './styled'
import { InputValor } from './components/InputValor';
import { InputBusca } from './components/InputBusca';
import { InputOrdenar } from './components/InputOrdenar';
import { products } from './products';
import foguete from './imgs/foguete.png';
import Popup from './components/Popup';
import cart from './imgs/cart.png';


class App extends React.Component {
  state = {
    valorMinimo: '',
    valorMaximo: '',
    busca: '',
    ordenar: '',
    produtoValue: '',
    cartItems: [],
    count: 0
  }

  ordenarProdutos = () => {
    let produtosOrdenados = products;
    produtosOrdenados = produtosOrdenados.filter((produto) => {

      if (produto.preco < this.state.minimoValue) {
        return false;
      }
      return true;
    });

    return produtosOrdenados;
  };

  adicionarItemCarrinho = (product) => {
    const novoCarrinho = [...this.state.cartItems];
    const produtoNoCarrinho = this.state.cartItems.findIndex(
      (cartItem) => cartItem.product.id === product.id
    );

    if (produtoNoCarrinho <= -1) {
      novoCarrinho.push({ product: product, quantidade: 1 });
    } else {
      novoCarrinho[produtoNoCarrinho].quantidade += 1;
    }

    this.setState({
      cartItems: novoCarrinho
    });

    localStorage.setItem('novoCarrinho', JSON.stringify(novoCarrinho));

    this.renderTotal();
    this.setState({ count: this.state.count + 1 });
  };

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

  mostrarProdutos = () => {
    return this.ordenarProdutos().map((product) => {
      return (
        <CardsProdutos key={product.id}>
          <ImgSatelites src={product.icone} />
          <InformacoesCard>
            <CardsTitulos>{product.nome}</CardsTitulos>
            <Preco>R${product.preco}</Preco>
            <Button onClick={() => this.adicionarItemCarrinho(product)}>
              Adicionar ao carrinho
            </Button>
          </InformacoesCard>
        </CardsProdutos>
      );
    });
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


  // onChangeValorMinimo = (event) => {
  //   this.setState({ valorMinimo: event.target.value })
  // }

  // onChangeValorMaximo = (event) => {
  //   this.setState({ valorMaximo: event.target.value })
  // }

  // onChangeBusca = (event) => {
  //   this.setState({ busca: event.target.value })
  // }

  // onChangeOrdenar = (event) => {
  //   this.setState({ ordenar: event.target.value })
  // }


  render() {
    // const listaCamisasComponente = this.state.listaCamisas
    //   .filter( //filtrando pela palavra escrita e testando com o includes se encontra!
    //     (item) => {
    //       return item.nome.toLocaleLowerCase().includes(
    //         this.state.busca.toLocaleLowerCase())
    //     }
    //   ).filter(// só retorna falso se tiver valor E ele for menor que o minimo
    //     (item) => {
    //       return this.state.valorMinimo === '' || this.state.valorMinimo <= item.valor
    //     }
    //   ).filter(// só retorna falso se tiver valor E ele for maior que o máximo
    //     (item) => {
    //       return this.state.valorMaximo === '' || this.state.valorMaximo >= item.valor
    //     }
    //   ).sort(// só retorna falso se tiver valor E ele for maior que o máximo
    //     (itemAtual, proximoItem) => {
    //       switch (this.state.ordenar) {
    //         case 'crescente':
    //           return itemAtual.valor - proximoItem.valor
    //         case 'decrescente':
    //           return proximoItem.valor - itemAtual.valor
    //         default:
    //           return true
    //       }
    //     }
    //   ).map( //mapeando a lista com as camisas filtradas ou não
    //     (item) => {
    //       return (
    //         <Cards key={item.id} propsCamisa={item.localCamisa}
    //           propsNome={item.nome}
    //           propsValor={item.valor} />
    //       )
    //     }
    //   )

    return (
      <AppDad>
        <GlobalStyle />
        <Header>
          <div>
            <img src={foguete} alt="Imagem de um foguete" />
            <TituloHeader>CAMISETAS DIVERTIDAS</TituloHeader>
            <Cart src={cart} onClick={this.toggleModal}></Cart>
            <CarrinhoText>Meu Carrinho</CarrinhoText>
            <Itens>{this.state.count} produtos</Itens>
          </div>
          <Popup trigger={this.state.buttonPopup}>
            <BotaoF onClick={this.toggleModal}>Fechar</BotaoF>
            <CarrinhoH2>Carrinho</CarrinhoH2>
            <UlStyled>
              {this.state.cartItems.map((product) => {
                return (
                  <LiStyled>
                    {product.quantidade} - {product.product.nome} R$
                    {product.product.preco * product.quantidade}{' '}
                    <BotaoFCarrinho
                      onClick={() => this.removerItemCarrinho(product)}
                    >
                      x
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
        </Header>
        <Body>
          <SectionFiltros>
            <InputValor nome='Valor Mínimo'
              onChangeValor={(event) => this.onChangeValorMinimo(event)}
              value={this.state.valorMinimo} />
            <InputValor nome='Valor Máximo'
              onChangeValor={(event) => this.onChangeValorMaximo(event)}
              value={this.state.valorMaximo} />
            <InputBusca nome='Busque por nome'
              onChangeBusca={(event) => this.onChangeBusca(event)}
              value={this.state.busca} />
            <div>{this.state.busca}</div>
            <InputOrdenar nome='Ordenar por'
              onChangeOrdenar={(event) => this.onChangeOrdenar(event)}
              value={this.state.ordenar} />
          </SectionFiltros>
          <TitleProduct>TODOS OS PRODUTOS</TitleProduct>
          <div>
            <ContainerPrincipal>{this.mostrarProdutos()}</ContainerPrincipal>
          </div>
        </Body>
        <Footer>
          <h2>	&copy; Todos os direitos reservados | 2022</h2>
        </Footer>
      </AppDad>
    );
  }
}

export default App;
