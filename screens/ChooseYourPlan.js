import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ChooseYourPlan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chooseYourPlan}>
      <Text style={[styles.chooseYourPlan1, styles.annualFlexBox]}>
        Choose your plan
      </Text>
      <View style={[styles.chooseYourPlanChild, styles.chooseLayout]} />
      <View style={[styles.chooseYourPlanItem, styles.chooseLayout]} />
      <View style={[styles.chooseYourPlanInner, styles.chooseLayout]} />
      <Text style={[styles.monthly, styles.annualTypo]}>Monthly</Text>
      <Text style={[styles.annual, styles.annualTypo]}>Annual</Text>
      <Text style={[styles.freeTrial, styles.annualTypo]}>Free trial</Text>
      <Text style={[styles.mo, styles.moTypo]}>$29,99 / mo</Text>
      <Text style={[styles.mo192, styles.moTypo]}>
        $15,99 / mo ($192 / year)
      </Text>
      <Text style={[styles.monthFree, styles.moTypo]}>1 month free</Text>
      <View style={[styles.back, styles.backLayout]}>
        <View style={[styles.backChild, styles.backChildLayout]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft5.png")}
        />
      </View>
      <Image
        style={[styles.starIcon, styles.backPosition]}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <Text style={[styles.toCompleteThe, styles.moTypo]}>
        To complete the sign up process, please make the payment
      </Text>
      <Pressable
        style={[styles.buttonPrimary, styles.backChildLayout]}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Text style={[styles.button, styles.annualTypo]}>Send code</Text>
      </Pressable>
      <Image
        style={styles.radioButtonOn}
        contentFit="cover"
        source={require("../assets/radio-button--on.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  annualFlexBox: {
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  chooseLayout: {
    height: 84,
    borderRadius: Border.br_mini,
    width: 353,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
  },
  annualTypo: {
    fontFamily: FontFamily.h3Regular,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.size_base,
  },
  moTypo: {
    color: Color.baseShade70,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  backLayout: {
    height: 39,
    width: 39,
  },
  backChildLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  backPosition: {
    top: 47,
    position: "absolute",
  },
  chooseYourPlan1: {
    top: 145,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
    left: 20,
  },
  chooseYourPlanChild: {
    top: 269,
  },
  chooseYourPlanItem: {
    top: 363,
  },
  chooseYourPlanInner: {
    top: 457,
  },
  monthly: {
    top: 288,
    left: 39,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  annual: {
    top: 382,
    left: 39,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  freeTrial: {
    top: 476,
    left: 39,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  mo: {
    top: 314,
    left: 39,
  },
  mo192: {
    top: 408,
    left: 39,
  },
  monthFree: {
    top: 502,
    left: 39,
  },
  backChild: {
    top: 0,
    left: 0,
    height: 39,
    width: 39,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  iconChevronleft: {
    marginTop: -7.5,
    top: "50%",
    right: 15,
    width: 9,
    height: 15,
    position: "absolute",
  },
  back: {
    top: 47,
    position: "absolute",
    left: 20,
  },
  starIcon: {
    left: 320,
    width: 46,
    height: 44,
  },
  toCompleteThe: {
    top: 197,
    width: 346,
    left: 20,
  },
  button: {
    color: Color.white,
    textAlign: "center",
  },
  buttonPrimary: {
    top: 767,
    backgroundColor: Color.main,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    width: 353,
    borderRadius: Border.br_3xs,
    left: 20,
  },
  radioButtonOn: {
    top: 301,
    left: 334,
    width: 20,
    height: 20,
    position: "absolute",
  },
  chooseYourPlan: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default ChooseYourPlan;
