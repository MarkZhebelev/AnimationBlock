import styled from 'styled-components';

interface CircleIconWrapperProps {
    $angle: number;
    $isTarget: boolean;
    $isActive: boolean;
}

export const CircleIconWrapper = styled.div<CircleIconWrapperProps>`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(${(props) => props.$angle}rad) translate(calc(30vw), 0) rotate(${(props) => -props.$angle}rad);
    transition: transform 1s ease;
    cursor: pointer;

    @media (min-width: 850px) {
        transform: translate(-50%, -50%) rotate(${(props) => props.$angle}rad) translate(265px, 0) rotate(${(props) => -props.$angle}rad);
    }
    @media (max-width: 320px) {
        display: none;
    }
`;