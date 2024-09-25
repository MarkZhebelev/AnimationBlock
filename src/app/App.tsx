import {Suspense} from 'react';
import LazyAnimationBlock from '../modules/AnimationBlock';

const App = () => {
    return (
        <>
           <Suspense fallback={<div style={{textAlign:'center'}}>...loading</div>}><LazyAnimationBlock/></Suspense>
        </>

    );
}

export default App;
