import React from "react";
import { View } from "react-native";
import { styleGeneralView } from "../constants";
import Slider from "../components/slider";

const onBoarding = () => {
  return (
    <View style={styleGeneralView}>
      <Slider />
    </View>
  );
};

export default onBoarding;
