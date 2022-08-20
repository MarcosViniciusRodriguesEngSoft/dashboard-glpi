import styled from "styled-components";

export const Container = styled.div`
    height: max-content;
    width: 100%;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
	border-radius: 10px;

    @media (max-width: 400px) {
        height: 100%;
        width: 100%;
        margin: 10px auto;
    }
`;

export const Divider = styled.div`

`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1400px) {
       flex-direction: column;
    }
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 1400px) {
       flex-direction: row;
       margin: 15px;
    }
`;

export const CardContainer = styled.div`
    display: grid;
    align-items: center;
    height: 100px;
    width: 350px;
    padding: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
	border-radius: 10px;

    @media (max-width: 1400px) {
        height: 100%;
        width: 100%;
        margin: 15px;
    }

    @media (max-width: 400px) {
        margin-bottom: 0 0 15px 0 !important;
    }
`;

export const Title = styled.h1`
    color: #000;
    text-align: center;
    font-size: 1.5em;
    font-weight: 900;
`;

export const Contador = styled.h2`
    color: #000;
    text-align: center;
    font-size: 1.5em;
    font-weight: 900;
`;



// Mini carde contador //
export const MiniCardContainerCritico = styled.div`
    display: grid;
    align-items: center;
    height: 100px;
    width: 350px;
    padding: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
	border-radius: 10px;
`;

export const MiniCardContainer = styled.div`
    display: grid;
    align-items: center;
    height: 100px;
    width: 175px;
    padding: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
	border-radius: 10px;
`;

export const MiniTitle = styled.h1`
    color: #000;
    text-align: center;
    font-size: 1.5em;
    font-weight: 900;
`;

export const MiniContador = styled.h2`
    color: #000;
    text-align: center;
    font-size: 1.5em;
    font-weight: 900;
`;

export const CardDoughnut = styled.div`
    height: 500px;
    width: 550px;
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
	border-radius: 10px;
    
    @media (max-width: 1400px) {
        height: 100%;
        width: 100%;
    }
    
    @media (max-width: 400px) {
        height: 100%;
        width: 100%;
    }
`;

export const CardVerticalBarChart = styled.div`
    height: 500px;
    width: 850px;
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
	border-radius: 10px;

    @media (max-width: 1400px) {
        height: max-content;
        width: 100%;
        overflow-x: scroll;
    }

    @media (max-width: 400px) {
        height: max-content;
        width: max-content;
        overflow-x: scroll;
    }
`;