import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BasketTabIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={props.fill} width={props.width} height={props.height}>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M16.97 6H15A5.021 5.021 0 0 0 9.986.984 5.021 5.021 0 0 0 4.97 6H3A2 2 0 0 0 .986 8.016v12c0 1.078.89 1.968 2.016 1.968H16.97c1.125 0 2.015-.89 2.015-1.968v-12A2 2 0 0 0 16.97 6ZM9.985 3c1.64 0 3 1.36 3 3h-6c0-1.64 1.36-3 3-3Zm6.985 17.016H3v-12h13.97v12ZM9.985 12c-1.64 0-3-1.36-3-3H4.97a5.021 5.021 0 0 0 5.015 5.016A5.021 5.021 0 0 0 15.001 9h-2.016c0 1.64-1.36 3-3 3Z" />
    </Svg>
)

export default BasketTabIcon;
