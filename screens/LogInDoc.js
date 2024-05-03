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
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const LogInDoc = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.logInDoc}
      onPress={() => navigation.navigate("DashboardDoc")}
    >
      <ImageBackground
        style={styles.imgIcon}
        resizeMode="cover"
        source={require("../assets/img14.png")}
      >
        <View style={[styles.juice, styles.juicePosition]} />
        <View style={[styles.juice1, styles.juicePosition]} />
      </ImageBackground>
      <Image
        style={styles.image296Icon}
        contentFit="cover"
        source={require("../assets/image-297.png")}
      />
      <Text style={styles.hiWelcome}>Hi, Welcome!</Text>
      <Pressable
        style={styles.dontHaveAnContainer}
        onPress={() => navigation.navigate("SignUpDoc")}
      >
        <Text style={styles.textTypo}>
          <Text style={styles.dontHaveAnAccount}>
            <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={[styles.signUp1, styles.buttonTypo]}>Sign up</Text>
          </Text>
        </Text>
      </Pressable>
      <View style={styles.input}>
        <Text style={[styles.title, styles.textTypo]}>Email address</Text>
        <View style={[styles.inputField, styles.inputBorder]}>
          <Text style={styles.text2}>Your email</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.input1, styles.input1Position]}>
        <Text style={[styles.title, styles.textTypo]}>Password</Text>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={styles.text2}>Password</Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <Text style={[styles.rememberMe, styles.rememberMePosition]}>
        Remember me
      </Text>
      <Pressable
        style={[styles.forgotPassword, styles.rememberMePosition]}
        onPress={() => navigation.navigate("ResetPasswordDoc")}
      >
        <Text style={[styles.forgotPassword1, styles.textTypo]}>
          Forgot password?
        </Text>
      </Pressable>
      <Image
        style={styles.checkboxOn}
        contentFit="cover"
        source={require("../assets/checkbox--on.png")}
      />
      <Pressable
        style={[styles.buttonPrimary, styles.input1Position]}
        onPress={() => navigation.navigate("DashboardDoc")}
      >
        <Text style={[styles.button, styles.buttonTypo]}>Log in</Text>
      </Pressable>
      <View style={[styles.tab, styles.tabLayout]}>
        <View style={[styles.tabChild, styles.tabChildPosition]} />
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("LogInPM")}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.postpartumMother, styles.tabChildPosition]}>
            Postpartum Mother
          </Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.practitioner, styles.buttonTypo]}>
          {" "}
          Practitioner
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  juicePosition: {
    top: "50%",
    position: "absolute",
  },
  buttonTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.h3Regular,
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
  },
  inputBorder: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  iconLayout: {
    marginLeft: 10,
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  input1Position: {
    justifyContent: "center",
    left: 20,
    position: "absolute",
  },
  rememberMePosition: {
    top: 624,
    position: "absolute",
  },
  tabLayout: {
    height: 36,
    width: 353,
    position: "absolute",
  },
  tabChildPosition: {
    left: 0,
    top: 0,
  },
  groupLayout: {
    width: 172,
    height: 30,
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
  imgIcon: {
    left: -71,
    borderRadius: Border.br_12xs,
    width: 464,
    height: 282,
    opacity: 0.5,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  image296Icon: {
    top: 300,
    left: 232,
    width: 30,
    height: 30,
    position: "absolute",
  },
  hiWelcome: {
    top: 294,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    textAlign: "left",
    color: Color.globalBlack,
    left: 18,
    position: "absolute",
  },
  dontHaveAn: {
    color: Color.baseShade70,
  },
  text1: {
    color: Color.globalBlack,
  },
  dontHaveAnAccount: {
    fontFamily: FontFamily.h3Regular,
  },
  signUp1: {
    textDecoration: "underline",
  },
  dontHaveAnContainer: {
    left: 91,
    top: 786,
    position: "absolute",
  },
  title: {
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
  },
  text2: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.colorGray_800,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    flex: 1,
  },
  icon: {
    display: "none",
  },
  inputField: {
    marginTop: 6,
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
    top: 426,
    left: 20,
    position: "absolute",
  },
  inputField1: {
    justifyContent: "flex-end",
    marginTop: 6,
  },
  input1: {
    top: 528,
  },
  rememberMe: {
    left: 57,
    fontFamily: FontFamily.h3Regular,
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
  },
  forgotPassword1: {
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
  },
  forgotPassword: {
    left: 254,
  },
  checkboxOn: {
    top: 622,
    left: 28,
    height: 20,
    width: 20,
    position: "absolute",
  },
  button: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    color: Color.white,
    textAlign: "center",
  },
  buttonPrimary: {
    top: 690,
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
  tabChild: {
    backgroundColor: Color.wrong,
    height: 36,
    width: 353,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  groupChild: {
    top: -6,
    left: -57,
    display: "none",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 172,
  },
  postpartumMother: {
    fontWeight: "600",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  rectangleParent: {
    top: 9,
    left: 37,
    width: 133,
    height: 18,
    position: "absolute",
  },
  tab: {
    top: 351,
    left: 18,
  },
  groupItem: {
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 172,
  },
  practitioner: {
    top: 6,
    left: 44,
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
  },
  rectangleGroup: {
    top: 354,
    left: 195,
  },
  logInDoc: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default LogInDoc;
