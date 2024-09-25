import styled from 'styled-components';

export const Main = styled.div`
    width: 100%;
    max-width: 1442px;
    height: 100%;
    max-height: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid rgba(66, 86, 122, 0.1);
    border-right: 1px solid rgba(66, 86, 122, 0.1);
    border-bottom: 1px solid rgba(66, 86, 122, 0);
    @media (max-width: 320px) {
        display: block;
        border-left:none;
        border-right: none;
        border-bottom: none;
        max-height: 100vh;
    }
`;
export const Block = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    @media (max-width: 320px) {
        height: 100vh;
    }
`;