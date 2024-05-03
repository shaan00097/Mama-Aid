import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const PPDTest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.ppdTest1}>
      <View style={styles.image2} />
      <View style={[styles.contentParent, styles.parentShadowBox]}>
        <View style={styles.content}>
          <View style={styles.text}>
            <Text style={styles.epdsPostpartum}>
              EPDS : Postpartum Depression Test
            </Text>
            <Text style={[styles.text1, styles.text1SpaceBlock]} />
          </View>
          <View style={styles.ratings} />
        </View>
        <View style={[styles.frameParent, styles.parentShadowBox]}>
          <View style={styles.image11Parent}>
            <Image
              style={styles.image11Icon}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
            <Text style={styles.ppdSelfScreening}>{`PPD 
Self Screening  `}</Text>
          </View>
          <View style={styles.pleaseReadTheBelowDetailsWrapper}>
            <Text style={[styles.pleaseReadThe, styles.text2Typo]}>
              Please read the below details !
            </Text>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.totalParentLayout}>
            <Text style={[styles.totalQuestions, styles.text2Typo]}>
              Total Questions:
            </Text>
            <Text style={[styles.text2, styles.text2Typo]}>30</Text>
          </View>
          <View style={[styles.totalTimeParent, styles.totalParentLayout]}>
            <Text style={[styles.totalQuestions, styles.text2Typo]}>
              Total Time:
            </Text>
            <Text style={[styles.text2, styles.text2Typo]}>15 min</Text>
          </View>
          <View style={styles.instructionsParent}>
            <Text style={[styles.instructions, styles.text2Typo]}>
              Instructions:
            </Text>
            <Text style={[styles.thisTestCanContainer, styles.text2Typo]}>
              <Text
                style={styles.thisTestCan}
              >{`This test can help you determine if you are experiencing symptoms of postpartum depression   This is not a diagnostic test. Please consult a physician if you are concerned about your mood.



`}</Text>
            </Text>
          </View>
        </View>
        <Pressable
          style={[styles.buttonPrimary, styles.tabFlexBox]}
          onPress={() => navigation.navigate("PPDTestPResults")}
        >
          <Pressable onPress={() => navigation.navigate("PPDTestPResults")}>
            <Text style={styles.previousResults}>Previous Results</Text>
          </Pressable>
        </Pressable>
        <View style={styles.instanceParent}>
          <View style={[styles.nextWrapper, styles.nextShadowBox]}>
            <Text style={[styles.next, styles.nextTypo]}>15:00 Min</Text>
          </View>
          <View style={[styles.nextContainer, styles.nextShadowBox]}>
            <Pressable onPress={() => navigation.navigate("PPDTest1")}>
              <Text
                style={[styles.start, styles.nextTypo]}
              >{`   Start  `}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.tabBar}>
          <Pressable
            style={[styles.tab, styles.tabFlexBox]}
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
            style={[styles.tab, styles.tabFlexBox]}
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
            style={[styles.tab, styles.tabFlexBox]}
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
            style={[styles.tab, styles.tabFlexBox]}
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
    </View>
  );
};

const styles = StyleSheet.create({
  parentShadowBox: {
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGray_100,
  },
  text1SpaceBlock: {
    marginTop: 4,
    alignSelf: "stretch",
  },
  text2Typo: {
    lineHeight: 20,
    fontSize: FontSize.body1Medium_size,
    textAlign: "left",
    color: Color.globalBlack,
  },
  totalParentLayout: {
    width: 310,
    flexDirection: "row",
  },
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  nextShadowBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_2xl,
    borderWidth: 1,
    borderColor: Color.wrong,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  nextTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  homeTypo: {
    marginTop: 7,
    lineHeight: 13,
    fontSize: FontSize.caption2Regular11_size,
    textAlign: "center",
    fontFamily: FontFamily.caption2Regular11,
    letterSpacing: 0,
  },
  image2: {
    top: -67,
    left: -651,
    width: 1282,
    height: 962,
    position: "absolute",
  },
  epdsPostpartum: {
    fontSize: FontSize.subtitleMedium_size,
    lineHeight: 22,
    textAlign: "left",
    color: Color.globalBlack,
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "700",
  },
  text1: {
    fontSize: FontSize.bodyMedium_size,
    lineHeight: 20,
    color: Color.grayGray1,
    fontFamily: FontFamily.caption2Regular11,
    letterSpacing: 0,
    marginTop: 4,
    textAlign: "left",
  },
  text: {
    flex: 1,
  },
  ratings: {
    width: 41,
    height: 18,
    justifyContent: "flex-end",
    display: "none",
    alignItems: "center",
  },
  content: {
    width: 328,
    flexDirection: "row",
  },
  image11Icon: {
    top: -1,
    left: 0,
    width: 421,
    height: 178,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  ppdSelfScreening: {
    top: 35,
    left: 18,
    lineHeight: 28,
    width: 146,
    fontFamily: FontFamily.h3Regular,
    fontSize: FontSize.h5Semibold_size,
    textAlign: "left",
    color: Color.globalBlack,
    fontWeight: "700",
    position: "absolute",
  },
  image11Parent: {
    height: 154,
    width: 326,
    backgroundColor: Color.main,
    borderRadius: Border.br_base,
    overflow: "hidden",
  },
  pleaseReadThe: {
    fontFamily: FontFamily.h3Regular,
  },
  pleaseReadTheBelowDetailsWrapper: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameParent: {
    paddingBottom: 9,
    marginTop: 17,
    borderRadius: Border.br_base,
  },
  totalQuestions: {
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  text2: {
    marginLeft: 8,
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "700",
    fontSize: FontSize.body1Medium_size,
    flex: 1,
  },
  totalTimeParent: {
    marginTop: 12,
  },
  instructions: {
    alignSelf: "stretch",
    fontFamily: FontFamily.textCaptionSemiBold,
    fontWeight: "700",
    fontSize: FontSize.body1Medium_size,
  },
  thisTestCan: {
    fontFamily: FontFamily.textCaptionSemiBold,
  },
  thisTestCanContainer: {
    opacity: 0.75,
    marginTop: 4,
    alignSelf: "stretch",
  },
  instructionsParent: {
    marginTop: 12,
    alignSelf: "stretch",
  },
  frameGroup: {
    height: 247,
    paddingTop: Padding.p_3xs,
    width: 326,
    marginTop: 17,
  },
  previousResults: {
    lineHeight: 25,
    color: Color.white,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.h3Regular,
    fontSize: FontSize.h5Semibold_size,
  },
  buttonPrimary: {
    borderRadius: Border.br_3xs,
    width: 353,
    height: 60,
    paddingHorizontal: Padding.p_133xl,
    paddingVertical: Padding.p_mid,
    backgroundColor: Color.main,
    marginTop: 17,
    flexDirection: "row",
  },
  next: {
    color: Color.globalBlack,
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  nextWrapper: {
    backgroundColor: Color.colorGray_100,
  },
  start: {
    color: Color.gray6,
  },
  nextContainer: {
    width: 102,
    marginLeft: 150,
    backgroundColor: Color.main,
  },
  instanceParent: {
    paddingLeft: 13,
    marginTop: 17,
    alignSelf: "stretch",
    flexDirection: "row",
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
    paddingVertical: Padding.p_5xs,
    flex: 1,
  },
  ppdScreening: {
    color: Color.main,
  },
  tabBar: {
    width: 360,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_13xl,
    marginTop: 17,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
  },
  contentParent: {
    top: 0,
    left: 3,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_21xl,
    width: 390,
    paddingTop: 65,
    paddingBottom: Padding.p_21xl,
    alignItems: "center",
    position: "absolute",
    height: 852,
  },
  ppdTest1: {
    borderRadius: Border.br_11xl,
    width: "100%",
    overflow: "hidden",
    height: 852,
    flex: 1,
    backgroundColor: Color.colorGray_100,
  },
});

export default PPDTest;
