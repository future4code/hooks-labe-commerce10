import React from 'react'
import { DivInput } from '../styled';


export class InputValor extends React.Component {

    render() {
        return(
            <DivInput>
                <p>{this.props.nome}</p>
                <input type='number' />
            </DivInput>
        );
    }
}