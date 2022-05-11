import React from 'react';
import { AppDad, Body, Footer, Header, SectionFiltros, SectionProdutos, DivCard} from './styled';
import { Carrinho } from './components/Carrinho';
import GlobalStyle from './GlobalStyles';
import { InputValor } from './components/InputValor';
import { InputBusca } from './components/InputBusca';
import { InputOrdenar } from './components/InputOrdenar';
import { Cards } from './components/Cards';
import camisa01 from "./imgs/camisa01.png";
import camisa02 from "./imgs/camisa02.png";
import camisa03 from "./imgs/camisa03.png";
import camisa04 from "./imgs/camisa04.png";
import camisa05 from "./imgs/camisa05.png";
import camisa06 from "./imgs/camisa06.png";




class App extends React.Component {

listaCamisas=[
{ localCamisa: camisa01,
  nome: "Camisa Preta",
  valor: "R$:159.00"
},
{ localCamisa: camisa02,
  nome: "Camisa Azul",
  valor: " R$:99.90"
},
{ localCamisa: camisa03,
  nome: "Camisa Verde",
  valor: "R$:190.00"
},
{ localCamisa: camisa04,
  nome: "Camisa Azul",
  valor: "R$:91.50"
},
{ localCamisa: camisa05,
  nome: "Camisa",
  valor: "R$:210.00"
},
{ localCamisa: camisa06,
  nome: "Camisa Azul",
  valor: "R$:250.90"
},
]

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
            <InputValor nome='Valor Mínimo' />
            <InputValor nome='Valor Máximo' />
            <InputBusca nome='Busque por nome' />
            <InputOrdenar nome='Ordenar por' />
          </SectionFiltros>
          <h1>Produtos</h1>
          <SectionProdutos>
                  <Cards propsCamisa={this.listaCamisas[0].localCamisa} propsNome={this.listaCamisas[0].nome} propsValor={this.listaCamisas[0].valor}/>
                  <Cards propsCamisa={this.listaCamisas[1].localCamisa} propsNome={this.listaCamisas[1].nome} propsValor={this.listaCamisas[1].valor}/>
                  <Cards propsCamisa={this.listaCamisas[2].localCamisa} propsNome={this.listaCamisas[2].nome} propsValor={this.listaCamisas[2].valor}/>
                  <Cards propsCamisa={this.listaCamisas[3].localCamisa} propsNome={this.listaCamisas[3].nome} propsValor={this.listaCamisas[3].valor}/>
                  <Cards propsCamisa={this.listaCamisas[4].localCamisa} propsNome={this.listaCamisas[4].nome} propsValor={this.listaCamisas[4].valor}/>
                  <Cards propsCamisa={this.listaCamisas[5].localCamisa} propsNome={this.listaCamisas[5].nome} propsValor={this.listaCamisas[5].valor}/>
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
