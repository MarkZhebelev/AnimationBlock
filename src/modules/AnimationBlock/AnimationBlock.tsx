import React, {useEffect, useState, Suspense} from 'react';
import { Block, Main } from './AnimationBlockStyle';
import Store from './store/store';
import { observer } from 'mobx-react-lite';

const CircleCommon = React.lazy(() => import('./components/Circle/CircleCommon'));
const Slider = React.lazy(() => import('./components/Slider/Slider'));


const AnimationBlock = observer(() => {
    const [store] = useState(() => new Store());
    const { getDataAction, isLoadingStore, dataLength } = store;
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
                <Suspense fallback={<div style={{textAlign:'center'}}>Загрузка компонента...</div>}>
                    <CircleCommon
                        store={store}
                        isSliderVisible={isSliderVisible}
                        setIsSliderVisible={setIsSliderVisible}
                        setIsAnimating={setIsAnimating}
                        isAnimating={isAnimating}
                    />
                </Suspense>

                <Suspense fallback={<div style={{textAlign:'center'}}>Загрузка слайдера...</div>}>
                    <Slider
                        store={store}
                        isSliderVisible={isSliderVisible}
                        isAnimating={isAnimating}
                    />
                </Suspense>
            </Main>
        </Block>
    );
});
export default AnimationBlock;

