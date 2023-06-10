import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const PasswordFieldIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <G clipPath="url(#a)">
            <Path
                fill="#fff"
                d="M7.662 19.18h16.64v1.64H7.663v-1.64ZM8.6 15.78l.703-1.21.703 1.21 1.094-.625-.704-1.21h1.407v-1.25h-1.407l.704-1.25-1.094-.626-.703 1.25-.703-1.25-1.094.625.742 1.25H6.803v1.25h1.445l-.742 1.211 1.094.625Zm5.585-.625 1.094.625.703-1.21.704 1.21 1.093-.625-.703-1.21h1.406v-1.25h-1.406l.703-1.25-1.093-.626-.704 1.25-.703-1.25-1.094.625.704 1.25h-1.407v1.25h1.407l-.704 1.211Zm10.977-2.46h-1.445l.742-1.25-1.094-.626-.703 1.25-.703-1.25-1.094.625.703 1.25h-1.406v1.25h1.406l-.703 1.211 1.094.625.703-1.21.703 1.21 1.094-.625-.742-1.21h1.445v-1.25Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M.982 0h30v30h-30z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default PasswordFieldIcon
