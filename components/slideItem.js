import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { COLORS } from "../constants";
import Pagination from "./pagination";
import ChevronRight from "../assets/chevronRight";
import { height, width } from "../constants";

const slideItem = ({ item, scrollX, index }) => {
  const { title, description, img } = item;
  return (
    <View style={styles.container}>
      <View style={styles.titleDescContainer}>
        {/* title */}
        <Text style={styles.title}>{title}</Text>
        {/* description */}
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      {/* pagination container */}
      <View style={styles.paginationContainer}>
        <Pagination scrollX={scrollX} index={index} />
        <Pressable style={styles.skipButton}>
          {index === 2 ? (
            <Text style={styles.getStarted}>GET STARTED</Text>
          ) : (
            <View style={styles.skipButtonTextContainer}>
              <Text style={styles.skipButtonText}>Skip</Text>
              <ChevronRight />
            </View>
          )}
        </Pressable>
      </View>
      <View style={styles.imageContainer}>{img}</View>
    </View>
  );
};

export default slideItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    width,
    height,
  },
  titleDescContainer: {
    paddingHorizontal: 25,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 40,
    lineHeight: 48,
    color: COLORS.primary300,
    width:"80%",
  },
  descriptionText: {
    color: COLORS.primary100,
    fontFamily: "Inter_500Medium",
    lineHeight: 23,
    letterSpacing: 0.32,
    paddingTop: 20,
    paddingRight: 110,
  },
  paginationContainer: {
    paddingTop: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    borderColor: "red",
  },
  skipButton: {
    backgroundColor: COLORS.primary400,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  skipButtonTextContainer: {
    flexDirection: "row",
  },
  skipButtonText: {
    color: COLORS.primary100,
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
  },
  getStarted: {
    color: COLORS.primary100,
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
  },
  imageContainer: {
    marginTop: "auto",
  },
});
