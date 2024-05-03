import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const EditProfileDoc = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileDoc}>
      <Text style={[styles.editProfile, styles.titleClr]}>Edit Profile</Text>
      <View style={[styles.buttonPrimary, styles.buttonFlexBox]}>
        <Text style={styles.button}>Save Changes</Text>
      </View>
      <Pressable
        style={[styles.buttonPrimary1, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("ProfileDoc")}
      >
        <Text style={styles.button}>Save Changes</Text>
      </Pressable>
      <View style={[styles.wrapper, styles.viewLayout]}>
        <View style={[styles.view, styles.viewPosition]}>
          <View style={[styles.input, styles.viewPosition]}>
            <Text style={[styles.title, styles.titleClr]}>Contact Number</Text>
            <View style={[styles.inputField, styles.inputLayout]}>
              <Text style={styles.text}>must be 8 characters</Text>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/icon1.png")}
              />
            </View>
            <Text style={styles.error}>Error</Text>
          </View>
          <Text style={[styles.text1, styles.titleClr]}>+ 94</Text>
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/group-711.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("ProfileDoc")}
      >
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <Image
        style={styles.editProfileDocChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <View style={styles.input1}>
        <Text style={[styles.title, styles.titleClr]}>Specialization</Text>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <Text style={styles.text}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={styles.input2}>
        <Text style={[styles.title, styles.titleClr]}>Experience</Text>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <Text style={styles.text}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={styles.input3}>
        <Text style={[styles.title, styles.titleClr]}>Availability</Text>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <Text style={styles.text}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={styles.input4}>
        <Text style={[styles.title, styles.titleClr]}>
          Full Name with Title
        </Text>
        <View style={[styles.inputField, styles.inputLayout]}>
          <Text style={styles.text}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.input, styles.viewPosition]}>
          <Text style={[styles.title, styles.titleClr]}>Contact Number</Text>
          <View style={[styles.inputField, styles.inputLayout]}>
            <Text style={styles.text}>must be 8 characters</Text>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
          </View>
          <Text style={styles.error}>Error</Text>
        </View>
        <Text style={[styles.text1, styles.titleClr]}>+ 44</Text>
        <Image
          style={styles.unitedKingdomIcon}
          contentFit="cover"
          source={require("../assets/group-71.png")}
        />
      </View>
      <View style={styles.input6}>
        <Text style={[styles.title, styles.titleClr]}>Your Age</Text>
        <View style={[styles.inputField1, styles.inputLayout]}>
          <Text style={styles.text}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <Pressable
        style={styles.iconArrowFullDown}
        onPress={() => navigation.navigate("EditProfileDoc1")}
      >
        <Image
          style={styles.icon7}
          contentFit="cover"
          source={require("../assets/icon--arrow-full-down1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  titleClr: {
    color: Color.globalBlack,
    textAlign: "left",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_133xl,
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    width: 353,
    backgroundColor: Color.main,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
    position: "absolute",
  },
  viewLayout: {
    height: 80,
    width: 353,
  },
  viewPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputLayout: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    height: 56,
    marginTop: 6,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  backLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  editProfile: {
    top: 96,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
    textAlign: "left",
    left: 24,
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
    top: 879,
    left: 20,
  },
  buttonPrimary1: {
    top: 736,
    left: 24,
  },
  title: {
    fontSize: FontSize.body1Medium_size,
    lineHeight: 18,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  text: {
    flex: 1,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    color: Color.colorGray_800,
    display: "none",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    display: "none",
    overflow: "hidden",
  },
  inputField: {
    justifyContent: "flex-end",
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
    justifyContent: "center",
  },
  text1: {
    top: 41,
    left: 73,
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    fontFamily: FontFamily.caption2Regular11,
    textAlign: "left",
    position: "absolute",
  },
  child: {
    height: "34.75%",
    width: "9.69%",
    top: "48.75%",
    right: "84.36%",
    bottom: "16.5%",
    left: "5.95%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  view: {
    height: 80,
    width: 353,
  },
  wrapper: {
    top: 405,
    left: -2379,
    position: "absolute",
  },
  backChild: {
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    height: 39,
    width: 39,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
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
    top: 38,
    left: 18,
  },
  editProfileDocChild: {
    top: 36,
    left: 325,
    width: 46,
    height: 44,
    position: "absolute",
  },
  inputField1: {
    marginTop: 6,
  },
  input1: {
    top: 346,
    left: 24,
    position: "absolute",
  },
  input2: {
    top: 443,
    left: 24,
    position: "absolute",
  },
  input3: {
    top: 532,
    left: 24,
    position: "absolute",
  },
  input4: {
    top: 162,
    justifyContent: "center",
    left: 24,
    position: "absolute",
  },
  unitedKingdomIcon: {
    top: 39,
    left: 21,
    width: 34,
    height: 28,
    position: "absolute",
  },
  view1: {
    top: 634,
    left: 24,
    position: "absolute",
  },
  input6: {
    top: 257,
    left: 24,
    position: "absolute",
  },
  icon7: {
    width: "100%",
    height: "100%",
  },
  iconArrowFullDown: {
    left: 339,
    top: 572,
    width: 24,
    height: 24,
    position: "absolute",
  },
  editProfileDoc: {
    borderRadius: Border.br_11xl,
    width: 393,
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default EditProfileDoc;
