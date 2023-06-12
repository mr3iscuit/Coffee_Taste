import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HomeTabIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={props.fill} width={props.width} height={props.height}>
        <Path d="M0 0h24v24H0z" fill="none" />
        <Path d="M16.97 2.016v1.968h-3.985V2.016h3.985Zm-9.985 0v6H3.001v-6h3.984Zm9.985 7.968v6h-3.985v-6h3.985Zm-9.985 4.032v1.968H3.001v-1.968h3.984ZM18.985 0H10.97v6h8.015V0ZM9.001 0H.985v9.984h8.016V0Zm9.984 8.016H10.97V18h8.015V8.016ZM9.001 12H.985v6h8.016v-6Z" />
    </Svg>
)

export default HomeTabIcon

