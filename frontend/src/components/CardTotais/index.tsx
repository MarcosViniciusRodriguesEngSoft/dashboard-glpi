import * as C from '../../helpers/styles';
import "./styels.css";

function CardTotais() {
    return (
        <>
            <C.Row className="config-row-space">
                <C.CardContainer>
                    <C.Title>Abertos</C.Title>
                    <C.Contador>152</C.Contador>
                </C.CardContainer>
                <C.CardContainer>
                    <C.Title>Solucionados</C.Title>
                    <C.Contador>152</C.Contador>
                </C.CardContainer>
                <C.CardContainer>
                    <C.Title>Fechados</C.Title>
                    <C.Contador>152</C.Contador>
                </C.CardContainer>
            </C.Row>

            <C.Row className="config-row-space">
                <C.CardContainer>
                    <C.Title>Atribuídos</C.Title>
                    <C.Contador>152</C.Contador>
                </C.CardContainer>
                <C.CardContainer>
                    <C.Title>Pendentes</C.Title>
                    <C.Contador>152</C.Contador>
                </C.CardContainer>
                <C.CardContainer>
                    <C.Title>Atrasados</C.Title>
                    <C.Contador>152</C.Contador>
                </C.CardContainer>
            </C.Row>

            <C.Row className="config-row-space">
                <C.MiniCardContainer id="critico">
                    <C.MiniTitle>Crítico</C.MiniTitle>
                    <C.MiniContador>152</C.MiniContador>
                </C.MiniCardContainer>

                <C.MiniCardContainer id="alto">
                    <C.MiniTitle>Alto</C.MiniTitle>
                    <C.MiniContador>152</C.MiniContador>
                </C.MiniCardContainer>
                <C.MiniCardContainer id="medio">
                    <C.MiniTitle>Médio</C.MiniTitle>
                    <C.MiniContador>152</C.MiniContador>
                </C.MiniCardContainer>

                <C.MiniCardContainer id="baixo">
                    <C.MiniTitle>Baixo</C.MiniTitle>
                    <C.MiniContador>152</C.MiniContador>
                </C.MiniCardContainer>
                <C.MiniCardContainer id="muito-baixo">
                    <C.MiniTitle>Muito Baixo</C.MiniTitle>
                    <C.MiniContador>152</C.MiniContador>
                </C.MiniCardContainer>
            </C.Row>

        </>
    );
}

export default CardTotais;