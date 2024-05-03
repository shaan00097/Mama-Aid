import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";

const SignUpDoc = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpDoc}>
      <Text style={[styles.createAccount, styles.inputPosition]}>
        Create account
      </Text>
      <Text style={[styles.iAcceptThe, styles.textTypo1]}>
        I accept the terms and privacy policy
      </Text>
      <Image
        style={styles.signUpDocChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <Pressable
        style={styles.alreadyHaveAnContainer}
        onPress={() => navigation.navigate("LogInDoc")}
      >
        <Text style={styles.textTypo1}>
          <Text style={styles.alreadyHaveAnAccount}>
            <Text
              style={styles.alreadyHaveAn}
            >{`Already have an account? `}</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={[styles.logIn1, styles.logIn1Typo]}>Log in</Text>
          </Text>
        </Text>
      </Pressable>
      <View style={[styles.input, styles.inputPosition]}>
        <Text style={[styles.title, styles.textTypo1]}>Name</Text>
        <View style={[styles.inputField, styles.inputBorder]}>
          <Text style={[styles.text2, styles.textTypo]}>Your username</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.input1, styles.inputPosition]}>
        <Text style={[styles.title, styles.textTypo1]}>Email</Text>
        <View style={[styles.inputField, styles.inputBorder]}>
          <Text style={[styles.text2, styles.textTypo]}>Your email</Text>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.input2, styles.inputPosition]}>
        <Text style={[styles.title, styles.textTypo1]}>Password</Text>
        <View style={[styles.inputField2, styles.inputBorder]}>
          <Text style={[styles.text4, styles.textTypo]}>Your email</Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <Image
        style={styles.signUpDocItem}
        contentFit="cover"
        source={require("../assets/group-36690.png")}
      />
      <Image
        style={styles.checkboxOn}
        contentFit="cover"
        source={require("../assets/checkbox--on.png")}
      />
      <Pressable
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("SignUpDoc1")}
      >
        <Text style={[styles.button, styles.logIn1Typo]}>Sign Up</Text>
      </Pressable>
      <View style={[styles.tab, styles.tabLayout]}>
        <View style={[styles.tabChild, styles.tabChildPosition]} />
        <View style={styles.rectangleParent}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.postpartumMother, styles.tabChildPosition]}>
            Postpartum Mother
          </Text>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.practitioner, styles.logIn1Typo]}>
          {" "}
          Practitioner
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
    left: 20,
    position: "absolute",
  },
  textTypo1: {
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
  },
  logIn1Typo: {
    fontWeight: "600",
    fontFamily: FontFamily.h3Regular,
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
  textTypo: {
    color: Color.colorGray_800,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.h3Regular,
    flex: 1,
  },
  iconLayout: {
    marginLeft: 10,
    height: 20,
    width: 20,
    overflow: "hidden",
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
    height: 30,
    width: 172,
    position: "absolute",
  },
  createAccount: {
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
  iAcceptThe: {
    top: 582,
    left: 52,
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
    position: "absolute",
  },
  signUpDocChild: {
    top: 47,
    left: 320,
    width: 46,
    height: 44,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.baseShade70,
  },
  text1: {
    color: Color.globalBlack,
  },
  alreadyHaveAnAccount: {
    fontFamily: FontFamily.h3Regular,
  },
  logIn1: {
    textDecoration: "underline",
  },
  alreadyHaveAnContainer: {
    left: 87,
    top: 788,
    position: "absolute",
  },
  title: {
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
  },
  text2: {
    textAlign: "left",
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
    top: 273,
  },
  input1: {
    top: 375,
  },
  text4: {
    textAlign: "right",
    display: "none",
  },
  inputField2: {
    justifyContent: "flex-end",
    marginTop: 6,
  },
  input2: {
    top: 477,
  },
  signUpDocItem: {
    top: 526,
    left: 36,
    width: 76,
    height: 6,
    position: "absolute",
  },
  checkboxOn: {
    top: 581,
    height: 20,
    width: 20,
    left: 20,
    position: "absolute",
  },
  button: {
    fontSize: FontSize.h5Semibold_size,
    lineHeight: 25,
    color: Color.white,
    textAlign: "center",
  },
  buttonPrimary: {
    top: 639,
    backgroundColor: Color.main,
    height: 60,
    justifyContent: "center",
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
    left: 20,
    position: "absolute",
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
    top: 213,
    left: 13,
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
    top: 216,
    left: 190,
  },
  signUpDoc: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default SignUpDoc;
