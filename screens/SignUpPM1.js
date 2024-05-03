import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const SignUpPM1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.signUpPm7, styles.icon8Layout]}>
      <Text style={styles.profileSetUp}>Profile Set Up</Text>
      <Image
        style={styles.signUpPm7Child}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <View style={[styles.input, styles.inputPosition2]}>
        <Text style={[styles.title, styles.titleTypo]}>Your Age</Text>
        <View style={styles.inputField}>
          <Text style={[styles.text, styles.textTypo1]}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.input1, styles.inputPosition2]}>
        <Text style={[styles.title, styles.titleTypo]}>Your Height</Text>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo1]}>
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
      <View style={[styles.input2, styles.inputPosition2]}>
        <Text style={[styles.title, styles.titleTypo]}>Your Weight</Text>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo1]}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.buttonPrimary, styles.inputField4Position]}>
        <Text style={styles.button}>Save</Text>
      </View>
      <View
        style={[styles.yourPostpartumStageWrapper, styles.inputField4Position]}
      >
        <Text style={[styles.yourPostpartumStage, styles.inputPosition1]}>
          Your Postpartum Stage
        </Text>
      </View>
      <Text style={[styles.kg, styles.kgTypo]}>kg</Text>
      <Text style={[styles.kg, styles.kgTypo]}>kg</Text>
      <Text style={[styles.cm, styles.kgTypo]}>cm</Text>
      <View style={[styles.inputField3, styles.inputPosition]}>
        <Text style={styles.selectYourLactation}>
          Select your Lactation Status
        </Text>
        <Text style={[styles.text3, styles.textTypo1]}>repeat password</Text>
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
      <Text
        style={[styles.lactationStatus, styles.titleTypo]}
      >{`Lactation Status `}</Text>
      <View style={[styles.inputField4, styles.inputField4Position]}>
        <Text style={styles.selectYourLactation}>2 - 6 Months</Text>
        <Text style={[styles.text3, styles.textTypo1]}>repeat password</Text>
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
      <View style={[styles.inputFieldParent, styles.inputPosition]}>
        <View style={[styles.inputField5, styles.inputPosition1]}>
          <Text style={styles.selectYourLactation}>
            Select your Postpartum Stage
          </Text>
          <Text style={[styles.text3, styles.textTypo1]}>repeat password</Text>
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
        <View style={[styles.inputField6, styles.inputPosition1]}>
          <Text style={[styles.text, styles.textTypo1]}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon5.png")}
          />
        </View>
        <Text style={[styles.first6Months, styles.monthsTypo]}>
          First 6 Months
        </Text>
        <Text style={[styles.after6Months, styles.monthsTypo]}>
          After 6 Months
        </Text>
        <View style={[styles.inputField5, styles.inputPosition1]}>
          <Text style={styles.selectYourLactation}>
            Select your Lactation Status
          </Text>
          <Text style={[styles.text3, styles.textTypo1]}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <Image
            style={styles.iconArrowFullDown}
            contentFit="cover"
            source={require("../assets/icon--arrow-full-down3.png")}
          />
        </View>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("SignUpPM3")}
        >
          <Image
            style={[styles.icon8, styles.icon8Layout]}
            contentFit="cover"
            source={require("../assets/rectangle-2362.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.text8, styles.textTypo]}>{`31 `}</Text>
      <Text style={[styles.text9, styles.textTypo]}>160</Text>
      <Text style={styles.text10}>{`52 `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon8Layout: {
    width: "100%",
    overflow: "hidden",
  },
  inputPosition2: {
    left: 20,
    position: "absolute",
  },
  titleTypo: {
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    color: Color.globalBlack,
  },
  textTypo1: {
    color: Color.colorGray_800,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    display: "none",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    flex: 1,
  },
  inputBorder: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  inputField4Position: {
    left: 22,
    position: "absolute",
  },
  inputPosition1: {
    left: 0,
    top: 0,
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
  inputPosition: {
    top: 659,
    width: 353,
    left: 20,
    position: "absolute",
  },
  monthsTypo: {
    left: 15,
    width: 288,
    lineHeight: 22,
    fontFamily: FontFamily.h3Regular,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  textTypo: {
    left: 41,
    lineHeight: 22,
    fontFamily: FontFamily.h3Regular,
    fontSize: FontSize.body1Medium_size,
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
  signUpPm7Child: {
    top: 47,
    left: 320,
    width: 46,
    height: 44,
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
  },
  inputField1: {
    marginTop: 6,
    height: 56,
    justifyContent: "flex-end",
    width: 353,
  },
  input1: {
    top: 308,
    justifyContent: "center",
  },
  input2: {
    top: 410,
    justifyContent: "center",
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
    top: 862,
    backgroundColor: Color.main,
    height: 60,
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    left: 22,
    width: 353,
  },
  yourPostpartumStage: {
    fontFamily: FontFamily.h3Regular,
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
  },
  yourPostpartumStageWrapper: {
    top: 512,
    width: 154,
    height: 18,
  },
  kg: {
    top: 445,
    left: 331,
  },
  cm: {
    top: 349,
    left: 325,
  },
  selectYourLactation: {
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
  iconArrowFullDown: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  inputField3: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  lactationStatus: {
    top: 633,
    display: "flex",
    alignItems: "flex-end",
    width: 159,
    fontFamily: FontFamily.h3Regular,
    left: 20,
    position: "absolute",
  },
  inputField4: {
    top: 549,
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 353,
  },
  inputField5: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 353,
  },
  inputField6: {
    height: 141,
    paddingTop: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  first6Months: {
    top: 74,
  },
  after6Months: {
    top: 112,
  },
  icon8: {
    height: "100%",
    borderRadius: Border.br_2xs,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapper: {
    left: "1.42%",
    top: "36.87%",
    right: "3.97%",
    bottom: "40.78%",
    width: "94.62%",
    height: "22.35%",
    position: "absolute",
  },
  inputFieldParent: {
    height: 179,
  },
  text8: {
    top: 247,
    width: 223,
  },
  text9: {
    top: 348,
    width: 226,
  },
  text10: {
    top: 451,
    left: 43,
    width: 156,
    lineHeight: 22,
    fontFamily: FontFamily.h3Regular,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  signUpPm7: {
    borderRadius: Border.br_11xl,
    height: 980,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default SignUpPM1;
