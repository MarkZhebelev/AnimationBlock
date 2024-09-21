import React, {useEffect, useState} from 'react';
import { Block, Main } from './AnimationBlockStyle';
import CircleCommon from './components/Circle/CircleCommon';
import Slider from './components/Slider/Slider';
import Store from './store/store';
import {observer} from 'mobx-react';

export const AnimationBlock = observer(() => {
    const {getDataAction, isLoadingStore, dataLength} = Store;
    const [isSliderVisible, setIsSliderVisible] = useState<boolean>(true);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    useEffect(() => {
        getDataAction();
    }, [getDataAction]);

    if (isLoadingStore || dataLength === 0) {
        return <div>Загрузка данных...</div>;
    }

    return (
        <Block>
            <Main>
                <CircleCommon
                    setIsSliderVisible={setIsSliderVisible}
                    setIsAnimating={setIsAnimating}
                    isAnimating={isAnimating}
                />
                <Slider
                    isSliderVisible={isSliderVisible}
                    isAnimating={isAnimating}
                />
            </Main>
        </Block>
    );
});

