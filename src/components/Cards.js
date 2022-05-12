import React from "react";
import {DivCard} from "../styled";


export class Cards extends React.Component {
    render() {
        return (
            <DivCard>
                 <img src={this.props.propsCamisa} alt='Camisas de imagens espaciais'/>
                 <h3>{this.props.propsNome}</h3>
                 <p>R$ {this.props.propsValor}</p>
                 <button>Adicionar ao carrinho</button>
            </DivCard>
        )
    }

}











