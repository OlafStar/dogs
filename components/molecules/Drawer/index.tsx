import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomText from "../../atoms/CustomText";

type DrawerProps = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const closedDrawer = (windowHeight / 100) * 38 * -1;
const openDrawer = (windowHeight / 100) * 78 * -1;

const CustomBottomDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const translateY = useRef(
    new Animated.Value(isDrawerOpen ? openDrawer : closedDrawer)
  ).current;

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: !isDrawerOpen ? openDrawer : closedDrawer,
      useNativeDriver: true,
    }).start();
  }, [isDrawerOpen]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderRelease: (e, { vy, dy }) => {
        const threshold = 100;
        if (isDrawerOpen) {
          if (vy < 0 || dy < -threshold) {
            setIsDrawerOpen(false);
          } else {
            setIsDrawerOpen(true);
          }
        } else {
          if (vy > 0 || dy > threshold) {
            setIsDrawerOpen(true);
          } else {
            setIsDrawerOpen(false);
          }
        }
      },
    })
  ).current;
  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        height: (windowHeight / 100) * 70,
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 20,
        padding: 8,
        left: 16,
        right: 16,
      }}>
      <View {...panResponder.panHandlers}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 9999,
            backgroundColor: "#ffe7e7",
            width: 100,
            height: 25,
          }}>
          <CustomText weight='light'>{"Dzisiaj"}</CustomText>
        </View>
        <View style={{ paddingHorizontal: 8 }}>
          <CustomText
            weight='medium'
            size={32}
            style={{
              paddingTop: 12,
            }}>
            {"Labrador"}
          </CustomText>
          <View style={{ ...styles.horizontal, paddingTop: 16 }}>
            <View style={styles.item}>
              <CustomText weight='light'>{"Wysokość:"}</CustomText>
              <CustomText
                weight='light'
                style={{
                  paddingTop: 8,
                }}>
                {"56–57 cm (psy)"}
              </CustomText>
              <CustomText weight='light'>{"54–56 cm (suki)"}</CustomText>
            </View>
            <View style={styles.item}>
              <CustomText weight='light' style={{ fontSize: 16 }}>
                {"Masa:"}
              </CustomText>
              <CustomText
                weight='light'
                style={{
                  paddingTop: 8,
                }}>
                {"29,5–36 kg (psy)"}
              </CustomText>
              <CustomText weight='light'>{"25–32 kg (suki)"}</CustomText>
            </View>
          </View>
          <View style={{ ...styles.line, marginTop: 24 }}></View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{ paddingHorizontal: 8, marginTop: 32 }}>
          <CustomText weight='light'>
            {
              "Labrador retriever to rasa psów żywiołowych, skorych do zabawy, także z innymi psami. Stworzone do pracy w wodzie i aportowania, potrzebują bezpośredniego kontaktu w pracy z człowiekiem. Lubią towarzystwo ludzi. Dobrze tolerują dzieci i są cierpliwe w kontaktach z nimi."
            }
          </CustomText>

          <CustomText weight='medium' size={20} style={{ paddingTop: 24 }}>
            {"Zdrowie i pielęgnacja"}
          </CustomText>

          <CustomText weight='light' style={{ marginTop: 8 }}>
            {
              "Labrador retriever to rasa psów żywiołowych, skorych do zabawy, także z innymi psami. Stworzone do pracy w wodzie i aportowania, potrzebują bezpośredniego kontaktu w pracy z człowiekiem. Lubią towarzystwo ludzi. Dobrze tolerują dzieci i są cierpliwe w kontaktach z nimi."
            }
          </CustomText>

          <CustomText weight='medium' size={20} style={{ paddingTop: 24 }}>
            {"Historia"}
          </CustomText>

          <CustomText weight='light' style={{ marginTop: 8 }}>
            {`Podobnie jak nowofundland i landseer rasa pochodzi z południa Nowej Fundlandii. W XVIII wieku była wykorzystywana przez rybaków do pracy na kutrach (psy pomagały przy wyciąganiu sieci, aportowaniu przedmiotów, a nawet ratowaniu tonących). Nazywane były psami św. Jana. Do Europy pierwsze psy tej rasy sprowadził w 1870 lord Malmesbury (błędnie nazywając je „psami z Labradoru”), który razem z synem rozpoczął ich hodowlę w Wielkiej Brytanii. To właśnie dzięki brytyjskim próbom hodowli, podejmowanym między innymi przez Earla Malmesbury (1778-1841), ukierunkowanym konsekwentnie na zdolności łowieckie rasy, stała się ona popularna wśród polującej szlachty. Dnia 7 lipca 1903 labrador retriever został oficjalnie uznany za rasę samodzielną przez angielski klub kynologiczny.`}
          </CustomText>
        </View>
      </ScrollView>
    </Animated.View>
  );
};
export default CustomBottomDrawer;

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  item: {
    width: (windowWidth - 16 * 2 - 16 * 2) / 2,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#d9d9d9",
  },
});
