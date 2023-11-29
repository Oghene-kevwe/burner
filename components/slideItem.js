import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import OnboardingImage1 from "../assets/onBoardingImage1";
import OnboardingImage2 from "../assets/onBoardingImage2";
import OnboardingImage3 from "../assets/onBoardingImage3";
import { COLORS } from "../constants";
import Pagination from "./pagination";

const { width, height } = Dimensions.get("screen");
const slideItem = ({ item, scrollX, index }) => {
  const { title, description } = item;
  return (
    <View style={styles.container}>
      <View>
        {/* title */}
        <Text style={styles.title}>{title}</Text>
        {/* description */}
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <Pagination scrollX={scrollX} index={index} />
    </View>
  );
};

export default slideItem;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingTop: 120,
    width,
    height,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 40,
    lineHeight: 48,
    color: COLORS.primary300,
    paddingRight: 100,
  },
  descriptionText: {
    color: COLORS.primary100,
    fontFamily: "Inter_500Medium",
    lineHeight: 23,
    letterSpacing: 0.32,
    paddingTop: 20,
    paddingRight: 150,
  },
});
