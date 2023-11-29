import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const IndexImageCurve = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={414}
    height={300}
    fill="none"
    {...props}
  >
    <Path
      stroke="url(#a)"
      strokeWidth={88}
      d="M-132.029 104.301c25.295-54.538 122.3-103.49 216 7 117.125 138.114 148.5 7.654 265.592 16.411 134.908 10.089 162.606 141.817 150.408 224.589"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-45.196}
        x2={459.303}
        y1={61.329}
        y2={188.106}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5D08C8" />
        <Stop offset={1} stopColor="#6607DE" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default IndexImageCurve;
