import styled from 'styled-components';

interface StyledCircleIconProps {
    $isActive: boolean;
    $isHovered: boolean;
}

export const StyledCircleIcon = styled.svg<StyledCircleIconProps>`
    width: ${(props) => (props.$isActive || props.$isHovered ? '56px' : '6px')};
    height: ${(props) => (props.$isActive || props.$isHovered ? '56px' : '6px')};
    fill: none;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        width: 56px;
        height: 56px;
    }
`;