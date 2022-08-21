import { useEffect, useState } from 'react';
import * as C from './styles';
import { IContadorFullDTO } from '../../_config/base/contador.service';
import { useContadorService } from '../../_config/services/contador.service';
import { Col, Row } from '../../helpers/styles';
import "./styels.css";

export const abertos: number = 255;
export const solucionados: number = 23;
export const fechados: number = 0;
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
            <Row>
                <Col>
                    <C.CardContainer className="config-space">
                        <C.Title>Abertos</C.Title>
                        <C.Contador>{contador?.abertos}{abertos}</C.Contador>
                    </C.CardContainer>
                    <C.CardContainer className="config-space">
                        <C.Title>Solucionados</C.Title>
                        <C.Contador>{contador?.solucionados}{solucionados}</C.Contador>
                    </C.CardContainer>
                </Col>
                <Col>
                    <C.CardContainer className="config-space">
                        <C.Title>Fechados</C.Title>
                        <C.Contador>{contador?.fechados}{fechados}</C.Contador>
                    </C.CardContainer>
                    <C.CardContainer className="config-space">
                        <C.Title>Atribuídos</C.Title>
                        <C.Contador>{atribuidos}</C.Contador>
                    </C.CardContainer>
                </Col>
                <Col>
                    <C.CardContainer className="config-space">
                        <C.Title>Pendentes</C.Title>
                        <C.Contador>{contador?.pendentes}{pendentes}</C.Contador>
                    </C.CardContainer>
                    <C.CardContainer className="config-space">
                        <C.Title>Atrasados</C.Title>
                        <C.Contador>{contador?.atrasados}{atrasados}</C.Contador>
                    </C.CardContainer>
                </Col>
            </Row>

            <Row>
                <Col className="alin-responsive-col">
                    <C.MiniCardContainerCritico id="critico" className="config-space">
                        <C.MiniTitle>Crítico</C.MiniTitle>
                        <C.MiniContador>{contador?.critico}{critico}</C.MiniContador>
                    </C.MiniCardContainerCritico>
                </Col>

                <Col className="alin-responsive-col">
                    <C.MiniCardContainer className="config-space" id="alto">
                        <C.MiniTitle>Alto</C.MiniTitle>
                        <C.MiniContador>{contador?.alto}{alto}</C.MiniContador>
                    </C.MiniCardContainer>
                    <C.MiniCardContainer className="config-space" id="medio">
                        <C.MiniTitle>Médio</C.MiniTitle>
                        <C.MiniContador>{contador?.medio}{medio}</C.MiniContador>
                    </C.MiniCardContainer>
                </Col>

                <Col className="alin-responsive-col">
                    <C.MiniCardContainer className="config-space" id="baixo">
                        <C.MiniTitle>Baixo</C.MiniTitle>
                        <C.MiniContador>{contador?.baixo}{baixo}</C.MiniContador>
                    </C.MiniCardContainer>
                    <C.MiniCardContainer className="config-space" id="muito-baixo">
                        <C.MiniTitle>Muito Baixo</C.MiniTitle>
                        <C.MiniContador>{contador?.muitoBaixo}{muitoBaixo}</C.MiniContador>
                    </C.MiniCardContainer>
                </Col>
            </Row>

        </>
    );
}

export default CardTotais;