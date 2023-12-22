import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import "expo-dev-client";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MainScreen = () => {
  

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/dog-mock.jpg")}
        style={styles.absoluteImage}
      />

      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  absoluteImage: {
    width: windowWidth, // The image will take the whole width of its container
    height: windowHeight, // The height will adjust automatically
    objectFit: "cover",
    position: "absolute", // Positioning it absolute
  },
});

export default MainScreen;
