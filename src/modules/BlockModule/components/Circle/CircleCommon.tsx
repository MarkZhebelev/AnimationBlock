import {LineX, LineY, TitleText, TitleContainer, CircleComponentStyle, TitleGradient} from './style/CircleComponentStyles';
import GradientLine from '../ui/GradientLine/GradientLine';
import Circle from './Circle';
import {dateRanges} from '../../../../data';

import React, {useRef} from 'react';
import NavigationBlock from './ui/NavigationBlock/NavigationBlock';

export interface ICircleCommon {
    indexForText?: number,
    setIndexForText: (index: any) => void,
    setIsSliderVisible: (isSliderVisible: boolean) => void,
    length?: number,
    setIsAnimating: (isAnimating: boolean) => void,
    isAnimating: boolean
}

const CircleCommon = ({indexForText, setIndexForText, setIsSliderVisible, length, setIsAnimating, isAnimating}: ICircleCommon) => {

    const circleRef = useRef<any>(null);
    const titleText: string = 'Исторические даты';

    const handleNextClick = () => {
        if (!isAnimating && circleRef.current) {
            circleRef.current.goToNextIcon();
        }
    };

    const handlePrevClick = () => {
        if (!isAnimating && circleRef.current) {
            circleRef.current.goToPrevIcon();
        }
    };

    return (
        <>
            <CircleComponentStyle>
                <TitleContainer>
                    <TitleGradient><GradientLine/></TitleGradient>
                    <TitleText>{titleText}</TitleText>
                </TitleContainer>
                <LineY/>
                <LineX/>
                <Circle
                    ref={circleRef}
                    setIndexForText={setIndexForText}
                    dateRanges={dateRanges}
                    setIsSliderVisible={setIsSliderVisible}
                    setIsAnimating={setIsAnimating}
                    isAnimating={isAnimating}
                    indexForText={indexForText}/>
                <NavigationBlock
                    indexForText={indexForText}
                    length={length}
                    handleNextClick={handleNextClick}
                    handlePrevClick={handlePrevClick}
                />
            </CircleComponentStyle>

        </>
    );
};

export default CircleCommon;

