// import * as React from "react"
// import Svg, { Path } from "react-native-svg"
// const FavoriteTabIcon = (props) => (
//     <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
//         <Path
//             fill="#fff"
//             fillOpacity={0.6}
//             d="M14.485 0c-1.734 0-3.421.797-4.5 2.11C8.907.796 7.22 0 5.485 0 2.392 0 .001 2.438.001 5.484c0 3.797 3.375 6.891 8.531 11.579l1.453 1.265 1.454-1.312c5.156-4.641 8.53-7.735 8.53-11.532C19.97 2.438 17.58 0 14.486 0ZM10.08 15.563l-.094.093-.093-.094C5.11 11.25 1.97 8.392 1.97 5.485c0-1.968 1.5-3.468 3.515-3.468 1.547 0 3.047.984 3.563 2.343h1.875c.515-1.359 2.015-2.343 3.562-2.343 2.016 0 3.516 1.5 3.516 3.468 0 2.907-3.14 5.766-7.922 10.079Z"
//         />
//     </Svg>
// )
// export default FavoriteTabIcon


// FavoriteTabIcon.js
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FavoriteTabIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={props.fill} width={props.width} height={props.height}>
    <Path d="M0 0h24v24H0z" fill="none" />
    <Path d="M14.485 0c-1.734 0-3.421.797-4.5 2.11C8.907.796 7.22 0 5.485 0 2.392 0 .001 2.438.001 5.484c0 3.797 3.375 6.891 8.531 11.579l1.453 1.265 1.454-1.312c5.156-4.641 8.53-7.735 8.53-11.532C19.97 2.438 17.58 0 14.486 0ZM10.08 15.563l-.094.093-.093-.094C5.11 11.25 1.97 8.392 1.97 5.485c0-1.968 1.5-3.468 3.515-3.468 1.547 0 3.047.984 3.563 2.343h1.875c.515-1.359 2.015-2.343 3.562-2.343 2.016 0 3.516 1.5 3.516 3.468 0 2.907-3.14 5.766-7.922 10.079Z" />
  </Svg>
)

export default FavoriteTabIcon
