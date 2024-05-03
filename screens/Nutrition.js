import * as React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Nutrition = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nutrition1}>
      <ImageBackground
        style={styles.imgIcon}
        resizeMode="cover"
        source={require("../assets/img3.png")}
      >
        <View style={styles.sauces} />
        <View style={styles.pizza} />
        <View style={styles.shrimp} />
        <View style={[styles.rice, styles.ricePosition]} />
        <View style={styles.juice} />
        <View style={styles.juice1} />
        <View style={[styles.logo, styles.ricePosition]} />
      </ImageBackground>
      <Text style={[styles.pleaseEnterThe, styles.myNutritionPosition]}>
        Please enter the following details to recommend you the best meal plan
      </Text>
      <Text style={[styles.myNutrition, styles.myNutritionPosition]}>
        My Nutrition !
      </Text>
      <View style={styles.nutrition1Child} />
      <View style={[styles.inputField, styles.inputFieldPosition]}>
        <Text style={[styles.selectYourLactation, styles.lactationTypo]}>
          Select your Lactation Status
        </Text>
        <Text style={[styles.text, styles.textSpaceBlock]}>
          repeat password
        </Text>
        <Image
          style={[styles.icon, styles.textSpaceBlock]}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Pressable
          style={styles.iconArrowFullDown}
          onPress={() => navigation.navigate("Nutrition1")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon--arrow-full-down4.png")}
          />
        </Pressable>
      </View>
      <Text
        style={[styles.lactationStatus, styles.lactationTypo]}
      >{`Lactation Status `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ricePosition: {
    left: "50%",
    position: "absolute",
  },
  myNutritionPosition: {
    color: Color.globalBlack,
    textAlign: "left",
    left: 25,
    position: "absolute",
  },
  inputFieldPosition: {
    left: 25,
    position: "absolute",
  },
  lactationTypo: {
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
  },
  textSpaceBlock: {
    display: "none",
    marginLeft: 10,
  },
  sauces: {
    marginTop: 43,
    right: 0,
    width: 106,
    height: 87,
    top: "50%",
    position: "absolute",
  },
  pizza: {
    marginTop: -115,
    right: -56,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 132,
    height: 132,
    top: "50%",
    position: "absolute",
  },
  shrimp: {
    marginTop: -134,
    left: -30,
    width: 119,
    height: 122,
    top: "50%",
    position: "absolute",
  },
  rice: {
    marginLeft: -59,
    top: -23,
    width: 111,
    height: 112,
  },
  juice: {
    marginTop: 52,
    left: -12,
    width: 101,
    height: 69,
    top: "50%",
    position: "absolute",
  },
  juice1: {
    marginTop: 70,
    left: 43,
    width: 82,
    height: 65,
    top: "50%",
    position: "absolute",
  },
  logo: {
    marginTop: -21,
    marginLeft: -33,
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    overflow: "hidden",
  },
  imgIcon: {
    top: 0,
    left: -18,
    width: 464,
    height: 282,
    position: "absolute",
    overflow: "hidden",
  },
  pleaseEnterThe: {
    top: 395,
    fontSize: FontSize.subtitleMedium_size,
    letterSpacing: 1,
    lineHeight: 24,
    width: 323,
    height: 34,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
  },
  myNutrition: {
    top: 325,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
    textAlign: "left",
  },
  nutrition1Child: {
    top: 620,
    left: 230,
    width: 49,
    height: 23,
    position: "absolute",
  },
  selectYourLactation: {
    lineHeight: 22,
    width: 288,
  },
  text: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.colorGray_800,
    marginLeft: 10,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    overflow: "hidden",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  iconArrowFullDown: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  inputField: {
    top: 498,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    width: 353,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_lg,
    alignItems: "center",
    backgroundColor: Color.white,
  },
  lactationStatus: {
    top: 472,
    lineHeight: 18,
    display: "flex",
    alignItems: "flex-end",
    width: 159,
    left: 25,
    position: "absolute",
  },
  nutrition1: {
    borderRadius: Border.br_11xl,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Nutrition;
