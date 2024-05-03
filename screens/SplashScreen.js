import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.splashScreen}>
      <Image
        style={styles.unsplashqom5mpoerIIcon}
        contentFit="cover"
        source={require("../assets/unsplashqom5mpoeri.png")}
      />
      <View style={[styles.foodiesParent, styles.foodiesParentFlexBox]}>
        <Image
          style={styles.foodiesIcon}
          contentFit="cover"
          source={require("../assets/foodies1.png")}
        />
        <Text style={styles.mamaAid}>Mama Aid</Text>
      </View>
      <Text style={[styles.welcomeToMama, styles.buttonTypo]}>
        Welcome to Mama Aid
      </Text>
      <Pressable
        style={[styles.buttonPrimary, styles.foodiesParentFlexBox]}
        onPress={() => navigation.navigate("LogInPM")}
      >
        <Text style={[styles.button, styles.buttonTypo]}>Get Started</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  foodiesParentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  buttonTypo: {
    fontFamily: FontFamily.h3Regular,
    textAlign: "center",
  },
  unsplashqom5mpoerIIcon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  foodiesIcon: {
    width: 56,
    height: 56,
  },
  mamaAid: {
    fontSize: 48,
    letterSpacing: 1,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    marginTop: 8,
    textAlign: "center",
    color: Color.globalBlack,
  },
  foodiesParent: {
    top: 26,
    left: 69,
  },
  welcomeToMama: {
    top: 796,
    left: 44,
    fontSize: FontSize.subtitleMedium_size,
    letterSpacing: 0,
    lineHeight: 22,
    width: 328,
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
  },
  button: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    fontWeight: "600",
    color: Color.white,
  },
  buttonPrimary: {
    top: 707,
    left: 24,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.main,
    width: 353,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
  },
  splashScreen: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default SplashScreen;
