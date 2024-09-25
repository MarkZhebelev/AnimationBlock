import React, {useRef, useState, forwardRef, useImperativeHandle} from 'react';
import CircleIcon from './ui/CircleIcon/CircleIcon';
import {DateDisplay, CircleStyle, TextEvents, TextEventsMobile} from './style/CircleComponentStyles';
import {DateText} from './ui/DateText/DateText';
import {CircleIconWrapper} from './ui/CircleIcon/CircleIconWrapper';
import {observer} from 'mobx-react-lite';
import Store from '../../store/store';



interface ICircle {
    store: Store,
    setIsSliderVisible:(isSliderVisible: boolean) => void,
    setIsAnimating: (isAnimating: boolean) => void,
    isAnimating: boolean,
    isSliderVisible: boolean
}

const Circle = observer(forwardRef(({store, isSliderVisible, setIsSliderVisible, setIsAnimating, isAnimating}: ICircle, ref) => {
    const {setIndexForText, data, } = store;
    let iconsCount: number = data.length;
    const initialRotation: number[] = Array.from({length: iconsCount}, (_, i: number) => (i / iconsCount) * 2 * Math.PI);
    const [rotation, setRotation] = useState<number[]>(initialRotation);
    const [targetIndex, setTargetIndex] = useState<number>(iconsCount - 1);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const iconRefs = useRef<HTMLDivElement[]>([]);
    const [startYear, setStartYear] = useState<number>(data[targetIndex].start);
    const [endYear, setEndYear] = useState<number>(data[targetIndex].end);

    const handleIconClick = (index: number) => {
        if (isAnimating) return;
        setActiveIndex(index);
        setIndexForText(index + 1);
        setIsSliderVisible(false);
        setIsAnimating(true);
        const clockwiseSteps: number = (targetIndex - index + iconsCount) % iconsCount;
        const counterClockwiseSteps: number = (index - targetIndex + iconsCount) % iconsCount;
        const shortestSteps: number = clockwiseSteps <= counterClockwiseSteps ? clockwiseSteps : -counterClockwiseSteps;

        setRotation((prevRotation: number[]) =>
            prevRotation.map((angle: number) => angle + (2 * Math.PI / iconsCount) * shortestSteps)
        );


        const newStartYear: number = data[index].start;
        const newEndYear: number = data[index].end;

        animateYears(newStartYear, newEndYear);

        setTimeout(() => {
            setTargetIndex(index);
            setActiveIndex(null);
            setIsSliderVisible(true);
            setIsAnimating(false);
        }, 800);
    };

    const goToNextIcon = () => {
        const nextIndex: number = (targetIndex + 1) % iconsCount;
        handleIconClick(nextIndex);
    };

    const goToPrevIcon = () => {
        const prevIndex: number = (targetIndex - 1 + iconsCount) % iconsCount;
        handleIconClick(prevIndex);
    };
    const animateYears = (newStartYear: number, newEndYear: number) => {
        const duration: number = 1000;
        const startTime: number = performance.now();

        const animate = (currentTime: number) => {
            const elapsedTime: number = currentTime - startTime;
            const progress: number = Math.min(elapsedTime / duration, 1);

            setStartYear(startYear + (newStartYear - startYear) * progress);
            setEndYear(endYear + (newEndYear - endYear) * progress);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setStartYear(newStartYear);
                setEndYear(newEndYear);
            }
        };

        requestAnimationFrame(animate);
    };

    useImperativeHandle(ref, () => ({
        goToNextIcon,
        goToPrevIcon,
    }));

    return (
        <>
            <CircleStyle/>
            <DateDisplay>
                <DateText color="#5d5fef">{Math.round(startYear)}</DateText>
                <DateText color="#ef5da8">{Math.round(endYear)}</DateText>
            </DateDisplay>
            <TextEventsMobile $isSliderVisible={isSliderVisible}> {data[targetIndex].nameEvents || 'Неизвестное событие'}</TextEventsMobile>
            {rotation.map((angle: number, index: number) => (
                <CircleIconWrapper
                    key={index}
                    $angle={angle}
                    $isTarget={index === targetIndex}
                    $isActive={index === activeIndex || index === targetIndex}
                    ref={(el: any) => (iconRefs.current[index] = el!)}
                    onClick={() => handleIconClick(index)}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'baseline',
                    }}>
                        <CircleIcon isActive={index === activeIndex || index === targetIndex}>
                            {index + 1}
                        </CircleIcon>
                        {index === activeIndex || index === targetIndex ? (
                            <TextEvents $isSliderVisible={isSliderVisible}>
                                {data[index].nameEvents || 'Неизвестное событие'}
                            </TextEvents>
                        ) : null}
                    </div>
                </CircleIconWrapper>
            ))}
        </>
    );
}))

export default Circle;

