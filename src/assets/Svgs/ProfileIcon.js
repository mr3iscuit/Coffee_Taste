import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            fill="#fff"
            fillOpacity={0.6}
            d="M8.985 3c1.079 0 2.016.89 2.016 2.016 0 1.078-.938 1.968-2.016 1.968S6.97 6.094 6.97 5.016C6.97 3.89 7.907 3 8.985 3Zm0 9.984c2.72 0 5.813 1.313 6 2.016h-12c.235-.703 3.328-2.016 6-2.016Zm0-12c-2.203 0-3.984 1.829-3.984 4.032A3.981 3.981 0 0 0 8.985 9a3.981 3.981 0 0 0 3.985-3.984c0-2.204-1.782-4.032-3.985-4.032Zm0 10.032C6.313 11.016.97 12.328.97 15v2.016H17V15c0-2.672-5.344-3.984-8.016-3.984Z"
        />
    </Svg>
)
export default ProfileIcon
