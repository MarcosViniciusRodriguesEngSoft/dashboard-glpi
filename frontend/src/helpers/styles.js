import styled from "styled-components";

export const Container = styled.div`
    height: max-content;
    width: 1490px;
    padding: 10px;
    overflow: hidden;

    @media (max-width: 400px) {
        width: 100%;
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

export const CardLista = styled.div`
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