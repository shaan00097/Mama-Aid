import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const SignUpPM2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpPm2}>
      <Text style={styles.profileSetUp}>Profile Set Up</Text>
      <Image
        style={styles.signUpPm2Child}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <View style={styles.back}>
        <View style={styles.backChild} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </View>
      <View style={styles.input}>
        <Text style={[styles.title, styles.titleTypo]}>Your Age</Text>
        <View style={styles.inputField}>
          <Text style={[styles.text, styles.textTypo]}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.input1, styles.inputFlexBox]}>
        <Text style={[styles.title, styles.titleTypo]}>Your Height</Text>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo]}>
            must be 8 characters
          </Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.input2, styles.inputFlexBox]}>
        <Text style={[styles.title, styles.titleTypo]}>Your Weight</Text>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo]}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.inputField3, styles.inputPosition]}>
        <Text style={styles.selectYourPostpartum}>
          Select your Postpartum Stage
        </Text>
        <Text style={[styles.text3, styles.textTypo]}>repeat password</Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Pressable
          style={styles.iconArrowFullDown}
          onPress={() => navigation.navigate("SignUpPM4")}
        >
          <Image
            style={styles.icon4}
            contentFit="cover"
            source={require("../assets/icon--arrow-full-down2.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.inputField4, styles.inputPosition]}>
        <Text style={styles.selectYourPostpartum}>
          Select your Lactation Status
        </Text>
        <Text style={[styles.text3, styles.textTypo]}>repeat password</Text>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon2.png")}
        />
        <Image
          style={styles.iconArrowFullDown}
          contentFit="cover"
          source={require("../assets/icon--arrow-full-down2.png")}
        />
      </View>
      <Text style={[styles.yourPostpartumStage, styles.titleTypo]}>
        Your Postpartum Stage
      </Text>
      <Text
        style={[styles.lactationStatus, styles.inputPosition]}
      >{`Lactation Status `}</Text>
      <View style={[styles.buttonPrimary, styles.inputFlexBox]}>
        <Text style={styles.button}>Save</Text>
      </View>
      <Text style={[styles.kg, styles.kgTypo]}>kg</Text>
      <Text style={[styles.cm, styles.kgTypo]}>cm</Text>
      <Text style={[styles.cm, styles.kgTypo]}>cm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    color: Color.globalBlack,
  },
  textTypo: {
    color: Color.colorGray_800,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    display: "none",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    flex: 1,
  },
  inputFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  inputBorder: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  inputPosition: {
    left: 22,
    position: "absolute",
  },
  kgTypo: {
    fontFamily: FontFamily.caption2Regular11,
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  profileSetUp: {
    top: 145,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
    textAlign: "left",
    color: Color.globalBlack,
    left: 20,
    position: "absolute",
  },
  signUpPm2Child: {
    top: 47,
    left: 320,
    width: 46,
    height: 44,
    position: "absolute",
  },
  backChild: {
    top: 0,
    left: 0,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 39,
    width: 39,
    position: "absolute",
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
    top: 50,
    height: 39,
    width: 39,
    left: 20,
    position: "absolute",
  },
  title: {
    fontFamily: FontFamily.h3Regular,
  },
  text: {
    display: "none",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    display: "none",
    overflow: "hidden",
  },
  inputField: {
    marginTop: 6,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    height: 56,
    width: 353,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  error: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 16,
    fontWeight: "500",
    color: Color.colorCrimson_100,
    display: "none",
    marginTop: 6,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  input: {
    top: 206,
    left: 20,
    position: "absolute",
  },
  inputField1: {
    marginTop: 6,
    height: 56,
    justifyContent: "flex-end",
  },
  input1: {
    top: 308,
    left: 20,
  },
  input2: {
    top: 410,
    left: 20,
  },
  selectYourPostpartum: {
    width: 288,
    lineHeight: 22,
    fontFamily: FontFamily.h3Regular,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
  },
  text3: {
    marginLeft: 10,
    display: "none",
  },
  icon4: {
    height: "100%",
    width: "100%",
  },
  iconArrowFullDown: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  inputField3: {
    top: 538,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  inputField4: {
    top: 651,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  yourPostpartumStage: {
    top: 512,
    fontFamily: FontFamily.h3Regular,
    left: 20,
    position: "absolute",
  },
  lactationStatus: {
    top: 625,
    display: "flex",
    alignItems: "flex-end",
    width: 159,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
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
    top: 737,
    left: 21,
    backgroundColor: Color.main,
    height: 60,
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    justifyContent: "center",
    borderRadius: Border.br_3xs,
  },
  kg: {
    top: 451,
    left: 341,
  },
  cm: {
    top: 349,
    left: 335,
  },
  signUpPm2: {
    borderRadius: Border.br_11xl,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default SignUpPM2;
