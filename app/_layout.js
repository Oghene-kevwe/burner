import { Stack } from "expo-router";
import { StyleSheet,  } from "react-native";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { COLORS } from "../constants/index.js";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    "Satoshi-Regular": require("../assets/fonts/Satoshi-Regular.otf"),
    "Satoshi-Medium": require("../assets/fonts/Satoshi-Medium.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack
        onLayout={onLayoutRootView}
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
};

export default Layout;
