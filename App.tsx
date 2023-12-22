import React from "react";
import "expo-dev-client";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./components/organisms/MainScreen";
import { LinearGradient } from "expo-linear-gradient";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import Drawer from "./components/molecules/Drawer";
import { useFonts } from "expo-font";
import CustomText from "./components/atoms/CustomText";
import RewardAdButton from "./components/atoms/RewardAdButton";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "ClashGrotesk-Extralight": require("./assets/fonts/ClashGrotesk-Extralight.ttf"),
    "ClashGrotesk-Light": require("./assets/fonts/ClashGrotesk-Light.ttf"),
    "ClashGrotesk-Regular": require("./assets/fonts/ClashGrotesk-Regular.ttf"),
    "ClashGrotesk-Medium": require("./assets/fonts/ClashGrotesk-Medium.ttf"),
    "ClashGrotesk-Semibold": require("./assets/fonts/ClashGrotesk-Semibold.ttf"),
    "ClashGrotesk-Bold": require("./assets/fonts/ClashGrotesk-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>{"Loading"}</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer documentTitle={{ enabled: false }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name='Main' component={MainScreen} />
          {/* Add other screens as needed */}
        </Stack.Navigator>
      </NavigationContainer>
      {/* Persistent element */}
      <View style={styles.persistentElement}>
        <LinearGradient
          colors={[
            "#FFD7D7",
            "#FFD7D7",
            "rgba(255, 215, 215, 0.22)",
            "rgba(255, 215, 215, 0.00)",
          ]}
          locations={[0, 0.4996, 0.8516, 1.09]} // Corresponding to the gradient stops
          style={styles.persistentElement}>
          <CustomText weight='bold' size={32}>
            Daily Dogs
          </CustomText>
        </LinearGradient>
      </View>
      <View style={styles.bottomElement}>
        <LinearGradient
          colors={[
            "rgba(255, 215, 215, 0.00)", // Start color: fully transparent
            "rgba(255, 215, 215, 0.47)",
            "#FFD7D7",
            "#FFD7D7",
          ]}
          locations={[0, 0.159, 0.5293, 1.09]} // Corresponding to the gradient stops (0%, 15.9%, 32.93%, 109%)
          style={styles.bottomElement}></LinearGradient>
      </View>
      <View style={styles.rewardButton}>
        <RewardAdButton />
      </View>
      <View>
        <Drawer />
      </View>
      <View style={styles.footer}>
        <BannerAd
          unitId={TestIds.BANNER || "ca-app-pub-xxxxxxxxxxxxxxxx/xxxxxxxxxx"}
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  persistentElement: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 202,
    alignItems: "center",
    paddingTop: 42,
    zIndex: 1000,
  },
  bottomElement: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 347,
    alignItems: "center",
    zIndex: 500,
    // Make any other adjustments specific to this element
  },
  footer: {
    width: "100%",
    position: "absolute", // positions the footer at the bottom
    bottom: 0, // ensures it's at the very bottom
    zIndex: 1000,
  },
  rewardButton: {
    position: "absolute",
    top: 122,
    right: 16,
  },
});
