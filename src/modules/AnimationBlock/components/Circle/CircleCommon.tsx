import {
    LineX,
    LineY,
    TitleText,
    TitleContainer,
    CircleComponentStyle,
    TitleGradient
} from './style/CircleComponentStyles';
import GradientLine from './ui/GradientLine/GradientLine';
import Circle from './Circle';
import React, {useRef} from 'react';
import NavigationBlock from './ui/NavigationBlock/NavigationBlock';
import {observer} from 'mobx-react';


export interface ICircleCommon {
    setIsSliderVisible: (isSliderVisible: boolean) => void,
    setIsAnimating: (isAnimating: boolean) => void,
    isAnimating: boolean,
}

const CircleCommon = observer(({setIsSliderVisible, setIsAnimating, isAnimating}: ICircleCommon) => {
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
                    setIsSliderVisible={setIsSliderVisible}
                    setIsAnimating={setIsAnimating}
                    isAnimating={isAnimating}
                />
                <NavigationBlock
                    handleNextClick={handleNextClick}
                    handlePrevClick={handlePrevClick}
                />
            </CircleComponentStyle>

        </>
    );
});

export default CircleCommon;

