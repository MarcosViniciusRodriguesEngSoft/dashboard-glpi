import styled from "styled-components";

export const Container = styled.div`
    height: max-content;
    width: 100%;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
	border-radius: 10px;
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

export const Title = styled.h1`
    color: #000;
    text-align: center;
    font-size: 3em;
    font-weight: normal;
`;

export const Contador = styled.h2`
    color: #000;
    text-align: center;
    font-size: 3em;
    font-weight: normal;
`;

export const CardContainer = styled.div`
    height: 150px;
    width: 350px;
    padding: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
	border-radius: 10px;
`;

export const CardDoughnut = styled.div`
    height: 500px;
    width: 550px;
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
	border-radius: 10px;
    
    @media (max-width: 1400px) {
        height: 70%;
        width: 70%;
    }
`;

export const CardVerticalBarChart = styled.div`
    height: 500px;
    width: 850px;
    padding: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
	border-radius: 10px;

    @media (max-width: 1400px) {
        height: 70%;
        width: 70%;
    }
`;