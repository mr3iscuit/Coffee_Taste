import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const HomeTFIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Circle
            cx={3.604}
            cy={3.5}
            r={2.5}
            stroke="#55433C"
            strokeLinecap="round"
            strokeWidth={1.5}
        />
        <Path
            stroke="#55433C"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M8.611 3.481h10.5"
        />
        <Circle
            cx={17.361}
            cy={10.5}
            r={2.5}
            stroke="#55433C"
            strokeLinecap="round"
            strokeWidth={1.5}
            transform="rotate(-180 17.36 10.5)"
        />
        <Path
            stroke="#55433C"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M12.354 10.519h-10.5"
        />
    </Svg>
)
export default HomeTFIcon
