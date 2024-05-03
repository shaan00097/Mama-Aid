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

const Workout2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.workout7}>
      <ImageBackground
        style={styles.imgIcon}
        resizeMode="cover"
        source={require("../assets/img1.png")}
      >
        <View style={[styles.sauces, styles.juicePosition]} />
        <View style={styles.pizza} />
        <View style={[styles.shrimp, styles.juicePosition]} />
        <View style={styles.rice} />
        <View style={[styles.juice, styles.juicePosition]} />
        <View style={[styles.juice1, styles.juicePosition]} />
        <View style={styles.logo} />
      </ImageBackground>
      <Text style={[styles.pleaseEnterThe, styles.myActivitiesPosition]}>
        Please enter the following details to recommend you the best workout
        plan
      </Text>
      <Text style={[styles.myActivities, styles.myActivitiesPosition]}>
        My Activities !
      </Text>
      <View style={styles.workout7Child} />
      <View style={[styles.nextWrapper, styles.inputFieldFlexBox]}>
        <Pressable onPress={() => navigation.navigate("Workout3")}>
          <Text style={[styles.continue, styles.textTypo]}> Continue</Text>
        </Pressable>
      </View>
      <View style={[styles.inputField, styles.inputFieldFlexBox]}>
        <Text style={[styles.months, styles.monthsTypo]}>2 - 6 Months</Text>
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
          onPress={() => navigation.navigate("SignUpPM4")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/icon--arrow-full-down4.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.yourPostpartumStage, styles.monthsTypo]}>
        Your Postpartum Stage
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  juicePosition: {
    top: "50%",
    position: "absolute",
  },
  myActivitiesPosition: {
    textAlign: "left",
    color: Color.globalBlack,
    left: 25,
    position: "absolute",
  },
  inputFieldFlexBox: {
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
  },
  monthsTypo: {
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
  },
  pizza: {
    marginTop: -115,
    right: -56,
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowRadius: 8,
    elevation: 8,
    width: 132,
    height: 132,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: "50%",
    position: "absolute",
  },
  shrimp: {
    marginTop: -134,
    left: -30,
    width: 119,
    height: 122,
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
  },
  juice1: {
    marginTop: 70,
    left: 43,
    width: 82,
    height: 65,
  },
  logo: {
    marginTop: -21,
    marginLeft: -33,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
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
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
  },
  myActivities: {
    top: 325,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
  },
  workout7Child: {
    top: 620,
    left: 230,
    width: 49,
    height: 23,
    position: "absolute",
  },
  continue: {
    lineHeight: 22,
    fontWeight: "600",
    color: Color.gray6,
  },
  nextWrapper: {
    top: 772,
    left: 171,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 12,
    elevation: 12,
    borderRadius: Border.br_base,
    backgroundColor: Color.main,
    borderColor: Color.wrong,
    width: 200,
    paddingHorizontal: Padding.p_2xl,
    paddingVertical: Padding.p_xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  months: {
    lineHeight: 22,
    width: 288,
  },
  text: {
    lineHeight: 20,
    color: Color.colorGray_800,
    marginLeft: 10,
    fontSize: FontSize.size_base,
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
    left: 27,
    borderRadius: Border.br_3xs,
    borderColor: Color.border,
    width: 353,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_lg,
    backgroundColor: Color.white,
  },
  yourPostpartumStage: {
    top: 482,
    lineHeight: 18,
    left: 25,
    fontSize: FontSize.body1Medium_size,
    position: "absolute",
  },
  workout7: {
    borderRadius: Border.br_11xl,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Workout2;
