import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const SignUpPM5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpPm5}>
      <Text style={styles.profileSetUp}>Profile Set Up</Text>
      <Image
        style={styles.signUpPm5Child}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <View style={[styles.input, styles.inputPosition]}>
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
      <View style={[styles.input1, styles.inputPosition]}>
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
      <View style={[styles.input2, styles.inputPosition]}>
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
      <Pressable
        style={[styles.buttonPrimary, styles.inputField5Position]}
        onPress={() => navigation.navigate("DashboardPM")}
      >
        <Text style={styles.button}>Save</Text>
      </Pressable>
      <View
        style={[styles.yourPostpartumStageWrapper, styles.inputField5Position]}
      >
        <Text style={[styles.yourPostpartumStage, styles.titleTypo]}>
          Your Postpartum Stage
        </Text>
      </View>
      <Text style={[styles.kg, styles.kgTypo]}>kg</Text>
      <Text style={[styles.kg, styles.kgTypo]}>kg</Text>
      <View style={[styles.inputField3, styles.inputBorder]}>
        <Text style={[styles.selectYourPostpartum, styles.textTypo]}>
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
          source={require("../assets/icon--arrow-full-down.png")}
        />
      </View>
      <Text style={[styles.cm, styles.kgTypo]}>cm</Text>
      <View style={[styles.inputField3, styles.inputBorder]}>
        <Text style={[styles.selectYourPostpartum, styles.textTypo]}>
          2 - 6 Months
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
          source={require("../assets/icon--arrow-full-down.png")}
        />
      </View>
      <Pressable
        style={[styles.inputField5, styles.inputField5Position]}
        onPress={() => navigation.navigate("SignUpPM1")}
      >
        <Text style={[styles.selectYourPostpartum, styles.textTypo]}>
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
          source={require("../assets/icon--arrow-full-down.png")}
        />
      </Pressable>
      <Text
        style={[styles.lactationStatus, styles.inputField5Position]}
      >{`Lactation Status `}</Text>
      <Text style={[styles.text6, styles.textTypo]}>{`31 `}</Text>
      <Text style={[styles.text7, styles.textTypo]}>160</Text>
      <Text style={[styles.text8, styles.textTypo]}>{`52 `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
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
    width: 353,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  inputField5Position: {
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
  textTypo: {
    lineHeight: 22,
    fontFamily: FontFamily.h3Regular,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
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
  signUpPm5Child: {
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
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    height: 56,
    width: 353,
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
    top: 742,
    backgroundColor: Color.main,
    height: 60,
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
    left: 22,
  },
  yourPostpartumStage: {
    top: 0,
    left: 0,
    fontFamily: FontFamily.h3Regular,
    position: "absolute",
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
  selectYourPostpartum: {
    width: 288,
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
    top: 552,
    left: 20,
    position: "absolute",
  },
  cm: {
    top: 349,
    left: 325,
  },
  inputField5: {
    top: 660,
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
  lactationStatus: {
    top: 634,
    display: "flex",
    alignItems: "flex-end",
    width: 159,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
  },
  text6: {
    top: 247,
    left: 42,
    width: 223,
    position: "absolute",
  },
  text7: {
    top: 348,
    left: 41,
    width: 226,
    position: "absolute",
  },
  text8: {
    top: 451,
    left: 43,
    width: 156,
    position: "absolute",
  },
  signUpPm5: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default SignUpPM5;
