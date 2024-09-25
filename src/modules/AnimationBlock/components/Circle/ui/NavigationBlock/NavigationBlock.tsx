import styled from 'styled-components';
import LeftArrowIcon from '../../../Slider/ui/SliderNavIcons/LeftArrowIcon';
import RightArrowIcon from '../../../Slider/ui/SliderNavIcons/RightArrowIcon';
import Store from '../../../../store/store';
import {observer} from 'mobx-react-lite';


interface INavigationBlock {
    store: Store
    handlePrevClick: () => void,
    handleNextClick: () => void
}

const NavigationBlock = observer(({ store, handlePrevClick, handleNextClick}: INavigationBlock) => {
    const {indexForText, dataLength} = store
    return (
        <Block>
            <div style={{
                paddingLeft: '15px',
                color: '#42567A',
                fontFamily: "PT Sans",
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal'
            }}>
                0{indexForText}/0{dataLength}
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <div onClick={indexForText === 1
                    ? undefined : handlePrevClick}
                     style={{
                         cursor: 'pointer',
                         opacity: indexForText === 1 ? 0.3 : 1,
                     }}
                >
                    <LeftArrowIcon  color={'#42567A'} strokeColor={'#42567A'} fillColor={'none'}/>
                </div>
                <div onClick={indexForText === dataLength ? undefined : handleNextClick}
                     style={{
                         cursor: 'pointer',
                         opacity: indexForText === dataLength ? 0.3 : 1,
                     }}
                >
                    <RightArrowIcon color={'#42567A'} strokeColor={'#42567A'} fillColor={'none'}/>
                </div>
            </div>
        </Block>
    );
});

const Block: any = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    top: 80%;
    left: 0;
    @media (max-width: 320px) {
        position: absolute;
        top: 540px;
    }
`

export default NavigationBlock;
