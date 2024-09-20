import styled from 'styled-components';

// --------------for CircleCommon
export const CircleComponentStyle = styled.div`
    position: relative;
    width: 100%;
    max-width: 1438px;
    height: 1100px;
    margin-bottom: 100px;
`;
export const TitleGradient = styled.div`
    min-width: 6px;
    @media (max-width: 320px) {
        display: none;
    }`
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    top: 3%;
    left: 100%;
    gap: 80px;
    z-index: 0;
    width: 100%;
    max-height: 135px;
    transform: translateX(-100%);
    @media (max-width: 576px) {
        flex-direction: row;
        align-items: self-start;
        gap: 30px;
        
    }
`;

export const TitleText = styled.p`
    font-size: 56px;
    font-family: "PT Sans", sans-serif;
    font-weight: 700;
    line-height: 120%;
    color: #42567A;
    text-align: left;
    max-width: 350px;
    @media (max-width: 576px) {
        //padding-right: 5px;
        font-size: 42px;
        margin-top: 10px;
    }
    
    @media (max-width: 320px) {
        padding-left: 10px;
        top: 50px;
    }
`;
export const LineY = styled.div`
    width: 1px;
    height: 100%;
    min-height: 1100px;
    background-color: #42567a;
    opacity: 0.1;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 1;
@media (max-width: 320px) {
    display: none;
}
`;

export const LineX = styled.div`
    height: 1px;
    width: 100%;
    background-color: #42567a;
    opacity: 0.1;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1;
    @media (max-width: 320px) {
        top: 40%;
    }
`;

// ------------- for Circle.tsx

export const CircleStyle = styled.div`
    width: 60vw;
    max-width: 530px;
    height: 60vw;
    max-height: 530px;
    border-radius: 50%;
    border: 1px solid #42567a;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.2;
    @media (max-width: 320px) {
        display: none;
    }
`;

export const DateDisplay = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: calc(60px + 5vw);
    font-weight: bold;
    color: #42567a;
    @media (max-width: 480px) {
        font-size: calc(40px + 5vw);
    }
    @media (max-width: 320px) {
        top: 30%;
    }
`;
