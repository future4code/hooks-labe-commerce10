import React from 'react'
import { DivInput } from '../styled';


export class InputBusca extends React.Component {

    render() {
        return(
            <DivInput>
                <p>{this.props.nome}</p>
                <input type='text'
                onChange={this.props.onChangeBusca} 
                value={this.props.value} />
            </DivInput>
        );
    }
}