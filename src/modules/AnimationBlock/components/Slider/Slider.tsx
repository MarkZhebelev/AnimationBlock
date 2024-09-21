import LeftArrowIcon from './ui/SliderNavIcons/LeftArrowIcon';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import RightArrowIcon from './ui/SliderNavIcons/RightArrowIcon';
import React, { useEffect, useRef, useState } from 'react';
import {
    EventBlock,
    SliderContainer,
    StyledNextButton,
    StyledPrevButton,
    StyledSwiper
} from './style/SliderComponentStyle';
import { SwiperSlide } from 'swiper/react';
import { observer } from 'mobx-react';
import Store from '../../store/store';

interface ISliderComponent {
    isSliderVisible: boolean;
    isAnimating: boolean;
}

const Slider = observer(({ isSliderVisible, isAnimating }: ISliderComponent) => {
    const {indexForText, data} = Store;
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
    const [isBeginning, setIsBeginning] = useState<boolean>(true);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    useEffect(() => {
        if (swiperInstance && swiperInstance.params) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;

            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);


    return (
        <SliderContainer $isVisible={isSliderVisible}>
            <StyledPrevButton ref={prevRef} disabled={isBeginning || isAnimating}>
                <LeftArrowIcon color={'#3877EE'} />
            </StyledPrevButton>

            <StyledSwiper
                modules={[Navigation, A11y]}
                loop={false}
                watchSlidesProgress={true}
                watchOverflow={true}
                onSwiper={(swiper: any) => {
                    setSwiperInstance(swiper);
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper: any) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                breakpoints={{
                    1200: {
                        slidesPerView: 3,
                        slidesPerGroup: 1,
                        spaceBetween: 50,
                    },
                    900: {
                        slidesPerView: 2.5,
                        slidesPerGroup: 1,
                        spaceBetween: 50,
                    },
                    500: {
                        slidesPerView: 1.5,
                        slidesPerGroup: 1,
                        spaceBetween: 50,
                    },
                    0: {
                        slidesPerView: 1.5,
                        slidesPerGroup: 1,
                        spaceBetween: 30,
                    },
                }}
            >
                {data
                    .filter((range: any) => String(range.id) === String(indexForText))
                    .map((range: any) =>
                        range.events.map((event: any, idx: number) => (
                            <SwiperSlide key={idx}>
                                <EventBlock>
                                    <h3 style={{fontFamily: 'Bebas Neue'}}>{event.year}</h3>
                                    <p style={{fontFamily: 'PT Sans', fontWeight: 400}}>{event.text}</p>
                                </EventBlock>
                            </SwiperSlide>
                        ))
                    )}
            </StyledSwiper>

            <StyledNextButton ref={nextRef} disabled={isEnd || isAnimating}>
                <RightArrowIcon color={'#3877EE'} />
            </StyledNextButton>
        </SliderContainer>
    );
});

export default Slider;
