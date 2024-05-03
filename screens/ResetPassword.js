import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const ResetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resetPassword}>
      <Text style={[styles.resetPassword1, styles.resetPassword1Position]}>
        Reset password
      </Text>
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("LogInPM")}
      >
        <Text style={styles.textTypo}>
          <Text
            style={styles.alreadyHaveAn}
          >{`Already have an account? `}</Text>
          <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
        </Text>
      </Pressable>
      <Image
        style={styles.resetPasswordChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <Pressable
        style={styles.back}
        onPress={() => navigation.navigate("LogInPM")}
      >
        <View style={[styles.backChild, styles.backChildBorder]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <Text style={[styles.pleaseTypeSomething, styles.text1Typo]}>
        Please type something you’ll remember
      </Text>
      <View style={[styles.input, styles.inputPosition]}>
        <Text style={[styles.title, styles.textTypo]}>New password</Text>
        <View style={[styles.inputField, styles.inputFieldFlexBox]}>
          <Text style={[styles.text1, styles.text1Typo]}>
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
      <View style={[styles.input1, styles.inputPosition]}>
        <Text style={[styles.title, styles.textTypo]}>
          Confirm new password
        </Text>
        <View style={[styles.inputField, styles.inputFieldFlexBox]}>
          <Text style={[styles.text1, styles.text1Typo]}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <Pressable
        style={[styles.buttonPrimary, styles.inputFieldFlexBox]}
        onPress={() => navigation.navigate("PasswordChanged")}
      >
        <Text style={[styles.button, styles.logInTypo]}>Reset Password</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  resetPassword1Position: {
    left: 20,
    position: "absolute",
  },
  logInTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.h3Regular,
  },
  backChildBorder: {
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  text1Typo: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  inputPosition: {
    justifyContent: "center",
    left: 20,
    position: "absolute",
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
  },
  inputFieldFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
  },
  resetPassword1: {
    top: 145,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
    textAlign: "left",
    color: Color.globalBlack,
  },
  alreadyHaveAn: {
    color: Color.baseShade70,
    fontFamily: FontFamily.h3Regular,
  },
  logIn: {
    color: Color.globalBlack,
  },
  alreadyHaveAnContainer: {
    left: 89,
    top: 786,
    position: "absolute",
  },
  resetPasswordChild: {
    top: 47,
    left: 320,
    width: 46,
    height: 44,
    position: "absolute",
  },
  backChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
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
  pleaseTypeSomething: {
    top: 197,
    display: "flex",
    alignItems: "flex-end",
    width: 346,
    color: Color.baseShade70,
    left: 20,
    position: "absolute",
  },
  title: {
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
  },
  text1: {
    color: Color.colorGray_800,
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    overflow: "hidden",
  },
  inputField: {
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_lg,
    marginTop: 6,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
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
    top: 255,
  },
  input1: {
    top: 357,
  },
  button: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    color: Color.white,
    textAlign: "center",
  },
  buttonPrimary: {
    top: 475,
    backgroundColor: Color.main,
    height: 60,
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    left: 20,
    position: "absolute",
  },
  resetPassword: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default ResetPassword;
