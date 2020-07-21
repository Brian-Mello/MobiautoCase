import React from 'react';
import { VeiculoCardComponent, Text, VeiculoCardItemsRows, VeiculoCardHeader, VeiculoCardBody, VeiculoCardMarca, VeiculoCardModelo, VeiculoCardCombutivel, VeiculoCardCombustivelSigla, VeiculoCardAno, VeiculoCardCodigoFipe, VeiculoCardMesReferencia, VeiculoCardTipo, VeiculoCardFooter, VeiculoCardValor } from './styled';

export function VeiculoCard(props){
    return(
        <VeiculoCardComponent>
            <VeiculoCardHeader><b>Detalhes</b></VeiculoCardHeader>
            <VeiculoCardBody>
                <VeiculoCardItemsRows>
                    <VeiculoCardMarca><b>Marca:</b> <Text>{props.marca}</Text></VeiculoCardMarca>
                    <VeiculoCardCombutivel><b>Combutível:</b> <Text>{props.combustivel}</Text></VeiculoCardCombutivel>
                </VeiculoCardItemsRows>
                <VeiculoCardItemsRows>
                    <VeiculoCardModelo><b>Modelo:</b> <Text>{props.modelo}</Text></VeiculoCardModelo>
                    <VeiculoCardAno><b>Ano: </b><Text>{props.ano}</Text></VeiculoCardAno>
                </VeiculoCardItemsRows>
                <VeiculoCardItemsRows>
                    <VeiculoCardCombustivelSigla><b>Sigla Combustível:</b> <Text>{props.combustivelSigla}</Text></VeiculoCardCombustivelSigla>
                    <VeiculoCardCodigoFipe><b>Código Fipe: </b><Text>{props.fipe}</Text></VeiculoCardCodigoFipe>
                </VeiculoCardItemsRows>
                <VeiculoCardItemsRows>
                    <VeiculoCardMesReferencia><b>Mês Referência: </b><Text>{props.referencia}</Text></VeiculoCardMesReferencia>
                    <VeiculoCardTipo><b>Tipo: </b><Text>{props.tipo}</Text></VeiculoCardTipo>
                </VeiculoCardItemsRows>
            </VeiculoCardBody>
            <VeiculoCardFooter>
                <VeiculoCardValor><b>Valor: </b><Text>{props.valor}</Text></VeiculoCardValor>
            </VeiculoCardFooter>
        </VeiculoCardComponent>
    )
}

export default VeiculoCard;