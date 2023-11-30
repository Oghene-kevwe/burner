import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronRight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#F9F6FE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13 17 5-5-5-5M6 17l5-5-5-5"
    />
  </Svg>
);
export default ChevronRight;
