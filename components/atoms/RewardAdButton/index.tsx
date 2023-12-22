import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
  TestIds,
  RewardedAd,
  RewardedAdEventType,
} from "react-native-google-mobile-ads";
import "expo-dev-client";
import { useEffect, useState } from "react";
import CustomText from "../CustomText";

const adUnitId = TestIds.REWARDED;

const rewarded = RewardedAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});
const RewardAdButton = ({ ...props }: TouchableOpacityProps) => {
  const [loaded, setLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let loadTimeout: NodeJS.Timeout;

    const loadAd = () => {
      console.log("Loading new ad...");
      rewarded.load();
      setIsLoading(true);

      // Set a timeout for 10 seconds to check if the ad has loaded.
      loadTimeout = setTimeout(() => {
        if (!loaded) {
          console.log("Ad not loaded in 60 seconds, reloading...");
          loadAd(); // Attempt to load the ad again.
        }
      }, 60000); // 10 seconds
    };

    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        console.log("Ad loaded successfully.");
        setLoaded(true);
        setIsLoading(false);
        clearTimeout(loadTimeout); // Clear the timeout when the ad is loaded.
      }
    );

    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      (reward) => {
        console.log("User earned reward: ", reward);
        setTimeout(() => {
          loadAd();
        }, 1000);
      }
    );

    loadAd();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
      clearTimeout(loadTimeout);
    };
  }, []);

  const handleShowAd = () => {
    console.log("Button pressed. Ad loaded:", loaded);
    if (rewarded.loaded && loaded) {
      console.log("Showing ad...");
      rewarded.show();
      setLoaded(false);
    } else {
      console.log("Ad not ready to be shown.");
    }
  };

  if (!loaded && !isLoading) {
    return null;
  }
  return (
    <TouchableOpacity
      {...props}
      style={{
        backgroundColor: "#FF6969",
        width: 185,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 9999
      }}
      onPress={handleShowAd}>
      <CustomText weight='medium' style={{color: 'white'}}>{"Feed dog"}</CustomText>
    </TouchableOpacity>
  );
};

export default RewardAdButton;
