import {useState} from 'react';
import styled from 'styled-components';
import {StyledCircleIcon} from './StyledCircleIcon';

const NumberText = styled.text`
    font-size: 20px;
    fill: #42567A;
    text-anchor: middle;
    dominant-baseline: middle;
`;

interface CircleIconProps {
    children: number;
    isActive: boolean;
}

const CircleIcon = ({ children, isActive }: CircleIconProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <StyledCircleIcon
            $isActive={isActive}
            $isHovered={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
        >
            <circle
                cx="28"
                cy="28"
                r="28"
                fill={isActive || isHovered ? '#F4F5F9' : '#42567A'}
            />
            <circle
                cx="28"
                cy="28"
                r="27.5"
                stroke="#303E58"
                strokeOpacity="0.5"
            />
            {(isActive || isHovered) && (
                <NumberText x="28" y="28">{children}</NumberText>
            )}
        </StyledCircleIcon>
    );
};

export default CircleIcon;
