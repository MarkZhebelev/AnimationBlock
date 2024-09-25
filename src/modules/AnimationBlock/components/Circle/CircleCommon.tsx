import {
    LineX,
    LineY,
    TitleText,
    TitleContainer,
    CircleComponentStyle,
    TitleGradient
} from './style/CircleComponentStyles';
import GradientLine from './ui/GradientLine/GradientLine';
import React, {useRef, Suspense} from 'react';
import {observer} from 'mobx-react-lite';
import Store from '../../store/store';


const Circle = React.lazy(() => import('./Circle'));
const NavigationBlock = React.lazy(() => import('./ui/NavigationBlock/NavigationBlock'));

export interface ICircleCommon {
    store: Store
    setIsSliderVisible: (isSliderVisible: boolean) => void,
    setIsAnimating: (isAnimating: boolean) => void,
    isAnimating: boolean,
    isSliderVisible: boolean
}

const CircleCommon = observer(({store,setIsSliderVisible, setIsAnimating, isAnimating, isSliderVisible}: ICircleCommon) => {
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
                <LineX $isSliderVisible={isSliderVisible}/>
                <Suspense fallback={<div>Загрузка компонента...</div>}>
                    <Circle
                        store={store}
                        isSliderVisible={isSliderVisible}
                        ref={circleRef}
                        setIsSliderVisible={setIsSliderVisible}
                        setIsAnimating={setIsAnimating}
                        isAnimating={isAnimating}
                    />
                </Suspense>
                <Suspense fallback={<div>Загрузка компонента...</div>}>
                    <NavigationBlock
                        store={store}
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
                </Suspense>
            </CircleComponentStyle>

        </>
    );
});

export default CircleCommon;

