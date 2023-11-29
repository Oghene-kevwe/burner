import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
} from "react-native";
import { styleSafeArea } from "../constants";
import { COLORS } from "../constants";
import Slider from "../components/slider";

const onBoarding = () => {
  return (
    <SafeAreaView style={styleSafeArea}>
      <Slider />
    </SafeAreaView>
  );
};

export default onBoarding;
