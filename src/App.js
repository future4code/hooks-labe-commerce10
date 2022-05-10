import React from 'react';
import { AppDad, Body, Footer, Header, SectionFiltros, SectionProdutos } from './styled';
import { Carrinho } from './components/Carrinho';
import GlobalStyle from './GlobalStyles';


class App extends React.Component {

  render() {
    return (
      <AppDad>
        <GlobalStyle />
        <Header>
          <div>
            <img src="https://cdn-icons.flaticon.com/png/512/4710/premium/4710098.png?token=exp=1652145457~hmac=31ce7aa426610c9fc771aaeb92ca7bb6" alt="Imagem de um foquete subindo na diagonal"/>
            <h2>Viagens Espaciais</h2>
          </div>
          <Carrinho></Carrinho>
        </Header>
        <Body>
          <SectionFiltros> 
            {/* Dentro dessa seção são os componentes de cada input*/}
            {/* <InputValor></InputValor>
            <InputValor></InputValor>
            <inputBusca></inputBusca>
            <InputOrdenar></InputOrdenar> */}
          </SectionFiltros>
          <h1>Produtos</h1>
          <SectionProdutos>
            {/* Dentro dessa seção vão os cards dos proodutos */}
            {/* <CardProduto></CardProduto> */}
          </SectionProdutos>
        </Body>
        <Footer>
            <h2>Footer</h2>
        </Footer>
      </AppDad>
    );
  }
}

export default App;
