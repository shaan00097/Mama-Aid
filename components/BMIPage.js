import * as React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const BMIPage = () => {
  return (
    <View style={styles.bmiPage}>
      <ImageBackground
        style={styles.imgIcon}
        resizeMode="cover"
        source={require("../assets/img2.png")}
      >
        <View style={[styles.sauces, styles.juicePosition]} />
        <View style={[styles.pizza, styles.juicePosition]} />
        <View style={[styles.shrimp, styles.juicePosition]} />
        <View style={styles.rice} />
        <View style={[styles.juice, styles.juicePosition]} />
        <View style={[styles.juice1, styles.juicePosition]} />
        <View style={styles.logo} />
      </ImageBackground>
      <Text style={[styles.myBmiCategory, styles.myBmiCategoryClr]}>
        My BMI Category !
      </Text>
      <View style={styles.bmiPageChild} />
      <View style={[styles.buttonPrimary, styles.textFieldFlexBox]}>
        <Text style={styles.button}>Overweight</Text>
      </View>
      <View style={[styles.review, styles.reviewPosition]}>
        <View style={[styles.textField, styles.textFieldFlexBox]}>
          <View style={styles.content}>
            <Text style={styles.label}>Please Read !!</Text>
            <Text style={[styles.writeTextHere, styles.myBmiCategoryClr]}>
              Increased observation, including respiratory rate, may be required
              due to the risk of airway compromise, obstructive sleep apnoea and
              aspiration, particularly following administration of narcotic and
              sedative medications.
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.toKnowMoreContainer}>
        <Text style={styles.toKnowMoreAboutBmiScale}>
          <Text
            style={styles.toKnowMore}
          >{`To know more about BMI Scale - `}</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.readMore1}>Read More</Text>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  juicePosition: {
    top: "50%",
    position: "absolute",
  },
  myBmiCategoryClr: {
    color: Color.globalBlack,
    textAlign: "left",
  },
  textFieldFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewPosition: {
    width: 353,
    left: 25,
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
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    width: 132,
    height: 132,
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
  myBmiCategory: {
    top: 325,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
    textAlign: "left",
    fontWeight: "700",
    left: 25,
    color: Color.globalBlack,
    position: "absolute",
  },
  bmiPageChild: {
    top: 620,
    left: 230,
    width: 49,
    height: 23,
    position: "absolute",
  },
  button: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    fontWeight: "600",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.h3Regular,
  },
  buttonPrimary: {
    top: 396,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.main,
    height: 60,
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    width: 353,
    left: 25,
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 16,
    color: Color.colorGray_200,
    alignSelf: "stretch",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  writeTextHere: {
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    marginTop: 4,
    alignSelf: "stretch",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  content: {
    flex: 1,
  },
  textField: {
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: Color.grayGray6,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    alignSelf: "stretch",
    backgroundColor: Color.white,
  },
  review: {
    top: 488,
  },
  toKnowMore: {
    color: Color.grayGray1,
  },
  text: {
    color: Color.colorPurple,
  },
  toKnowMoreAboutBmiScale: {
    fontFamily: FontFamily.h3Regular,
  },
  readMore1: {
    textDecoration: "underline",
    fontFamily: FontFamily.h3Regular,
    fontWeight: "700",
  },
  toKnowMoreContainer: {
    top: 760,
    left: 30,
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 18,
    textAlign: "center",
    position: "absolute",
  },
  bmiPage: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default BMIPage;
