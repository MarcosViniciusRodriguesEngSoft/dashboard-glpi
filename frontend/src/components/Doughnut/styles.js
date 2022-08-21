import styled from "styled-components";

export const CardContainer = styled.div`
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