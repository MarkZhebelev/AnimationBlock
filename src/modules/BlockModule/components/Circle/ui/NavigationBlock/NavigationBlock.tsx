import styled from 'styled-components';
import LeftArrowIcon from '../../../Slider/ui/SliderNavIcons/LeftArrowIcon';
import RightArrowIcon from '../../../Slider/ui/SliderNavIcons/RightArrowIcon';

interface INavigationBlock {
    indexForText?: number,
    length?: number,
    handlePrevClick: () => void,
    handleNextClick: () => void
}

const NavigationBlock = ({indexForText, length, handlePrevClick, handleNextClick}: INavigationBlock) => {

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
                0{indexForText}/0{length}
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
                <div onClick={indexForText === length ? undefined : handleNextClick}
                     style={{
                         cursor: 'pointer',
                         opacity: indexForText === length ? 0.3 : 1,
                     }}
                >
                    <RightArrowIcon color={'#42567A'} strokeColor={'#42567A'} fillColor={'none'}/>
                </div>
            </div>
        </Block>
    );
};

const Block: any = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    top: 80%;
    left: 0;
    @media (max-width: 320px) {
        position: absolute;
        top: 700px;
    }
`

export default NavigationBlock;
