import React from 'react';
import { DashBoard, DashBoardMenu, DashBoardButton, DashBoardInput } from '../../components';


class RecuperarValor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valor: ""
        }
    }

    handlerValor = valorInformado => {
        this.setState(({
            valor: valorInformado
        }))
    };

    render() {
        return (
            <DashBoard>
                <DashBoardMenu title="Jogo de Memória">
                    <DashBoardInput />
                    <DashBoardButton to="/game">Iniciar Jogo</DashBoardButton>
                </DashBoardMenu>
            </DashBoard >
        )
    }
}

export default RecuperarValor;