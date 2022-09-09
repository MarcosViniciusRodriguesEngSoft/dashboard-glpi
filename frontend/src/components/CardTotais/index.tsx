import { useEffect, useState } from 'react';
import * as C from './styles';
import { IContadorFullDTO } from '../../_config/base/contador.service';
import { useContadorService } from '../../_config/services/contador.service';
import { Col, Row } from '../../helpers/styles';
import "./styels.css";

function CardTotais() {
    const [contador, setContador] = useState<IContadorFullDTO>()
    const serviceContador = useContadorService();

    const contadores = () => {
        serviceContador.contadores()
        .then(response => {
            setContador(response.data)
        });
    }

    useEffect(() => {
        contadores();
    }, []);

    console.log(contador)

    return (
        <>
            <Row>
                <Col>
                    <C.CardContainer className="config-space">
                        <C.Title>Abertos</C.Title>
                        <C.Contador>{contador?.abertos}</C.Contador>
                    </C.CardContainer>
                    <C.CardContainer className="config-space">
                        <C.Title>Solucionados</C.Title>
                        <C.Contador>{contador?.solucionados}</C.Contador>
                    </C.CardContainer>
                </Col>
                <Col>
                    <C.CardContainer className="config-space">
                        <C.Title>Fechados</C.Title>
                        <C.Contador>{contador?.fechados}</C.Contador>
                    </C.CardContainer>
                    <C.CardContainer className="config-space">
                        <C.Title>Atribuídos</C.Title>
                        <C.Contador>{contador?.atribuidos}</C.Contador>
                    </C.CardContainer>
                </Col>
                <Col>
                    <C.CardContainer className="config-space">
                        <C.Title>Pendentes</C.Title>
                        <C.Contador>{contador?.pendentes}</C.Contador>
                    </C.CardContainer>
                    <C.CardContainer className="config-space">
                        <C.Title>Atrasados</C.Title>
                        <C.Contador>{contador?.atrasados}</C.Contador>
                    </C.CardContainer>
                </Col>
            </Row>

            <Row>
                <Col className="alin-responsive-col">
                    <C.MiniCardContainerCritico id="critico" className="config-space">
                        <C.MiniTitle>Crítico</C.MiniTitle>
                        <C.MiniContador>{contador?.critico}</C.MiniContador>
                    </C.MiniCardContainerCritico>
                </Col>

                <Col className="alin-responsive-col">
                    <C.MiniCardContainer className="config-space" id="alto">
                        <C.MiniTitle>Alto</C.MiniTitle>
                        <C.MiniContador>{contador?.alto}</C.MiniContador>
                    </C.MiniCardContainer>
                    <C.MiniCardContainer className="config-space" id="medio">
                        <C.MiniTitle>Médio</C.MiniTitle>
                        <C.MiniContador>{contador?.medio}</C.MiniContador>
                    </C.MiniCardContainer>
                </Col>

                <Col className="alin-responsive-col">
                    <C.MiniCardContainer className="config-space" id="baixo">
                        <C.MiniTitle>Baixo</C.MiniTitle>
                        <C.MiniContador>{contador?.baixo}</C.MiniContador>
                    </C.MiniCardContainer>
                    <C.MiniCardContainer className="config-space" id="muito-baixo">
                        <C.MiniTitle>Muito Baixo</C.MiniTitle>
                        <C.MiniContador>{contador?.muitoBaixo}</C.MiniContador>
                    </C.MiniCardContainer>
                </Col>
            </Row>

        </>
    );
}

export default CardTotais;