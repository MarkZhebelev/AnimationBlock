import styled from 'styled-components';

interface DateTextProps {
    color: string;
}

export const DateText = styled.div<DateTextProps>`
    color: ${(props) => props.color};
    font-family: "PT Sans", sans-serif;
    text-align: center;
    font-size: inherit;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -2px;
    user-select: none;
`;
