import styled from "styled-components";

export const CardContainer = styled.div`
position: relative;
height: 500px;
width: 550px;
padding: 20px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23), 0 0 5px #aaa inset;
border: 5px outset;
border-radius: 10px;

@media (max-width: 1450px) {
    height: 100%;
    width: 450px;
}

@media (max-width: 400px) {
    height: 100%;
    width: 100%;
}
`;

export const Legenda = styled.p`
color: #000;
text-align: left;
width: 150px;

@media (max-width: 1450px) {
    width: 100%;
    text-align: center;
}

@media (max-width: 400px) {
    width: 100px;
    text-align: center;
}
`

export const Pixel = styled.span`
height: 20px;
width: 20px;
background-color: #1890ff;
border: 4px outset;
`