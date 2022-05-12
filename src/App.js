import React from 'react';
import { AppDad, Body, Footer, Header, SectionFiltros, SectionProdutos } from './styled';
import { Carrinho } from './components/Carrinho';
import GlobalStyle from './GlobalStyles';
import { InputValor } from './components/InputValor';
import { InputBusca } from './components/InputBusca';
import { InputOrdenar } from './components/InputOrdenar';
import { Cards } from './components/Cards';
import foguete from './imgs/foguete.png';
import camisa01 from "./imgs/camisa01.png";
import camisa02 from "./imgs/camisa02.png";
import camisa03 from "./imgs/camisa03.png";
import camisa04 from "./imgs/camisa04.png";
import camisa05 from "./imgs/camisa05.png";
import camisa06 from "./imgs/camisa06.png";




class App extends React.Component {

  listaCamisas = [
    {
      localCamisa: camisa01,
      nome: "Camisa Preta",
      valor: "R$ 159.00",
      id: 1
    },
    {
      localCamisa: camisa02,
      nome: "Camisa Azul",
      valor: " R$ 99.90",
      id: 2
    },
    {
      localCamisa: camisa03,
      nome: "Camisa Verde",
      valor: "R$ 190.00",
      id: 3
    },
    {
      localCamisa: camisa04,
      nome: "Camisa Azul",
      valor: "R$ 91.50",
      id: 4
    },
    {
      localCamisa: camisa05,
      nome: "Camisa",
      valor: "R$ 210.00",
      id: 5
    },
    {
      localCamisa: camisa06,
      nome: "Camisa Azul",
      valor: "R$ 250.90",
      id: 6
    },
  ]

  render() {
    const listaCamisasComponente = this.listaCamisas.map(
      (item) => {
        return (
          <Cards key={item.id} propsCamisa={item.localCamisa}
            propsNome={item.nome}
            propsValor={item.valor}>
          </Cards>
        )
      }
    )

    return (
      <AppDad>
        <GlobalStyle />
        <Header>
          <div>
            <img src={foguete} />
            <h2>CAMISETAS DIVERTIDAS</h2>
          </div>
          <Carrinho></Carrinho>
        </Header>
        <Body>
          <SectionFiltros>
            <InputValor nome='Valor Mínimo' />
            <InputValor nome='Valor Máximo' />
            <InputBusca nome='Busque por nome' />
            <InputOrdenar nome='Ordenar por' />
          </SectionFiltros>
          <h1>TODOS OS PRODUTOS</h1>
          <SectionProdutos>
            {listaCamisasComponente}
          </SectionProdutos>
        </Body>
        <Footer>
          <h2>	&copy; Todos os direitos reservados | 2022</h2>
        </Footer>
      </AppDad>
    );
  }
}

export default App;
