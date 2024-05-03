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

const Workout = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.workout1}>
      <ImageBackground
        style={styles.imgIcon}
        resizeMode="cover"
        source={require("../assets/img1.png")}
      >
        <View style={styles.sauces} />
        <View style={styles.pizza} />
        <View style={styles.shrimp} />
        <View style={styles.rice} />
        <View style={styles.juice} />
        <View style={styles.juice1} />
        <View style={[styles.logo, styles.logoFlexBox]} />
      </ImageBackground>
      <Text style={[styles.pleaseEnterThe, styles.myActivitiesPosition]}>
        Please enter the following details to recommend you the best workout
        plan
      </Text>
      <Text style={[styles.myActivities, styles.myActivitiesPosition]}>
        My Activities !
      </Text>
      <View style={styles.workout1Child} />
      <View style={[styles.inputField, styles.logoFlexBox]}>
        <Text style={[styles.selectYourPostpartum, styles.yourTypo]}>
          Select your Postpartum Stage
        </Text>
        <Text style={[styles.repeatPassword, styles.iconSpaceBlock]}>
          repeat password
        </Text>
        <Image
          style={[styles.icon, styles.iconSpaceBlock]}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Pressable
          style={styles.iconArrowFullDown}
          onPress={() => navigation.navigate("Workout1")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon--arrow-full-down4.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.yourPostpartumStage, styles.yourTypo]}>
        Your Postpartum Stage
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  myActivitiesPosition: {
    color: Color.globalBlack,
    left: 25,
    textAlign: "left",
    position: "absolute",
  },
  yourTypo: {
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
  },
  iconSpaceBlock: {
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
    left: "50%",
    position: "absolute",
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
    left: "50%",
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
  myActivities: {
    top: 325,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
    textAlign: "left",
  },
  workout1Child: {
    top: 620,
    left: 230,
    width: 49,
    height: 23,
    position: "absolute",
  },
  selectYourPostpartum: {
    lineHeight: 22,
    width: 288,
  },
  repeatPassword: {
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
    top: 508,
    left: 22,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.border,
    borderWidth: 1,
    width: 353,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_lg,
    backgroundColor: Color.white,
  },
  yourPostpartumStage: {
    top: 482,
    left: 20,
    lineHeight: 18,
    position: "absolute",
  },
  workout1: {
    borderRadius: Border.br_11xl,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Workout;
