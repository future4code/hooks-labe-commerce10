import React from 'react';
import GlobalStyle from './GlobalStyles';
import { AppDad, Body, Footer, Header, SectionFiltros } from './styled';
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

  componentDidMount() {
    this.pegaLista()
  }

  pegaLista = () => {
    const stringCarrinho = localStorage.getItem('CARRINHO')
    if(stringCarrinho){
      const objetoCarrinho = JSON.parse(stringCarrinho)
      this.setState({ cartItems: objetoCarrinho })
    }
  }

  componentDidUpdate() {
    const objetoCarrinho = [...this.state.cartItems]
    localStorage.setItem('CARRINHO', JSON.stringify(objetoCarrinho))
  }

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
    let produtosOrdenados = [...products];
    return produtosOrdenados
      .filter((product) => {
        return product.nome.toLocaleLowerCase().includes(
          this.state.busca.toLocaleLowerCase())
      })
      .filter((product) => {// só retorna falso se tiver valor E ele for menor que o minimo
        return this.state.valorMinimo === '' || this.state.valorMinimo <= product.preco
      })
      .filter((product) => {// só retorna falso se tiver valor E ele for maior que o máximo
        return this.state.valorMaximo === '' || this.state.valorMaximo >= product.preco
      })
      .sort((itemAtual, proximoItem) => {
        switch (this.state.ordenar) {
          case 'crescente':
            return itemAtual.preco - proximoItem.preco
          case 'decrescente':
            return proximoItem.preco - itemAtual.preco
          default:
            return true
        }
      })
    .map((product) => {
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

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value })
  }

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  onChangeBusca = (event) => {
    this.setState({ busca: event.target.value })
  }

  onChangeOrdenar = (event) => {
    this.setState({ ordenar: event.target.value })
  }

  onClickZerarFiltro = () => {
    this.setState({ valorMinimo: '', valorMaximo: '',
    busca: '', ordenar: '', })
  }

  render() {
    return (
      <AppDad>
        <GlobalStyle />
        <Header>
          <div>
            <img src={foguete} alt="Imagem de um foguete" />
            <TituloHeader>CAMISETAS DIVERTIDAS</TituloHeader>
            <Cart src={cart} onClick={this.toggleModal}></Cart>
            <CarrinhoText>Meu Carrinho</CarrinhoText>
            <Itens>{this.state.cartItems.length} produtos</Itens>
          </div>
          <Popup trigger={this.state.buttonPopup}>
            <BotaoF onClick={this.toggleModal}>Fechar</BotaoF>
            <CarrinhoH2>Carrinho</CarrinhoH2>
            <UlStyled>
              {this.state.cartItems.map((product, index) => {
                return (
                  <LiStyled key={index}>
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
            <button onClick={this.onClickZerarFiltro} >Zerar Filtro</button>
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
