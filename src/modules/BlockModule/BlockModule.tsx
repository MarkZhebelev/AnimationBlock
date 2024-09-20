
import React, {useState} from 'react';
import {dateRanges} from '../../data';
import { Block, Main } from './BlockModuleStyle';
import CircleCommon from './components/Circle/CircleCommon';
import Slider from './components/Slider/Slider';

const BlockModule = () => {
    const [indexForText, setIndexForText] = useState<number>(dateRanges.length);
    const [isSliderVisible, setIsSliderVisible] = useState<boolean>(true);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    return (
        <Block>
            <Main>
                <CircleCommon
                    length={dateRanges.length}
                    indexForText={indexForText}
                    setIndexForText={setIndexForText}
                    setIsSliderVisible={setIsSliderVisible}
                    setIsAnimating={setIsAnimating}
                    isAnimating={isAnimating}
                />
                <Slider
                    indexForText={indexForText}
                    isSliderVisible={isSliderVisible}
                    isAnimating={isAnimating}
                />

            </Main>
        </Block>
    );
};

export default BlockModule;