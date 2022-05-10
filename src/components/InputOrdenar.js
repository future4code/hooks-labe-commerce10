import React from 'react'
import { DivInput } from '../styled';


export class InputOrdenar extends React.Component {

    render() {
        return(
            <DivInput>
                <p>{this.props.nome}</p>
                <select name='ordenar' >
                    <option value='crescente' >Crescente</option>
                    <option value='decrescente' >Decrescente</option>
                </select>
            </DivInput>
        );
    }
}