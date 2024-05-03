import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const PPDTestResults = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.ppdTestResults, styles.tabBarBg]}>
      <View style={styles.frameParent}>
        <View style={styles.epdsPostpartumDepressionTWrapper}>
          <Text style={[styles.epdsPostpartum, styles.textTypo3]}>
            EPDS : Postpartum Depression Test
          </Text>
        </View>
        <View style={[styles.groupParent, styles.groupFlexBox]}>
          <View style={styles.groupLayout}>
            <View style={[styles.groupWrapper, styles.groupChildPosition]}>
              <View style={styles.groupContainer}>
                <View style={[styles.parent, styles.textPosition]}>
                  <Text style={[styles.text, styles.textLayout]}>11</Text>
                  <Text style={[styles.text1, styles.textTypo]}>/</Text>
                  <Text style={[styles.text2, styles.textTypo]}>30</Text>
                </View>
                <Text style={[styles.yourScore, styles.textTypo]}>
                  Your Score
                </Text>
              </View>
            </View>
            <Image
              style={[styles.groupChild, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-12.png")}
            />
          </View>
          <Text style={styles.yourResultSuggestContainer}>
            <Text
              style={styles.yourResultSuggest}
            >{`Your result suggest you may be suffering from `}</Text>
            <Text style={styles.moderatePostpartumDepression}>
              moderate postpartum depression
            </Text>
          </Text>
        </View>
      </View>
      <View style={[styles.image4, styles.imageLayout]} />
      <View style={[styles.image5, styles.imageLayout]} />
      <Text style={[styles.quiz, styles.quizTypo]}> Quiz</Text>
      <Pressable
        style={[styles.back, styles.backLayout]}
        onPress={() => navigation.navigate("PPDTest")}
      >
        <View style={[styles.backChild, styles.backLayout]} />
        <Image
          style={styles.iconChevronleft}
          contentFit="cover"
          source={require("../assets/icon--chevronleft.png")}
        />
      </Pressable>
      <View style={styles.review}>
        <View style={styles.textField}>
          <View style={styles.content}>
            <Text style={[styles.label, styles.labelTypo]}>{`Next Steps !
`}</Text>
            <Text
              style={[styles.writeTextHere, styles.labelTypo]}
            >{`While this is not a diagnostic test, it may be worthwhile to start a conversation with your doctor or mental health professional. Finding
the right treatment plan can help you on the path toward feeling better.   It is also recommended that you monitor your symptoms by retaking this test once every two weeks.`}</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.buttonPrimary, styles.tabBarPosition]}
        onPress={() => navigation.navigate("PPDTestResources")}
      >
        <Text style={[styles.button, styles.textTypo2]}>View Resources</Text>
      </Pressable>
      <View style={[styles.doneWrapper, styles.tabSpaceBlock]}>
        <Pressable onPress={() => navigation.navigate("PPDTest")}>
          <Text style={[styles.done1, styles.quizTypo]}> Done</Text>
        </Pressable>
      </View>
      <View style={[styles.tabBar, styles.tabBarPosition]}>
        <Pressable
          style={[styles.tab, styles.tabSpaceBlock]}
          onPress={() => navigation.navigate("DashboardPM")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/home1.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
        </Pressable>
        <Pressable
          style={[styles.tab, styles.tabSpaceBlock]}
          onPress={() => navigation.navigate("PPDTest")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/iconoirshieldquestion4.png")}
          />
          <Text style={[styles.ppdScreening, styles.homeTypo]}>
            PPD Screening
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, styles.tabSpaceBlock]}
          onPress={() => navigation.navigate("InformationPage")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/micircleinformation.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Information</Text>
        </Pressable>
        <Pressable
          style={[styles.tab, styles.tabSpaceBlock]}
          onPress={() => navigation.navigate("ProfilePM")}
        >
          <Image
            style={styles.homeIcon}
            contentFit="cover"
            source={require("../assets/iconoirprofilecircle.png")}
          />
          <Text style={[styles.home, styles.homeTypo]}>Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarBg: {
    backgroundColor: Color.colorGray_100,
    overflow: "hidden",
  },
  textTypo3: {
    fontFamily: FontFamily.textCaptionSemiBold,
    color: Color.globalBlack,
  },
  groupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGray_100,
  },
  groupChildPosition: {
    top: 0,
    left: 0,
  },
  textPosition: {
    height: 26,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    width: 20,
    display: "flex",
    alignItems: "center",
  },
  textTypo: {
    opacity: 0.75,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
    position: "absolute",
  },
  imageLayout: {
    height: 962,
    width: 1282,
    position: "absolute",
  },
  quizTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.h3Regular,
    color: Color.globalBlack,
  },
  backLayout: {
    height: 39,
    width: 39,
    position: "absolute",
  },
  labelTypo: {
    fontSize: FontSize.bodyMedium_size,
    alignSelf: "stretch",
    fontFamily: FontFamily.h3Regular,
    textAlign: "left",
  },
  tabBarPosition: {
    left: 23,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textTypo2: {
    textAlign: "center",
    fontWeight: "600",
  },
  tabSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
  homeTypo: {
    marginTop: 7,
    fontFamily: FontFamily.caption2Regular11,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular11_size,
    letterSpacing: 0,
    textAlign: "center",
  },
  epdsPostpartum: {
    fontSize: FontSize.subtitleMedium_size,
    fontWeight: "700",
    textAlign: "left",
    color: Color.globalBlack,
    lineHeight: 22,
  },
  epdsPostpartumDepressionTWrapper: {
    height: 57,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    width: 342,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  text: {
    fontSize: FontSize.size_8xl,
    textAlign: "center",
    fontWeight: "600",
    height: 26,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    left: 0,
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  text1: {
    top: 5,
    left: 21,
    fontSize: FontSize.footnoteRegular_size,
    opacity: 0.75,
  },
  text2: {
    top: 12,
    height: 11,
    fontSize: FontSize.footnoteRegular_size,
    opacity: 0.75,
    width: 20,
    display: "flex",
    alignItems: "center",
    left: 29,
  },
  parent: {
    left: 12,
    width: 49,
  },
  yourScore: {
    top: 27,
    fontSize: FontSize.caption1Regular12_size,
    textTransform: "lowercase",
    left: 0,
  },
  groupContainer: {
    width: 63,
    height: 45,
  },
  groupWrapper: {
    borderRadius: Border.br_121xl,
    padding: Padding.p_31xl,
    justifyContent: "center",
    left: 0,
    height: 110,
    width: 110,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  groupChild: {
    opacity: 0.2,
    borderRadius: Border.br_3xs,
    left: 0,
    height: 110,
    width: 110,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    left: 0,
    height: 110,
    width: 110,
    position: "absolute",
  },
  groupLayout: {
    height: 110,
    width: 110,
  },
  yourResultSuggest: {
    color: Color.globalBlack,
  },
  moderatePostpartumDepression: {
    color: Color.colorDarkslateblue_200,
  },
  yourResultSuggestContainer: {
    lineHeight: 20,
    width: 189,
    marginLeft: 23,
    fontFamily: FontFamily.h3Regular,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  groupParent: {
    padding: Padding.p_xl,
    marginTop: 19,
    width: 342,
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    overflow: "hidden",
  },
  frameParent: {
    top: 111,
    left: 29,
    position: "absolute",
  },
  image4: {
    top: -68,
    left: -647,
  },
  image5: {
    top: -76,
    left: -636,
  },
  quiz: {
    marginLeft: -105.6,
    top: 41,
    left: "50%",
    lineHeight: 28,
    fontSize: FontSize.h5Semibold_size,
    textAlign: "left",
    position: "absolute",
  },
  backChild: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    height: 39,
    width: 39,
  },
  iconChevronleft: {
    marginTop: -7.3,
    top: "50%",
    right: 11,
    width: 9,
    height: 15,
    position: "absolute",
  },
  back: {
    top: 35,
    left: 33,
  },
  label: {
    lineHeight: 16,
    color: Color.colorGray_200,
  },
  writeTextHere: {
    marginTop: 4,
    color: Color.globalBlack,
    lineHeight: 22,
  },
  content: {
    flex: 1,
  },
  textField: {
    backgroundColor: Color.white,
    borderColor: Color.grayGray6,
    paddingHorizontal: Padding.p_5xl,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_base,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
  },
  review: {
    top: 362,
    left: 4,
    width: 385,
    height: 234,
    position: "absolute",
  },
  button: {
    lineHeight: 25,
    color: Color.white,
    fontSize: FontSize.h5Semibold_size,
    fontFamily: FontFamily.h3Regular,
  },
  buttonPrimary: {
    top: 662,
    backgroundColor: Color.main,
    width: 353,
    height: 60,
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    borderRadius: Border.br_3xs,
    justifyContent: "center",
  },
  done1: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    textAlign: "center",
  },
  doneWrapper: {
    top: 31,
    left: 287,
    borderColor: Color.wrong,
    width: 84,
    height: 48,
    paddingHorizontal: Padding.p_mini,
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: Color.colorGray_100,
  },
  homeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    color: Color.grayGray1,
  },
  tab: {
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    flex: 1,
  },
  ppdScreening: {
    color: Color.main,
  },
  tabBar: {
    top: 747,
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  ppdTestResults: {
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default PPDTestResults;
