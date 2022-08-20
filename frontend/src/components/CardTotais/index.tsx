import { useEffect, useState } from 'react';
import * as C from './styles';
import * as H from '../../helpers/styles';
import { IContadorFullDTO } from '../../_config/base/contador.service';
import { useContadorService } from '../../_config/services/contador.service';
import "./styels.css";

export const abertos: number = 85;
export const solucionados: number = 23;
export const fechados: number = 40;
const atribuidos: number = 15;
const pendentes: number = 4;
const atrasados: number = 2;

const critico: number = 4;
const alto: number = 7;
const medio: number = 2;
const baixo: number = 14;
const muitoBaixo: number = 58;


function CardTotais() {
    const [contador, setContador] = useState<IContadorFullDTO>()
    const serviceContador = useContadorService();

    const contadores = () => {
        serviceContador.Contadores()
            .then(response => setContador(response.data));
    }

    useEffect(() => {
        contadores()
    });

    return (
        <>
            <H.Row className="config-row-space">
                <C.CardContainer>
                    <C.Title>Abertos</C.Title>
                    <C.Contador>{contador?.abertos}{abertos}</C.Contador>
                </C.CardContainer>
                <C.CardContainer>
                    <C.Title>Solucionados</C.Title>
                    <C.Contador>{contador?.solucionados}{solucionados}</C.Contador>
                </C.CardContainer>
                <C.CardContainer>
                    <C.Title>Fechados</C.Title>
                    <C.Contador>{contador?.fechados}{fechados}</C.Contador>
                </C.CardContainer>
            </H.Row>

            <H.Row className="config-row-space">
                <C.CardContainer>
                    <C.Title>Atribuídos</C.Title>
                    <C.Contador>{atribuidos}</C.Contador>
                </C.CardContainer>
                <C.CardContainer>
                    <C.Title>Pendentes</C.Title>
                    <C.Contador>{contador?.pendentes}{pendentes}</C.Contador>
                </C.CardContainer>
                <C.CardContainer>
                    <C.Title>Atrasados</C.Title>
                    <C.Contador>{contador?.atrasados}{atrasados}</C.Contador>
                </C.CardContainer>
            </H.Row>

            <H.Row className="config-row-space">
                <C.MiniCardContainer id="critico">
                    <C.MiniTitle>Crítico</C.MiniTitle>
                    <C.MiniContador>{contador?.critico}{critico}</C.MiniContador>
                </C.MiniCardContainer>

                <C.MiniCardContainer id="alto">
                    <C.MiniTitle>Alto</C.MiniTitle>
                    <C.MiniContador>{contador?.alto}{alto}</C.MiniContador>
                </C.MiniCardContainer>
                <C.MiniCardContainer id="medio">
                    <C.MiniTitle>Médio</C.MiniTitle>
                    <C.MiniContador>{contador?.medio}{medio}</C.MiniContador>
                </C.MiniCardContainer>

                <C.MiniCardContainer id="baixo">
                    <C.MiniTitle>Baixo</C.MiniTitle>
                    <C.MiniContador>{contador?.baixo}{baixo}</C.MiniContador>
                </C.MiniCardContainer>
                <C.MiniCardContainer id="muito-baixo">
                    <C.MiniTitle>Muito Baixo</C.MiniTitle>
                    <C.MiniContador>{contador?.muitoBaixo}{muitoBaixo}</C.MiniContador>
                </C.MiniCardContainer>
            </H.Row>

        </>
    );
}

export default CardTotais;