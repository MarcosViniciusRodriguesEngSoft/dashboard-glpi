import styled from "styled-components";

export const CardContainer = styled.div`
display: grid;
align-items: center;
height: 100px;
width: 350px;
padding: 5px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
border: 5px outset;
border-radius: 10px;

@media (max-width: 400px) {
    height: 100px;
    width: 175px;
    margin: 0;
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
width: 175px;
padding: 5px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
border: 5px outset;
border-radius: 10px;

@media (max-width: 1450px) {
    width: 350px;
}

@media (max-width: 400px) {
    width: 350px;
}

`;

export const MiniCardContainer = styled.div`
display: grid;
align-items: center;
height: 100px;
width: 175px;
padding: 5px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
border-radius: 10px;

@media (max-width: 1450px) {
    width: 350px;
}

@media (max-width: 400px) {
    width: 175px;
}

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