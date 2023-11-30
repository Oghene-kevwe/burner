import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { useRouter, Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import PurpleVector from "../assets/purpleVector.js";
import IndexImage1 from "../assets/indexImage1.js";
import IndexImageCurve from "../assets/indexImageCurve.js";
import SpotifyIcon from "../assets/spotifyIcon.js";

import { COLORS, styleGeneralView } from "../constants/index.js";

const Index = () => {
  const router = useRouter();
  return (
    <>
      <View style={styles.headerContainer}>
        <PurpleVector />
      </View>
      <View style={styleGeneralView}>
        <ScrollView>
          {/* index image */}
          <View style={styles.imageContainer}>
            <IndexImageCurve style={styles.indexImageCurve} />
            <IndexImage1 />
          </View>
          {/* end of  index image */}
          {/* content */}
          <View style={styles.stayInTuneContainer}>
            <Text style={styles.stayInTune}>Stay in tune</Text>
            <Text style={styles.catchUP}>
              Catch up on releases from your favorite artists. Share new music,
              spread love
            </Text>
          </View>
          {/* end of content */}
          {/* spotify button */}
          <Pressable
            onPress={() => {
              Alert.alert(
                "",
                "“Burner wants to open “Spotify”",
                [
                  {
                    text: "Open",
                    onPress: () => {
                      router.push("/onBoarding");
                    },
                  },
                  {
                    text: "Cancel",
                    onPress: () => {
                      router.push("/onBoarding");
                    },
                  },
                ],
                { cancelable: true }
              );
            }}
            style={styles.spotifyButton}
          >
            <View style={styles.spotifyButtonContent}>
              <SpotifyIcon />
              <Text style={styles.continueWithSpotify}>
                CONTINUE WITH SPOTIFY
              </Text>
            </View>
          </Pressable>
          {/* end of spotify button */}
          {/* terms of use */}
          <View style={styles.termsOfUseContainer}>
            <Text style={styles.termsOfUseText}>
              By clicking Continue, you agree to our{" "}
              <Text style={styles.underlineText}>Terms of Use</Text>
            </Text>
          </View>
          {/* end of terms of use  */}
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: COLORS.secondary,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
    position: "relative",
  },
  indexImageCurve: {
    position: "absolute",
    bottom: -100,
  },
  stayInTuneContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  stayInTune: {
    color: COLORS.primary300,
    fontSize: 40,
    fontFamily: "Inter_700Bold",
  },
  catchUP: {
    color: COLORS.primary100,
    padding: 6,
    textAlign: "center",
    width: "80%",
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    lineHeight: 23,
    letterSpacing: 0.32,
  },
  spotifyButton: {
    backgroundColor: COLORS.primary100,
    borderRadius: 50,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
  },
  spotifyButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 10,
  },
  continueWithSpotify: {
    color: COLORS.secondary,
    lineHeight: 20,
    letterSpacing: 0.28,
    fontFamily: "Inter_500Medium",
  },
  termsOfUseContainer: {
    marginTop: 80,
    alignItems: "center",
  },
  termsOfUseText: {
    color: COLORS.primary100,
    fontSize: 12,
    fontFamily: "Satoshi-Regular",
  },
  underlineText: {
    color: COLORS.primary100,
    textDecorationLine: "underline",
    fontSize: 12,
    fontFamily: "Satoshi-Medium",
  },
});

export default Index;
