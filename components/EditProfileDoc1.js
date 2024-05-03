import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const EditProfileDoc1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfileDoc}>
      <Text style={styles.editProfile}>Edit Profile</Text>
      <Pressable
        style={styles.buttonPrimary}
        onPress={() => navigation.navigate("ProfileDoc")}
      >
        <Text style={styles.button}>Save Changes</Text>
      </Pressable>
      <View style={[styles.wrapper, styles.viewLayout]}>
        <View style={[styles.view, styles.inputPosition]}>
          <View style={[styles.input, styles.inputPosition]}>
            <Text style={styles.title}>Contact Number</Text>
            <View style={[styles.inputField, styles.inputBorder]}>
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
          <Text style={styles.text1}>+ 94</Text>
          <Image
            style={styles.child}
            contentFit="cover"
            source={require("../assets/group-711.png")}
          />
        </View>
      </View>
      <Image
        style={styles.editProfileDocChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
      <View style={styles.input1}>
        <Text style={styles.title}>Specialization</Text>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo]}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={styles.input2}>
        <Text style={styles.title}>Experience</Text>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo]}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={styles.input3}>
        <Text style={styles.title}>Availability</Text>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo]}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={styles.input4}>
        <Text style={styles.title}>Full Name with Title</Text>
        <View style={[styles.inputField, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo]}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon1.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.view1, styles.viewLayout]}>
        <View style={[styles.input, styles.inputPosition]}>
          <Text style={styles.title}>Contact Number</Text>
          <View style={[styles.inputField, styles.inputBorder]}>
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
        <Text style={styles.text1}>+ 44</Text>
        <Image
          style={styles.item}
          contentFit="cover"
          source={require("../assets/group-71.png")}
        />
      </View>
      <View style={styles.input6}>
        <Text style={styles.title}>Your Age</Text>
        <View style={[styles.inputField1, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo]}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <Image
        style={[styles.iconArrowFullDown, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon--arrow-full-down1.png")}
      />
      <View style={[styles.inputFieldParent, styles.inputLayout]}>
        <View style={[styles.inputField7, styles.inputBorder]}>
          <Text style={styles.selectYourPostpartum}>
            Select your Postpartum Stage
          </Text>
          <Text style={[styles.text9, styles.textTypo]}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <Image
            style={[styles.iconArrowFullDown1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--arrow-full-down.png")}
          />
        </View>
        <View style={[styles.inputField8, styles.inputLayout]}>
          <Text style={[styles.text, styles.textTypo]}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
        <Text style={[styles.am1000, styles.pm530Typo]}>
          08:00 am - 10:00 am
        </Text>
        <Text style={[styles.pm530, styles.pm530Typo]}>3.30 pm - 5.30 pm</Text>
        <View style={[styles.inputField7, styles.inputBorder]}>
          <Text style={styles.selectYourPostpartum}>
            Update your availability
          </Text>
          <Text style={[styles.text9, styles.textTypo]}>repeat password</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon2.png")}
          />
          <Image
            style={[styles.iconArrowFullDown1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon--arrow-full-down3.png")}
          />
        </View>
        <Pressable
          style={styles.frameChild}
          onPress={() => navigation.navigate("EditProfileDoc2")}
        />
        <Text style={[styles.am1200, styles.pm530Typo]}>
          10:00 am - 12:00 noon
        </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    height: 80,
    width: 353,
  },
  inputPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputBorder: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
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
    flex: 1,
    display: "none",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  inputLayout: {
    height: 170,
    width: 353,
    position: "absolute",
  },
  pm530Typo: {
    left: 15,
    width: 288,
    lineHeight: 22,
    fontSize: FontSize.body1Medium_size,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    color: Color.globalBlack,
    position: "absolute",
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
    color: Color.globalBlack,
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
    top: 864,
    backgroundColor: Color.main,
    height: 60,
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderRadius: Border.br_3xs,
    left: 24,
    position: "absolute",
  },
  title: {
    lineHeight: 18,
    fontSize: FontSize.body1Medium_size,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    color: Color.globalBlack,
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
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
    height: 56,
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
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 22,
    textAlign: "left",
    color: Color.globalBlack,
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
  editProfileDocChild: {
    top: 36,
    left: 325,
    width: 46,
    height: 44,
    position: "absolute",
  },
  inputField1: {
    marginTop: 6,
    height: 56,
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
  item: {
    top: 39,
    left: 21,
    width: 34,
    height: 28,
    position: "absolute",
  },
  view1: {
    top: 751,
    left: 24,
    position: "absolute",
  },
  input6: {
    top: 257,
    left: 24,
    position: "absolute",
  },
  iconArrowFullDown: {
    top: 572,
    left: 339,
    position: "absolute",
  },
  selectYourPostpartum: {
    width: 288,
    lineHeight: 22,
    fontSize: FontSize.body1Medium_size,
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
    color: Color.globalBlack,
  },
  text9: {
    marginLeft: 10,
    display: "none",
  },
  iconArrowFullDown1: {
    marginLeft: 10,
  },
  inputField7: {
    justifyContent: "flex-end",
    paddingVertical: Padding.p_lg,
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputField8: {
    paddingTop: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    height: 170,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    left: 0,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  am1000: {
    top: 63,
  },
  pm530: {
    top: 137,
  },
  frameChild: {
    height: "22.35%",
    width: "94.62%",
    top: "54.12%",
    right: "3.68%",
    bottom: "23.53%",
    left: "1.7%",
    borderRadius: Border.br_2xs,
    backgroundColor: Color.wrong,
    position: "absolute",
  },
  am1200: {
    top: 100,
  },
  inputFieldParent: {
    top: 556,
    left: 24,
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
    left: 22,
  },
  editProfileDoc: {
    borderRadius: Border.br_11xl,
    width: 393,
    height: 961,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default EditProfileDoc1;
