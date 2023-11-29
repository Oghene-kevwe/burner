import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const PurpleVector = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={414}
    height={80}
    fill="none"
    {...props}
  >
    <Path
      stroke="url(#a)"
      strokeWidth={88}
      d="M18.97-40.7c25.296-54.537 122.301-103.49 216.001 7.001 117.125 138.114 148.5 7.654 265.592 16.41 134.908 10.09 162.606 141.818 150.408 224.59"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={105.804}
        x2={610.303}
        y1={-83.671}
        y2={43.106}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5D08C8" />
        <Stop offset={1} stopColor="#6607DE" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default PurpleVector
