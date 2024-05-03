import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const SignUpDoc1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpDoc}>
      <Text style={[styles.profileSetUp, styles.titleClr]}>Profile Set Up</Text>
      <Image
        style={styles.signUpDocChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <View style={styles.input}>
        <Text style={[styles.title, styles.titleClr]}>Specialization</Text>
        <View style={[styles.inputField, styles.inputLayout]}>
          <Text style={styles.text}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={styles.input1}>
        <Text style={[styles.title, styles.titleClr]}>Experience</Text>
        <View style={[styles.inputField, styles.inputLayout]}>
          <Text style={styles.text}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.input2, styles.inputFlexBox]}>
        <Text style={[styles.title, styles.titleClr]}>
          Full Name with Title
        </Text>
        <View style={[styles.inputField2, styles.inputLayout]}>
          <Text style={styles.text}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <Pressable
        style={[styles.buttonPrimary, styles.inputFlexBox]}
        onPress={() => navigation.navigate("DashboardDoc")}
      >
        <Text style={styles.button}>Save</Text>
      </Pressable>
      <View style={styles.view}>
        <View style={[styles.input3, styles.inputFlexBox]}>
          <Text style={[styles.title, styles.titleClr]}>Contact Number</Text>
          <View style={[styles.inputField2, styles.inputLayout]}>
            <Text style={styles.text}>must be 8 characters</Text>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
          </View>
          <Text style={styles.error}>Error</Text>
        </View>
        <Text style={[styles.text4, styles.titleClr]}>+ 44</Text>
        <Image
          style={styles.child}
          contentFit="cover"
          source={require("../assets/group-71.png")}
        />
      </View>
      <View style={styles.input4}>
        <Text style={[styles.title, styles.titleClr]}>Your Age</Text>
        <View style={[styles.inputField, styles.inputLayout]}>
          <Text style={styles.text}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleClr: {
    color: Color.globalBlack,
    textAlign: "left",
  },
  inputLayout: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    height: 56,
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
  inputFlexBox: {
    justifyContent: "center",
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
    left: 20,
    position: "absolute",
  },
  signUpDocChild: {
    top: 47,
    left: 320,
    width: 46,
    height: 44,
    position: "absolute",
  },
  title: {
    fontSize: FontSize.body1Medium_size,
    lineHeight: 18,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  text: {
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.colorGray_800,
    display: "none",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    flex: 1,
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
    top: 389,
    left: 20,
    position: "absolute",
  },
  input1: {
    top: 486,
    left: 20,
    position: "absolute",
  },
  inputField2: {
    justifyContent: "flex-end",
    marginTop: 6,
  },
  input2: {
    top: 205,
    left: 20,
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
    top: 741,
    backgroundColor: Color.main,
    height: 60,
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    width: 353,
    left: 20,
  },
  input3: {
    top: 0,
    left: 0,
  },
  text4: {
    top: 41,
    left: 73,
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    fontFamily: FontFamily.caption2Regular11,
    textAlign: "left",
    position: "absolute",
  },
  child: {
    top: 39,
    left: 21,
    width: 34,
    height: 28,
    position: "absolute",
  },
  view: {
    top: 583,
    height: 80,
    width: 353,
    left: 20,
    position: "absolute",
  },
  input4: {
    top: 295,
    left: 20,
    position: "absolute",
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

export default SignUpDoc1;
