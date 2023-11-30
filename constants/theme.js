import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

const COLORS = {
  primary100: "#F9F6FE",
  primary300: "#AA6DFF",
  primary400: "#6E24CF",
  secondary: "#0D0D0C",
};

const styleGeneralView = {
  flex: 1,
  backgroundColor: COLORS.secondary,
};


export { COLORS, styleGeneralView,height,width };
