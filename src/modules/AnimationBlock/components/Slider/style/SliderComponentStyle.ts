import styled from 'styled-components';
import {Swiper} from 'swiper/react';
import {IIsVisible} from '../../CommonInterfaces';

export const SliderContainer = styled.div<IIsVisible>`
    position: relative;
    width: 100%;
    max-width: 1438px;
    top: -30px;
    opacity: ${(props) => (props.$isSliderVisible ? 1 : 0)};
    transition: opacity 1s ease;
    display: flex;
    align-items: center;
    @media (max-width: 320px) {
        position: absolute;
        top: 370px;
    }
`;


export const StyledPrevButton = styled.div<{ disabled: boolean }>`
    order: 0;
    margin-right: 20px;
    width: 70px;
    height: 70px;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.3 : 1)};
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

    @media (max-width: 768px) {
        margin-right: 10px;
        width: 50px;
        height: 50px;
    }
        
    @media (max-width: 480px) {
        display: none;
    }
`;


export const StyledNextButton = styled.div<{ disabled: boolean }>`
    order: 2;
    margin-left: 20px;
    width: 70px;
    height: 70px;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.3 : 1)};
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

    @media (max-width: 768px) {
        margin-left: 10px;
        margin-right: 20px;
        width: 50px;
        height: 50px;
    }

    @media (max-width: 480px) {
      display: none;
    }
`;


export const StyledSwiper = styled(Swiper)`
    width: 100%;
    position: relative;
    margin: 10px;
    .swiper-slide {
        padding-left: 10px;
        user-select: none;
        display: flex;
        justify-content: center;
        margin: 0;
        box-sizing: border-box;
    }
`;


export const EventBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    width: 100%;
    max-width: 350px;
    margin: 0 auto;

    h3 {
        font-family: 'Bebas Neue', sans-serif;
        color: #3877ee;
        font-size: 25px;
        margin: 0;
        font-weight: 600;
        line-height: 120%;
        text-transform: uppercase;
        text-align: left;
    }

    p {
        font-size: 20px;
        font-weight: 400;
        text-align: left; 
        line-height: 120%;
        color: #42567a;
    }
`;
