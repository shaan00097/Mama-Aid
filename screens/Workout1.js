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
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const Workout1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.workout2}>
      <ImageBackground
        style={styles.imgIcon}
        resizeMode="cover"
        source={require("../assets/img1.png")}
      >
        <View style={[styles.sauces, styles.juicePosition]} />
        <View style={[styles.pizza, styles.juicePosition]} />
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
      <View style={styles.yourPostpartumStageWrapper}>
        <Text style={styles.yourPostpartumStage}>Your Postpartum Stage</Text>
      </View>
      <View style={styles.inputFieldParent}>
        <View style={[styles.inputField, styles.inputBorder]}>
          <Text style={styles.selectYourPostpartum}>
            Select your Postpartum Stage
          </Text>
          <Text style={[styles.text, styles.textTypo]}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <Image
            style={styles.iconArrowFullDown}
            contentFit="cover"
            source={require("../assets/icon--arrow-full-down4.png")}
          />
        </View>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={[styles.text1, styles.textTypo]}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon4.png")}
          />
        </View>
        <Text style={[styles.first2Months, styles.monthsTypo]}>
          First 2 Months
        </Text>
        <Text style={[styles.after6Months, styles.monthsTypo]}>
          After 6 Months
        </Text>
        <View style={[styles.inputField, styles.inputBorder]}>
          <Text style={styles.selectYourPostpartum}>
            Select your Postpartum Stage
          </Text>
          <Text style={[styles.text, styles.textTypo]}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <Image
            style={styles.iconArrowFullDown}
            contentFit="cover"
            source={require("../assets/icon--arrow-full-down5.png")}
          />
        </View>
        <Pressable
          style={styles.frameChild}
          onPress={() => navigation.navigate("Workout2")}
        />
        <Text style={[styles.months, styles.monthsTypo]}>2 - 6 Months</Text>
      </View>
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
    left: 21,
    position: "absolute",
  },
  inputBorder: {
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    width: 353,
    left: 0,
    alignItems: "center",
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  textTypo: {
    color: Color.colorGray_800,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    display: "none",
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    flex: 1,
  },
  monthsTypo: {
    left: 15,
    width: 288,
    lineHeight: 22,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
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
      height: 0,
    },
    top: "50%",
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
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  imgIcon: {
    left: -18,
    width: 464,
    height: 282,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  pleaseEnterThe: {
    top: 389,
    fontSize: FontSize.subtitleMedium_size,
    letterSpacing: 1,
    lineHeight: 24,
    width: 323,
    height: 34,
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
    left: 21,
  },
  myActivities: {
    top: 319,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
    color: Color.globalBlack,
    left: 21,
  },
  yourPostpartumStage: {
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    left: 0,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
    top: 0,
    position: "absolute",
  },
  yourPostpartumStageWrapper: {
    top: 478,
    left: 22,
    width: 154,
    height: 18,
    position: "absolute",
  },
  selectYourPostpartum: {
    width: 288,
    lineHeight: 22,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.h3Regular,
  },
  text: {
    marginLeft: 10,
    display: "none",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    display: "none",
    overflow: "hidden",
  },
  iconArrowFullDown: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  inputField: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
  },
  text1: {
    display: "none",
  },
  inputField1: {
    paddingTop: Padding.p_lg,
    height: 170,
  },
  first2Months: {
    top: 63,
  },
  after6Months: {
    top: 137,
  },
  frameChild: {
    height: "22.35%",
    width: "94.62%",
    top: "54.12%",
    right: "3.68%",
    bottom: "23.53%",
    left: "1.7%",
    borderRadius: Border.br_2xs,
    backgroundColor: Color.wrong,
    position: "absolute",
  },
  months: {
    top: 100,
  },
  inputFieldParent: {
    top: 511,
    left: 20,
    height: 170,
    width: 353,
    position: "absolute",
  },
  workout2: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 60,
    elevation: 60,
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});

export default Workout1;
