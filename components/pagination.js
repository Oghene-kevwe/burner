import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import onboardingData from "../data/onboardingData";
import { COLORS } from "../constants";

const { width } = Dimensions.get("screen");

const Pagination = ({ scrollX, index }) => {
  return (
    <View style={styles.dotContainer}>
      {onboardingData.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 32, 8],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={idx}
            style={[
              styles.dot,
              { width: dotWidth },
              idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  dotContainer: {
    position: "absolute",
    flexDirection: "row",
    top: "50%",
    left: 25,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 9,
    marginHorizontal: 3,
    borderColor: COLORS.primary100,
    borderWidth: 1,
  },
  dotActive: {
    backgroundColor: COLORS.primary300,
    borderWidth: 0,
  },
});
