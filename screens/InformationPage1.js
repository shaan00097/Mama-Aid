import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const InformationPage1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.informationPage1}
      locations={[0.06, 0.73, 0.81]}
      colors={["#d8dadc", "#fbfbfb", "#fbfbfb"]}
    >
      <Text style={[styles.postpartumDepression, styles.adamSherLayout]}>
        Postpartum Depression
      </Text>
      <Text style={[styles.adamSher, styles.adamSherLayout]}>Adam sher</Text>
      <Text
        style={styles.havingABaby}
      >{`Having a baby is one of the happiest times in life, but it can also be one of the saddest.

For most new mothers, the first several days after having a baby is an emotional roller coaster ride. Thrilling moments of happiness and joy are abruptly interrupted by a plunge into moments of depressive symptoms including weeping, anxiety, anger, and sadness. `}</Text>
      <Image
        style={styles.informationPage1Child}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("InformationPage")}
      >
        <View style={[styles.backChild, styles.backLayout]} />
        <View style={[styles.backChild, styles.backLayout]} />
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft4.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  adamSherLayout: {
    height: 36,
    width: 273,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  backLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  postpartumDepression: {
    top: 409,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.h3Regular,
    left: 39,
    width: 273,
  },
  adamSher: {
    top: 445,
    left: 41,
    fontSize: FontSize.caption1Regular12_size,
    fontFamily: FontFamily.caption2Regular11,
  },
  havingABaby: {
    top: 481,
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    width: 334,
    height: 262,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    left: 39,
    position: "absolute",
  },
  informationPage1Child: {
    top: 103,
    left: 70,
    width: 250,
    height: 287,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  backChild: {
    top: 0,
    left: 0,
    borderStyle: "solid",
    borderColor: Color.globalBlack,
    borderWidth: 1,
    borderRadius: Border.br_3xs,
  },
  iconChevronleft: {
    marginTop: -7.3,
    top: "50%",
    right: 11,
    width: 9,
    height: 15,
    position: "absolute",
  },
  back: {
    top: 32,
    left: 20,
  },
  informationPage1: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.gradientBluePrimary,
  },
});

export default InformationPage1;
