import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const EditProfilePM = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.editProfilePm}>
      <View style={styles.input}>
        <Text style={[styles.title, styles.titleClr]}>Your Age</Text>
        <View style={[styles.inputField, styles.inputBorder]}>
          <Text style={[styles.text, styles.textTypo]}>example@gmail.com</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/eye--hide.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.input1, styles.inputFlexBox]}>
        <Text style={[styles.title, styles.titleClr]}>Your Height</Text>
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
        <Text style={[styles.title, styles.titleClr]}>Your Weight</Text>
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
      <View style={[styles.components, styles.componentsPosition]}>
        <View style={[styles.componentsInner, styles.frameParentBorder]}>
          <View style={styles.dropdownOptionsParent}>
            <Text style={[styles.dropdownOptions, styles.optionsLayout]}>
              Dropdown options
            </Text>
            <Image
              style={styles.remixIconslinesystemarrow}
              contentFit="cover"
              source={require("../assets/remixiconslinesystemarrowdownsline.png")}
            />
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameParentBorder]}>
          <View style={styles.options1Parent}>
            <Text style={[styles.options1, styles.optionsLayout]}>
              Options 1
            </Text>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
          </View>
          <View style={styles.options1Parent}>
            <Text style={[styles.options1, styles.optionsLayout]}>
              Options 2
            </Text>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
          </View>
          <View style={styles.options3Parent}>
            <Text style={[styles.options1, styles.optionsLayout]}>
              Options 3
            </Text>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
          </View>
          <View style={styles.options1Parent}>
            <Text style={[styles.options1, styles.optionsLayout]}>
              Options 4
            </Text>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
          </View>
          <View style={styles.options1Parent}>
            <Text style={[styles.options1, styles.optionsLayout]}>
              Options 5
            </Text>
            <View style={[styles.frameChild1, styles.frameChildLayout]} />
          </View>
        </View>
      </View>
      <Text style={[styles.yourPostpartumStage, styles.titleClr]}>
        Your Postpartum Stage
      </Text>
      <View style={[styles.components1, styles.componentsPosition]}>
        <View style={[styles.componentsInner, styles.frameParentBorder]}>
          <View style={styles.dropdownOptionsParent}>
            <Text style={[styles.dropdownOptions, styles.optionsLayout]}>
              Dropdown options
            </Text>
            <Image
              style={styles.remixIconslinesystemarrow}
              contentFit="cover"
              source={require("../assets/remixiconslinesystemarrowdownsline.png")}
            />
          </View>
        </View>
        <View style={[styles.frameParent, styles.frameParentBorder]}>
          <View style={styles.options1Parent}>
            <Text style={[styles.options1, styles.optionsLayout]}>
              Options 1
            </Text>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
          </View>
          <View style={styles.options1Parent}>
            <Text style={[styles.options1, styles.optionsLayout]}>
              Options 2
            </Text>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
          </View>
          <View style={styles.options3Parent}>
            <Text style={[styles.options1, styles.optionsLayout]}>
              Options 3
            </Text>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
          </View>
          <View style={styles.options1Parent}>
            <Text style={[styles.options1, styles.optionsLayout]}>
              Options 4
            </Text>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
          </View>
          <View style={styles.options1Parent}>
            <Text style={[styles.options1, styles.optionsLayout]}>
              Options 5
            </Text>
            <View style={[styles.frameChild1, styles.frameChildLayout]} />
          </View>
        </View>
      </View>
      <Text style={[styles.breastfeedingSituation, styles.titleClr]}>
        Breastfeeding Situation
      </Text>
      <View style={[styles.input3, styles.inputPosition]}>
        <Text style={[styles.title, styles.titleClr]}>Name</Text>
        <View style={[styles.inputField3, styles.inputBorder]}>
          <Text style={styles.textTypo}>Your username</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/eye--hide.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <View style={[styles.input4, styles.inputPosition]}>
        <Text style={[styles.title, styles.titleClr]}>Email</Text>
        <View style={[styles.inputField3, styles.inputBorder]}>
          <Text style={styles.textTypo}>Your email</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/eye--hide.png")}
          />
        </View>
        <Text style={styles.error}>Error</Text>
      </View>
      <Pressable
        style={[styles.back, styles.backLayout7]}
        onPress={() => navigation.navigate("ProfilePM")}
      >
        <View style={[styles.backChild, styles.backLayout7]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <Text style={[styles.editProfile, styles.titleClr]}>Edit Profile</Text>
      <Pressable
        style={[styles.buttonPrimary, styles.inputFlexBox]}
        onPress={() => navigation.navigate("ProfilePM")}
      >
        <Text style={styles.button}>Save Changes</Text>
      </Pressable>
      <Image
        style={styles.editProfilePmChild}
        contentFit="cover"
        source={require("../assets/star-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleClr: {
    color: Color.globalBlack,
    textAlign: "left",
  },
  inputBorder: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
    width: 353,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
  },
  textTypo: {
    color: Color.colorGray_800,
    lineHeight: 20,
    fontSize: FontSize.size_base,
    flex: 1,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
  },
  inputFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },
  componentsPosition: {
    height: 47,
    left: 22,
    position: "absolute",
  },
  frameParentBorder: {
    paddingHorizontal: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  optionsLayout: {
    lineHeight: 23,
    letterSpacing: 0,
    height: 23,
    textAlign: "left",
    color: Color.globalBlack,
  },
  frameChildLayout: {
    marginTop: 11.5,
    borderTopWidth: 1,
    height: 1,
    width: 181,
    borderStyle: "solid",
  },
  inputPosition: {
    left: 18,
    position: "absolute",
  },
  backLayout7: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  title: {
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 18,
    color: Color.globalBlack,
    fontSize: FontSize.body1Medium_size,
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
    height: 56,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
  },
  error: {
    fontSize: FontSize.footnoteRegular_size,
    lineHeight: 16,
    fontWeight: "500",
    color: Color.colorCrimson_100,
    display: "none",
    marginTop: 6,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
  },
  input: {
    top: 359,
    left: 22,
    position: "absolute",
  },
  inputField1: {
    justifyContent: "flex-end",
    marginTop: 6,
    height: 56,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_base,
  },
  input1: {
    top: 461,
    left: 22,
  },
  input2: {
    top: 563,
    left: 22,
  },
  dropdownOptions: {
    width: 126,
    height: 23,
    fontFamily: FontFamily.h3Regular,
    fontSize: FontSize.body1Medium_size,
    letterSpacing: 0,
  },
  remixIconslinesystemarrow: {
    width: 23,
    height: 23,
    overflow: "hidden",
  },
  dropdownOptionsParent: {
    justifyContent: "space-between",
    width: 181,
    alignItems: "center",
    flexDirection: "row",
  },
  componentsInner: {
    paddingVertical: 12,
  },
  options1: {
    fontSize: FontSize.size_base_4,
    fontWeight: "300",
    fontFamily: FontFamily.caption2Regular11,
    width: 66,
    height: 23,
  },
  frameChild: {
    borderColor: Color.border,
    marginTop: 11.5,
    borderTopWidth: 1,
  },
  options1Parent: {
    height: 0,
    paddingTop: 12,
  },
  options3Parent: {
    height: 1,
    paddingTop: 12,
  },
  frameChild1: {
    borderColor: Color.colorSilver_200,
    display: "none",
  },
  frameParent: {
    height: 8,
    paddingTop: 4,
    paddingBottom: 12,
    opacity: 0,
    marginTop: 7.7,
  },
  components: {
    top: 692,
    width: 211,
  },
  yourPostpartumStage: {
    top: 666,
    left: 24,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 18,
    color: Color.globalBlack,
    fontSize: FontSize.body1Medium_size,
    position: "absolute",
  },
  components1: {
    top: 787,
    width: 218,
  },
  breastfeedingSituation: {
    top: 761,
    display: "flex",
    alignItems: "flex-end",
    width: 159,
    left: 24,
    textAlign: "left",
    fontFamily: FontFamily.h3Regular,
    lineHeight: 18,
    color: Color.globalBlack,
    fontSize: FontSize.body1Medium_size,
    position: "absolute",
  },
  inputField3: {
    marginTop: 6,
  },
  input3: {
    top: 154,
  },
  input4: {
    top: 256,
  },
  backChild: {
    top: 0,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 39,
    width: 39,
    borderColor: Color.border,
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
    left: 24,
  },
  editProfile: {
    top: 96,
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.textCaptionSemiBold,
    width: 339,
    left: 24,
    textAlign: "left",
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
  editProfilePmChild: {
    top: 43,
    left: 309,
    width: 46,
    height: 44,
    position: "absolute",
  },
  editProfilePm: {
    borderRadius: Border.br_11xl,
    width: 393,
    height: 987,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default EditProfilePM;
