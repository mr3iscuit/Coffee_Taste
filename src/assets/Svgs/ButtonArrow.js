import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            fill="#F2F2F2"
            d="M9.5.316 18.184 9 9.5 17.684 7.977 16.16l6.043-6.094H.816V7.934H14.02L7.977 1.84 9.5.316Z"
        />
    </Svg>
)
export default SvgComponent
