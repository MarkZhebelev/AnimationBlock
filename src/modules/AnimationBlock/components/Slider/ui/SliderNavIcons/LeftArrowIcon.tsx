interface ILeftArrowIcon {
    color: string,
    strokeColor?: string,
    fillColor?: string,
    isActiveLeftArrowIcon?: boolean,
    handleClick?: ()=>void,
}

const LeftArrowIcon = ({color, strokeColor, fillColor,  handleClick}: ILeftArrowIcon) => {
    return (
        <svg width="50" height="50" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
            <g filter="url(#filter0_d_1_12)">
                <circle cx="35" cy="35" r="20" stroke={strokeColor ? strokeColor : "none"}
                        fill={fillColor ? fillColor : 'white'}/>
            </g>
            <path d="M38 30L33 35L38 40" stroke={color} strokeWidth="2"/>
            <defs>
                <filter
                    id="filter0_d_1_12"
                    x="0"
                    y="0"
                    width="70"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.219608 0 0 0 0 0.466667 0 0 0 0 0.933333 0 0 0 0.1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_12"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_12"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}

export default LeftArrowIcon;
