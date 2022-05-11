import React from "react";
import {DivCard} from "../styled";


export class Cards extends React.Component {
    render() {
        return (
            <DivCard>
                 <img src={this.props.propsCamisa}/>
                 <p>{this.props.propsNome}</p>
                 <p>{this.props.propsValor}</p>
                 <button>Adicionar ao carrinho</button> 
            </DivCard>

        )


    }

}











