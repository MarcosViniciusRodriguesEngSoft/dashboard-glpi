import * as C from '../../helpers/styles';

function CardTotais() {
    return (
        <>
            <C.Row>
                <C.Col>
                    <C.CardContainer>
                        <C.Title>Abertos</C.Title>
                        <C.Contador>152</C.Contador>
                    </C.CardContainer>
                </C.Col>

                <C.Col>
                    <C.CardContainer>
                        <C.Title>Solucionados</C.Title>
                        <C.Contador>152</C.Contador>
                    </C.CardContainer>
                </C.Col>

                <C.Col>
                    <C.CardContainer>
                        <C.Title>Fechados</C.Title>
                        <C.Contador>152</C.Contador>
                    </C.CardContainer>
                </C.Col>
            </C.Row>
        </>
    );
}

export default CardTotais;