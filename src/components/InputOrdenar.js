import React from 'react'
import { DivInput } from '../styled';


export class InputOrdenar extends React.Component {

    render() {
        return(
            <DivInput>
                <p>{this.props.nome}</p>
                <select name='ordenar' 
                value={this.props.value}
                onChange={this.props.onChangeOrdenar} >
                    <option value='' >Selecione</option>
                    <option value='crescente' >Menor Preço</option>
                    <option value='decrescente' >Maior Preço</option>
                </select>
            </DivInput>
        );
    }
}