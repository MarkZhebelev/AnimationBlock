import {LazyAnimationBlock} from '../modules/AnimationBlock/AnimationBlock';
import {Suspense} from 'react';

const App = () => {
    return (
        <>
           <Suspense fallback={<div>...loading</div>}><LazyAnimationBlock/></Suspense>
        </>

    );
}

export default App;
