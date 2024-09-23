import React, {useEffect, useState, Suspense, lazy} from 'react';
import { Block, Main } from './AnimationBlockStyle';
import Store from './store/store';
import { observer } from 'mobx-react-lite';

// Динамическая загрузка компонентов с использованием React.lazy
const CircleCommon = React.lazy(() => import('./components/Circle/CircleCommon'));
const Slider = React.lazy(() => import('./components/Slider/Slider'));

const AnimationBlock = observer(() => {
    const { getDataAction, isLoadingStore, dataLength } = Store;
    const [isSliderVisible, setIsSliderVisible] = useState<boolean>(true);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    useEffect(() => {
        getDataAction(); // Загружаем данные при монтировании
    }, [getDataAction]);

    if (isLoadingStore || dataLength === 0) {
        return <div>Загрузка данных...</div>;
    }

    return (
        <Block>
            <Main>
                <Suspense fallback={<div>Загрузка компонента...</div>}>
                    <CircleCommon
                        setIsSliderVisible={setIsSliderVisible}
                        setIsAnimating={setIsAnimating}
                        isAnimating={isAnimating}
                    />
                </Suspense>

                <Suspense fallback={<div>Загрузка слайдера...</div>}>
                    <Slider
                        isSliderVisible={isSliderVisible}
                        isAnimating={isAnimating}
                    />
                </Suspense>
            </Main>
        </Block>
    );
});
export default AnimationBlock;
export const LazyAnimationBlock = lazy(()=>import('./AnimationBlock'));