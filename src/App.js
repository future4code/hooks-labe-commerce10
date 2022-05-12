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
import camisa07 from "./imgs/camisa07.png";
import camisa08 from "./imgs/camisa08.png";
import camisa09 from "./imgs/camisa09.png";
import camisa10 from "./imgs/camisa10.png";
import camisa11 from "./imgs/camisa11.png";
import camisa12 from "./imgs/camisa12.png";
import camisa13 from "./imgs/camisa13.png";
import camisa14 from "./imgs/camisa14.png";
import camisa15 from "./imgs/camisa15.png";


class App extends React.Component {
  state = {
    listaCamisas: [
      {
        localCamisa: camisa01,
        nome: "Camisa Preta Astronauta com Bandeira",
        valor: 159.00,
        id: 1
      },
      {
        localCamisa: camisa02,
        nome: "Camisa Azul Planetas",
        valor: 99.90,
        id: 2
      },
      {
        localCamisa: camisa03,
        nome: "Camisa Azul Localização Universo",
        valor: 190.00,
        id: 3
      },
      {
        localCamisa: camisa04,
        nome: "Camisa Preta Homer comendo Planetas",
        valor: 91.50,
        id: 4
      },
      {
        localCamisa: camisa05,
        nome: "Camisa Preta Tom e Jerry Espaciais",
        valor: 210,
        id: 5
      },
      {
        localCamisa: camisa06,
        nome: "Camisa Preta Astronauta Cubos",
        valor: 250.90,
        id: 6
      },
      {
        localCamisa: camisa07,
        nome: "Camisa Preta Astronauta com Gruitarra",
        valor: 250.90,
        id: 7
      },
      {
        localCamisa: camisa08,
        nome: "Camisa Preta Astronauta no Balanço na Lua",
        valor: 250.90,
        id: 8
      },
      {
        localCamisa: camisa09,
        nome: "Camisa Preta Astronauta Aspirando Pó Espacial",
        valor: 250.90,
        id: 9
      },
      {
        localCamisa: camisa10,
        nome: "Camisa Azul com Água-Viva Colorida",
        valor: 250.90,
        id: 10
      },
      {
        localCamisa: camisa11,
        nome: "Camisa Preta Astonautas de Barco",
        valor: 250.90,
        id: 11
      },
      {
        localCamisa: camisa12,
        nome: "Camisa Cinza Astronauta com Placa To Earth",
        valor: 250.90,
        id: 12
      },
      {
        localCamisa: camisa13,
        nome: "Camisa Preta Criança Astronauta com Sorvete de Planetas",
        valor: 250.90,
        id: 13
      },
      {
        localCamisa: camisa14,
        nome: "Camisa Estampada Astronauta de Skate",
        valor: 250.90,
        id: 14
      },
      {
        localCamisa: camisa15,
        nome: "Camisa Preta Criança Astronauta com Planetas e Foguetes",
        valor: 250.90,
        id: 15
      }
    ],
    valorMinimo: '',
    valorMaximo: '',
    busca: '',
    ordenar: ''
  }


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


  render() {
    const listaCamisasComponente = this.state.listaCamisas
      .filter( //filtrando pela palavra escrita e testando com o includes se encontra!
        (item) => {
          return item.nome.toLocaleLowerCase().includes(
            this.state.busca.toLocaleLowerCase())
        }
      ).filter(// só retorna falso se tiver valor E ele for menor que o minimo
        (item) => {
          return this.state.valorMinimo === '' || this.state.valorMinimo <= item.valor
        }
      ).filter(// só retorna falso se tiver valor E ele for maior que o máximo
        (item) => {
          return this.state.valorMaximo === '' || this.state.valorMaximo >= item.valor
        }
      ).sort(// só retorna falso se tiver valor E ele for maior que o máximo
        (itemAtual, proximoItem) => {
          switch (this.state.ordenar) {
            case 'crescente':
              return itemAtual.valor - proximoItem.valor
            case 'decrescente':
              return proximoItem.valor - itemAtual.valor
            default:
              return true
          }
        }
      ).map( //mapeando a lista com as camisas filtradas ou não
        (item) => {
          return (
            <Cards key={item.id} propsCamisa={item.localCamisa}
              propsNome={item.nome}
              propsValor={item.valor} />
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
          <h1>TODOS OS PRODUTOS</h1>
          <SectionProdutos>
            {listaCamisasComponente}
          </SectionProdutos>
        </Body>
        <Footer>
          <h2>Todos os direitos reservados | 2022</h2>
        </Footer>
      </AppDad>
    );
  }
}

export default App;
