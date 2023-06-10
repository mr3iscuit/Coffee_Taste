import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const TextFieldTel = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <G clipPath="url(#a)">
            <Path
                fill="#fff"
                d="M18.912 5.82h-6.68c-1.132 0-2.07.938-2.07 2.11v14.14c0 1.172.938 2.11 2.07 2.11h6.68c1.133 0 2.07-.938 2.07-2.11V7.93c0-1.172-.937-2.11-2.07-2.11Zm-3.36 17.5c-.663 0-1.25-.547-1.25-1.25 0-.664.587-1.25 1.25-1.25.704 0 1.25.586 1.25 1.25 0 .703-.546 1.25-1.25 1.25Zm3.75-3.32h-7.5V8.32h7.5V20Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M.982 0h30v30h-30z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default TextFieldTel
